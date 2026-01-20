// promise is triggered to resolve here, when creating
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved");
  }, 1000);
});

promise1.then((res) => {
  console.log(res);
});

//function to call a promise
// const getPromise = function() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(res);
//         }, 1000);
//     });
// };

// // promise is triggered to resolve here, when calling the function
// getPromise().then((res) => {
//     console.log(res);
// });

// How to consume a Promise?

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved");
  }, 1000);
});

promise3.then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);
promise3.catch((err) => {
  console.log(err);
});
promise3.finally(() => {
  console.log("finally over");
});
