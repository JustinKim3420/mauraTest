class Person {
  constructor(name) {
    this.name = name;
  }

  openMouth() {
    console.log(this.name + " opens his/her mouth");
  }
  closeMouth() {
    console.log(this.name + " closes his/her mouth");
  }
  getName() {
    return this.name;
  }
}

class Doctor extends Person {
  openAnotherMouth(person) {
    if (person.constructor.name !== "Person") {
      console.log("Cannot open a non-person's mouth");
      return;
    }
    console.log(`Asked ${person.getName()} to open his/her mouth`);
    person.openMouth();
  }
}

//A simple example of creating an instance of the classes and showing how the methods work
const personOne = new Person("John");
const doctorOne = new Doctor("Luke");

personOne.openMouth();
doctorOne.openAnotherMouth(personOne);
