export class Animal {
    name 
    #enrgy
    constructor(name){
        this.name = name
        this.#enrgy = 100
    } 
    getEnergy(){
        return this.#enrgy
    }
    eat(amount){
        if (amount < 0){
            throw new Error("The amount must be a positive number")
        }
        this.#enrgy += amount
        if (this.#enrgy > 100){
            this.#enrgy = 100
        }
        
    }
    speak(){
        return " "
    }
}

export class Dog extends Animal {
    constructor(name){
        super(name)
    }
    speak(){
        return "Woof!" 
    }
}
export class Cat extends Animal {
    constructor(name){
        super(name)
    }
    speak(){
        return "Meow!"
    }
}
