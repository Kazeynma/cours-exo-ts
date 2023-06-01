//EXO1
function afficherValeur(valeur : string | number) {
    if (typeof valeur === "string") {
        console.log("La valeur est une chaîne de caractères : " + valeur)
    } else if (typeof valeur === "number") {
        console.log("La valeu rets un nombre : " + valeur)
    }
}
afficherValeur("oui")
//EXO2
let resultat : string | number = 3
if (typeof resultat === "string") {
    console.log(resultat + " je concatène")
} else {
    console.log(resultat*2)
}

//EXO3

let tabValue : string[] |number[] = [1, 2, 3]
tabValue.forEach((element) => {
    if (typeof element === "string") {
        console.log(element)
    } else {
        console.log(element*2)
    }
})

//EXO4
function estUneChaine(valeur : string | number) {
    if (typeof valeur === "string") {
        return true
    } else {
        return false
    }
}
console.log(estUneChaine("haha"))
console.log(estUneChaine((15)))

//EXO5
interface Forme {
    type : string, 
    rayon: number, 
    longueur?: number, 
    largeur?: number,
}

function afficherForme(forme : Forme) {
    if (forme.type === "cercle") {
        console.log(forme.rayon)
    } else if (forme.type  === "rectangle") {
        console.log(forme.longueur)
        console.log(forme.largeur)
    }
}