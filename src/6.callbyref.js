function updateUser(p1) {
  // logic
  p1.name = "Virat Kohli";
}

// Referernce Variable :: Object Type :: Call/Pass by Reference
let u1 = {
  id: 1,
  name: "virat",
  email: "virat@gmail.com",
};

console.log(u1);

// calling the function :: Pass by referece
updateUser(u1);

console.log(u1);
