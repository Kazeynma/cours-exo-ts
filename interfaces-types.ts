//EXO1
interface Vehicule {
    brand: string, 
    year: string, 
    color: string
}

const voiture : Vehicule = {
    brand : "peugeot",
    year: "2001", 
    color: "white"
}

console.log(voiture)

//EXO2
type Personne = {
    nom: string, 
    age: string, 
    adresse: string
}

const Bobby : Personne = {
    nom : "Bob",
    age : "13",
    adresse : "13 rue des paquerettes"
}

//EXO3
interface Animal {
    nom: string
}

interface Chien extends Animal {
    race: string
}

const monChien : Chien = {
    nom : "Bill", 
    race : "Golden Retriever"
}

//EXO 4
type Identifiant = string | number
const id : Identifiant = "oui"
console.log(id)

//EXO 5
interface Calcul {
    addition1(a: number, b: number) : number, 
}

const calculatrice : Calcul = {
    addition1: function(a:number, b: number) {return a+b}
}

console.log(calculatrice.addition1)