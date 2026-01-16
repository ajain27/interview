function sessionCount(timeout, users, timestamps) {
  const lastSeen = new Map();
  let sessions = 0;

  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const time = timestamps[i];

    if (!lastSeen.has(user) || time - lastSeen.get(user) > timeout) {
      sessions++;
    }
    lastSeen.set(user, time);
  }
  return sessions;
}

console.log(
  sessionCount(10, ["u1", "u2", "u1", "u2", "u1"], [0, 5, 15, 20, 30])
);
