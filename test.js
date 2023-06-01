// TS apporte une syntaxe qui permet d'ajouter des informations sur les types de variables
var monEntier = 0;
var maChaine = "une chaîne de caractères";
// // on peut créer ses propres types 
// const unEtudiant : Etudiant = new Etudiant();
// //typescript supporte aussi ce que l'on appelle la genercite
// const pleinsDetudiants: Array<Etudiant> = [new Etudiant()];
var iCanChangeType = 4;
iCanChangeType = false;
//enums
var StudentStatus;
(function (StudentStatus) {
    StudentStatus[StudentStatus["Asleep"] = 0] = "Asleep";
    StudentStatus[StudentStatus["Focused"] = 1] = "Focused";
    StudentStatus[StudentStatus["Missing"] = 2] = "Missing";
})(StudentStatus || (StudentStatus = {}));
;
//type de retour
function createStudent(firstname, lastname, age, status) {
    var newStudent = {
        age: age,
        firstname: firstname,
        lastname: lastname,
        status: status,
        followInClass: function (test) { return console.log(test); }
    };
    return newStudent;
}
//class
var Vehicule = /** @class */ (function () {
    function Vehicule() {
        console.log("nouveau véhicule créer");
    }
    Vehicule.prototype.deplacer = function () {
        console.log("je me déplace");
    };
    return Vehicule;
}());
