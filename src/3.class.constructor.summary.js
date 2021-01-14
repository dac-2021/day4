/**
 * Only Data Member
 * Hardcoded member
 */
class Person {
  constructor() {
    this.id = 1;
    this.name = "Virat";
    this.email = "virat@gmail.com";
  }
}

/**
 * Data Member
 * Parametrized Constructor
 */
class Student {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

/**
 * Member Function
 */
class Employee {
  sayHi() {
    // Logic
  }

  sayHello() {
    // Logic
  }
}

/**
 * Data Member
 * Member Fuction
 */
class Car {
  constructor(id, model, brand, engine) {
    this.id = id;
    this.model = model;
    this.brand = brand;
    this.engine = engine;
  }

  engineDetails() {
    // logic
  }

  brandDetail() {
    // logic
  }
}
