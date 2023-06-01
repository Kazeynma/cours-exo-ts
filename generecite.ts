//EXO1
function identite<T>(valeur: T) : T {
    return valeur
}

//EXO2
function longueurTableau<T>(arr : Array<T>) : number {
    return arr.length
}

//EXO3
function rechercherElement<T>(arr : Array<T>, element : T) : number{
    let position = arr.indexOf(element)
    if (position === -1) {
        return -1
    } else {
        return position
    }
}

//EXO4
class Pile<T> {
    element : T

    empiler(itm: any) {
        this.element.push()
    }

    depiler(item: any) {
        this.element.pop()
    }
}

//EXO5
interface Pair {
    <T>(premier : T) : T, 
    <U>(deuxieme : U) : U
}