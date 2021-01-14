// Returns Promise
async function helloAsync1() {
  try {
    // resolve("Async 1")
    return "Async 1";

    // Intentionally throwing Exception :: to simulate the reject use case
    // throw new Error("I am custom Excption");
  } catch (e) {
    // reject('err');
    throw e;
  }
}

// Returns Promise
async function helloAsync2() {
  return "Async 2";
}

// Returns Promise
async function helloAsync3() {
  return "Async 3";
}

// ES6 Promise Chaining :: Consuming the Promise
async function main() {
  try {
    let res1 = await helloAsync1();
    console.log(res1);

    let res2 = await helloAsync2();
    console.log(res2);

    let res3 = await helloAsync3();
    console.log(res3);
  } catch (err) {
    conosole.log(err);
  }
}

main();

// Promise => resolve => reject
// Promise.then().catch()
// async await
