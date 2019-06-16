import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log("I'm", this.name, "and I'm", this.age, "years old");
    }
}

class Lion extends Animal {
    constructor(name, age, furColor, speed) {
        super(name, age);
        this.furColor = furColor;
        this.speed = speed;
    }

    roar() {
        console.log('RooooAR! i have',
        this.furColor,
        'fur, and i can run',
        this.speed, 'miles an hour!')
    }
}

const lion1 = new Lion('Mufasa', 20, 'pink', 999);

lion1.speak();
lion1.roar();

console.log(lion1);