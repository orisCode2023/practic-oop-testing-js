import {test} from 'node:test'
import assert from 'node:assert/strict'
import Zoo from './zoo.js'
import {Animal, Cat, Dog} from './animal.js'

const animal = new Animal("lio")
const zoo = new Zoo()

test("increase energy cannot be over 100", () => {
    animal.eat(5345)
    assert.ok(animal.getEnergy() <= 100);
})

test("Dog.speak() returns Woof! and Cat.speak() returns Meow!", () => {
  const d = new Dog("Rex");
  const c = new Cat("Mimi");

  assert.equal(d.speak(), "Woof!");
  assert.equal(c.speak(), "Meow!");
});


test("Throw an Error if animal is not a animal class", () => {
    assert.throws(() => zoo.addAnimal(94385) , Error)
})