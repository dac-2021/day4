function iamAlsoPromise() {
  // Explicitly
  return new Promise((resolve, reject) => {});
}

// Promise is implicit
async function iampromiseFunction() {
  // logic
}

let p = iampromiseFunction();
console.log(p);
