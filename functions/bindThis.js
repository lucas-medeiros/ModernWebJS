const person = {
  greetings: "Good morning!",
  speak() {
    console.log(this.greetings);
  }
};

person.speak();
const speak = person.speak;
speak();

const personSpeak = person.speak.bind(person);
personSpeak();
