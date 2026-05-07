console.log("Pirsza")

function addTwo(numberOne: number, numberTwo = 77): number {
    return numberOne + numberTwo
}
let wynik = addTwo(2) // ja po przecinku dałem 2 to napisało 77?
console.log("co wpisze się wynik?", wynik)
// zawsze po {} w funkcji jest reszta operacji? 

console.log("Anonim")
const FnZmienna = function (a: number, t: number): number { //zawsze const?
    return a + t
}
const SumaFnZm = FnZmienna(44, 444)// zawsze const?
console.log("NICNIC", FnZmienna, SumaFnZm) //sprawdzam co mi console.log wypluje


console.log("Strzałkowa")
 const ArrowFn = (d: number, s: number): number => {
    return d * s 
 }
 let NumbersForArrow = ArrowFn(5, 15) //dałem let taki ze mnie wariat
 console.log("Rozkminiam co daje funkcja", ArrowFn, NumbersForArrow)