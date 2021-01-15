const fs = require("fs");

let f1 = fs.readFileSync(`${__dirname}/demo.js`, { encoding: "utf-8" });
console.log(f1);
