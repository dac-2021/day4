console.log("1");

// After 2 sconds
setTimeout(() => {
  console.log("After 2 seconds");
}, 2000);

// Inbuilt Method :: Gloabal Method
// 1000 ms = 1second
const task = () => {
  console.log("After 1 seconds");
};
setTimeout(task, 1000);

console.log("3");

//EVENT LOOP :: TASK ARRAY
[];
// Task1 IN :: task1 = console.log("1")
["task1"]; // Output 1
[];
// Task2 IN :: task2 = setTimout(, 2000)
["task2"];
[]; //  Task Queue ["task2"]

// TASK3 IN task3 = setTimeout(, 1000)
["task3"];
[]; // Task Queue ["task2", task3]

// Task 4 :: console.log("4")
["task4"]; // Ouput :: 4

// After 1 second event :: task3
["task3"]; // output 3

// After 2 second
["task2"]; // output 2
