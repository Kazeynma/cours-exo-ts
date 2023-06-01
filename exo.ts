//EX1
let age : number = 20;
let greetings : string = "Hello !";
let estActif : boolean = true;

//EX2
const addition = (a : number, b : number) : number => {
    return a + b
}
console.log(addition(2,3))

const concatenation = (a : string, b: string) : string => {
    return a + b
}

console.log(concatenation("Hello", "World"))

//EX3
let arrayNumber : number[] = [1, 2, 3]
arrayNumber.push(4)
arrayNumber.forEach((number) => console.log(number))

//EX4 
let user : object = {
    name : "Bob", 
    age : 13
}

user = {
    ...user, 
    email : "bob@gmail.com"
}

console.log(user)

//EXO5
class Personne {
    nom : string;
    age : number;

    sePresenter() : void {
        console.log(`Je m'appelle ${this.nom} et j'ai ${this.age} ans`)
    }
}

const student : Personne  = new Personne()
student.nom = "Bob"
student.age = 10

student.sePresenter()

//EXO6
interface Forme {
    hauteur : number, 
    largeur : number, 
}

class Rectangle implements Forme {
    hauteur : number;
    largeur: number;

    calculerSurface() : number {
        return this.hauteur*this.largeur
    }

    constructor(hauteur: number, largeur: number) {
        this.hauteur = hauteur, 
        this.largeur = largeur
    }
}

const Rectangle1 : Rectangle = new Rectangle(14, 5)
console.log(Rectangle1.calculerSurface())