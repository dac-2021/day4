/**
 * As Prototype or Blueprint
 * Keep your first Letter Capital
 *
 * Hardcoded value
 */
function Person() {
  this.id = 1;
  this.name = "Virat";
  this.email = "virat@gmail.com";
}

/**
 * Only Data Member
 * @param {*} id
 * @param {*} name
 * @param {*} email
 */
function Student(id, name, email) {
  this.id = id;
  this.name = name;
  this.email = email;
}

/**
 * Only Member Fucntion
 */
function Employee() {
  this.sayHi = () => {
    // Logic
  };

  this.sayHello = () => {
    // Logic
  };
}

/**
 * Data Member
 * Member Function
 * @param {*} model
 * @param {*} color
 * @param {*} enigne
 */
function Car(model, color, enigne) {
  this.model = model;
  this.color = color;
  this.enigne = enigne;

  this.getEngineDetails = () => {
    // logic
  };

  this.getModelDetails = function () {
    // logic
  };
}
