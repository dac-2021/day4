// Cooked Output
let num = 10;

// Promised Output
let p = new Promise((resolve, reject) => {
  resolve(10);
});

// Extracting the ouptut from the Promise Output
p.then((res) => {
  console.log(res);
});
