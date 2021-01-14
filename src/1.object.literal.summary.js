// Object Literal with
// Only Data Member
let user1 = {
  id: 1,
  name: "Virat",
  email: "virat@gmail.com",
  mobile: "9999999999",
};

// Object Literal with
// Data Member and Member Function
let user2 = {
  id: 1,
  name: "Virat",
  email: "virat@gmail.com",
  mobile: "9999999999",

  sayHi: () => {
    // logic
  },

  sayHello: () => {
    // logic
  },
};

// Object Liternal with
// Only Member Function
let user3 = {
  sayHi: () => {
    // logic
  },

  sayHello: () => {
    // logic
  },
};

console.log(user1);
console.log(user2);
console.log(user3);
