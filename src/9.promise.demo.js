let p = new Promise((resolve, reject) => {
  // complex logic
  // ....
  resolve();
  // reject();
});

// console.log(p);

// Trying to handle the promise
// p.then(() => console.log("Promise Resolved"));
// p.catch(() => console.log("Promise Rejected"));

p.then(() => {
  console.log("Promise Resovled");
}).catch(() => {
  console.log("Promise rejected");
});
