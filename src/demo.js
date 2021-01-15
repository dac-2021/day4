const fs = require("fs");
const Promise = require("bluebird");
Promise.promisifyAll(fs);

let f1 = fs.readFileSync(`${__dirname}/demo.js`, { encoding: "utf-8" });
console.log(f1);

fs.readFileAsync(`${__dirname}/demo.js`, {
  encoding: "utf-8",
}).then((data) => console.log(data));
