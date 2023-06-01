// TS apporte une syntaxe qui permet d'ajouter des informations sur les types de variables
const monEntier : number = 0;
const maChaine : string = "une chaîne de caractères";

// // on peut créer ses propres types 
// const unEtudiant : Etudiant = new Etudiant();

// //typescript supporte aussi ce que l'on appelle la genercite
// const pleinsDetudiants: Array<Etudiant> = [new Etudiant()];

let iCanChangeType : any = 4;
iCanChangeType = false;

//enums
enum StudentStatus {
    Asleep, 
    Focused,
    Missing
};

//les interfaces
interface Student {
    firstname : string, 
    lastname : string, 
    age : number, 
    status : StudentStatus, 
    followInClass(cours : string) : void // on peut aussi passer des fonctions en propriétés
}

//type de retour
function createStudent(firstname : string, lastname : string, age : number, status : StudentStatus) : Student {
	const newStudent : Student = {
	age: age, 
	firstname: firstname, 
	lastname: lastname,
	status : status ,//optionnel de donner un type,
    followInClass: (test: string) => console.log(test) 

	};
	return newStudent
}

//class
class Vehicule {
    brand : string;
    color : string; 
    speed: number;

    deplacer(): void {
        console.log("je me déplace")
    }

    constructor() {
        console.log("nouveau véhicule créer")
    }
}