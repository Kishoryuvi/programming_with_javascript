class Dog {
    constructor(name) {
        this.name = name; 
    }
    
    present() {
        return "I have a dog " + this.name; 
    }
}

class Breed extends Dog {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    show() {
        console.log(this.present() + " and his breed is " + this.breed);
    }
}

const myDog = new Breed("Jack", "Husky");
myDog.show();
