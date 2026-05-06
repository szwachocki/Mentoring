console.log("Funkcja 1 - opis")

function PierwszaFunkcja(): void {
   // console.log("Dzień dobry")
}
PierwszaFunkcja()

console.log("pierwszy", PierwszaFunkcja)

function DrugaFukcja(): string {
    return "To co zwraca druga funkcja z zadeklarowanym rodzajem"
}
//DrugaFukcja() // czemu to nic nie dało? czy to ma być tylko przy void? 
const dwa = DrugaFukcja()
console.log("zdanie z DrugaFukcja()", dwa)

console.log("Funkcja 3 - z przyjęciem wartości")

function Dodawanie(numerJeden: number, numerDwa: number, numerTrzy: number): number{
// po dwukropku jest typ zmiennej bedącej wynikiem funkcji? 
    const result8888 = numerJeden + numerDwa + numerTrzy
    return result8888
}
const result8888 = Dodawanie(333, 3333, "czemu?") //czemu pod result warczy? dodałem 8888
//czy nie powinno sie tak zrobić dopiero przy określeniu typu zmiennej jako any? 
console.log("czy teraz będzie wynik?", result)
