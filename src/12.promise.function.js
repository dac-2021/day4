// Simulating the Promise
function iampromiseFunction(p1) {
  return new Promise((resolve, reject) => {
    if (p1 == 1) {
      resolve("Success");
    } else {
      reject("Error");
    }
  });
}

let p = iampromiseFunction(1);
p.then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
});
