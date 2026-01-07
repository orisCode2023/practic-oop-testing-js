import {Animal} from './animal.js'
class Zoo {
    #animals
    constructor() {
        this.#animals = []
    }

    addAnimal(animal) {
        if (!(animal instanceof Animal)) {
            throw new Error("animal must be an instance of Animal class")
        }
        this.#animals.push(animal)
        
    }
    makeAllSpeake() {
        const sound = []
        this.#animals.forEach((animal) => sound.push(animal.speak()))
        return sound
    }
}

export default Zoo