var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//EX1
var age = "oui";
var greetings = "Hello !";
var estActif = true;
//EX2
var addition = function (a, b) {
    return a + b;
};
console.log(addition(2, 3));
var concatenation = function (a, b) {
    return a + b;
};
console.log(concatenation("Hello", "World"));
//EX3
var arrayNumber = [1, 2, 3];
arrayNumber.push(4);
arrayNumber.forEach(function (number) { return console.log(number); });
//EX4 
var user = {
    name: "Bob",
    age: 13
};
user = __assign(__assign({}, user), { email: "bob@gmail.com" });
console.log(user);
//EXO5
var Personne = /** @class */ (function () {
    function Personne() {
    }
    Personne.prototype.sePresenter = function () {
        console.log("Je m'appelle ".concat(this.nom, " et j'ai ").concat(this.age, " ans"));
    };
    return Personne;
}());
var student = new Personne();
student.nom = "Bob";
student.age = 10;
student.sePresenter();
var Rectangle = /** @class */ (function () {
    function Rectangle(hauteur, largeur) {
        this.hauteur = hauteur,
            this.largeur = largeur;
    }
    Rectangle.prototype.calculerSurface = function () {
        return this.hauteur * this.largeur;
    };
    return Rectangle;
}());
var Rectangle1 = new Rectangle(14, 5);
console.log(Rectangle1.calculerSurface());
