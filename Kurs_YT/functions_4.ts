function FnOne(): void {
    console.log("Dupa zbita")
}
FnOne() // bez tego nic sie nie zadziało, ale dopiero muszę ją wywołać i dopiero pojawił sie consol.log 
 
console.log("dupa", FnOne()) // console.log("dupa", FnOne) - to zwraca tylko 
// dupa [Function: FnOne] - nazwa funkcji, jak po nazwie fukcji daję tylko () 
// to zwraca undefined bo fukncja jest void
// po zakomentowaniu 4 wiersza dalej zwraca coś, dlaczego? 

function FnTwo(): string {
    return "MaDko Jednyko Kochano, to jakiś cwaniak"
}
const maDka = FnTwo() // a zamiast const mogę Let? 
console.log("nie wiem skąd to:", maDka) // najpier funkcja, potem zmienna,
//  do zmiennej która jest stałą maDka przypisuję wartość fukcji
// a potem wywołuję consol.loga zmiennej, którj przypisałem wartośc Fn
// zmieniłem string na number i dalej zwracało to samo, a jak return zwróciłem na 5 
// dalej działało

console.log("Funkcja z wartościami")

function FnThird(numberOne: number, numberTwo: number): number {
    const result = numberOne + numberTwo // zadziałało z let zamiast const
    return result
}
const result1 = FnThird(1, 9)
console.log("trele morele", result1) // jak wpisałem po result bez 1 to tez zadziałało

console.log("Funkcja z wartościami z błędem")
const result2 = FnThird('małpa', 9) // warczy poprzez podkreślenie małpy ale wywołanie
//daje wynik "małpa9"
console.log("małpa", result2)

console.log("Funkcja z ANY")

function FnFourth(variableThree: any, variableFour: any): number{
    return variableThree + variableFour
}
const result4 = FnFourth(1, "kombinacja")
console.log('cóś', result4)