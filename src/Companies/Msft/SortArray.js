function sort(arr) {
  let temp;
  let done = false;
  let swapped;

  while (!done) {
    swapped = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
        swapped = 1;
      }
    }
    if (swapped === 0) {
      done = true;
    }
  }
  return arr;
}

console.log(sort([5, 7, 2, 3, 9, 4, 1]));
