function maxDestroyedBruteForce(heights, descentRates) {
  const n = heights.length;
  let max = 0;

  function permute(order, used) {
    let time = 0;
    let destroyed = 0;

    for (let i = 0; i < order.length; i++) {
      const idx = order[i];
      const timeToLand = heights[idx] / descentRates[idx];

      if (time >= timeToLand) {
        break; // aircraft landed
      }

      destroyed++;
      time++;
    }

    max = Math.max(max, destroyed);
  }

  function backtrack(order, used) {
    if (order.length > 0) {
      permute(order, used);
    }

    if (order.length === n) return;

    for (let i = 0; i < n; i++) {
      if (!used[i]) {
        used[i] = true;
        order.push(i);
        backtrack(order, used);
        order.pop();
        used[i] = false;
      }
    }
  }

  backtrack([], Array(n).fill(false));
  return max;
}

console.log(maxDestroyedBruteForce());

// function maxDestroyed(heights, descentRates) {
//   const n = heights.length;

//   // Step 1: compute landing times
//   const times = heights.map((h, i) => h / descentRates[i]);

//   // Step 2: sort by earliest landing time
//   times.sort((a, b) => a - b);

//   // Step 3: simulate destruction
//   let destroyed = 0;

//   for (let t = 0; t < n; t++) {
//     if (t >= times[t]) {
//       break;
//     }
//     destroyed++;
//   }

//   return destroyed;
// }
