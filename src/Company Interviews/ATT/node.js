class RateLimiterMiddleware {
  constructor(options) {
    this.rateLimitStore = new Map();
    this.options = options;
  }

  middleware() {
    return (req, res, next) => {
      const { maxRequests, timeWindow } = this.options;
      const clientIp = req.ip || req.connection.remoteAddress;
      const currentTime = Date.now();

      let clientData = this.rateLimitStore.get(clientIp);

      if (!clientData) {
        clientData = {
          requestCount: 0,
          firstRequestTime: currentTime,
        };
      }

      if (currentTime - clientData.firstRequestTime >= timeWindow) {
        clientData.requestCount = 0;
        clientData.firstRequestTime = currentTime;
      }

      clientData.requestCount += 1;
      this.rateLimitStore.set(clientIp, clientData);

      const remaining = maxRequests - clientData.requestCount;

      res.setHeader("X-RateLimit-Limit", maxRequests);
      res.setHeader("X-RateLimit-Remaining", Math.max(0, remaining));
      res.setHeader(
        "X-RateLimit-Reset",
        clientData.firstRequestTime + timeWindow
      );

      if (clientData.requestCount > maxRequests) {
        res.setHeader("X-RateLimit-Remaining", 0);
        return res.status(429).json({
          message: "You have exceeded the rate limit. Please try again later.",
        });
      }

      next();
    };
  }

  reset() {
    this.rateLimitStore.clear();
  }
}

module.exports = RateLimiterMiddleware;
