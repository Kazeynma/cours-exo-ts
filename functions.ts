//EXO1
const addition = (a : number, b : number) : number => {
    return a + b
}
console.log(addition(2,3))

//EXO2
function salutations(nom: string, titre?: string) : string {
    if (titre === "") {
        return "Bonjour M." + nom
    }
    return "Bonjour" + titre + nom
}

console.log(salutations("Bob"))

//EXO3
function calcuPrixTotal(prixUnitaire: number = 0 , quantite: number = 0): number{
    return prixUnitaire*quantite
}
console.log(calcuPrixTotal(12,2))

//EXO4
function AfficherInfo(info: string): void {
    console.log(info)
}

function AfficherInfo(info: number): void {
    console.log(info*2)
}
console.log(AfficherInfo("oui"))
console.log(AfficherInfo(3))

//EXO5
function renverser(arr: Array<string>) {
    return arr.reverse()
}