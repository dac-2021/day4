// Promise is implicit
async function helloAsync1() {
  // resolve("hello")
  return "hello";
}

async function helloAsync2() {
  return "world";
}

/*helloAsync1().then((res) => {
  console.log(res);
});

helloAsync2().then((res) => {
  console.log(res);
});*/

helloAsync1()
  .then((res) => {
    console.log(res);

    return helloAsync2();
  })
  .then((res) => {
    console.log(res);
  });
