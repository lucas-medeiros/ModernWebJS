class Person {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log("Hello, my name is " + this.name);
  }
}

const p1 = new Person("John");
p1.speak();

const createPerson = name => {
  return {
    speak: () => console.log("Hello, my name is " + name)
  };
};

const p2 = createPerson("John");
p2.speak();
