console.log("Pierwszy Interfaces")

interface animals {
    nazwa?: string
    rasa?: string
    wiek?: number
    life?: boolean
    kolor?: string
}

const kotPierwszy: animals = {
    nazwa: "Bazyl",
    rasa: "MixFeature",
    wiek: 4,
    life: true,
    kolor: "white-grey"
}
console.log("kotPierwszy:", kotPierwszy)

const kotDrugi: animals = {
    nazwa: "Pimpek",
    rasa: "MixFeature", 
    wiek: 4,
    life: true,
    kolor: "black-white"
}
console.log("kotDrugi:", kotDrugi)

const kotTrzeci: animals = {
    nazwa: "Zolza",
    rasa: "MixFeature",
    wiek: 10,
    life: false,
    kolor: "black"
}
console.log("kotTrzeci:", kotTrzeci)

const kotCzwarty: animals = {
    nazwa: "Zbika",
    rasa: "MixFeature",
    wiek: 2,
    life: true
}
 console.log("kotCzwarty:", kotCzwarty)
const kotPiaty: animals = {
}
console.log("kotPiaty:", kotPiaty)


console.log("Interface w funkcji")

function printDataAnimal(nazwa: string, rasa: string, wiek: number, life: boolean, kolor: string): void {
    console.log(`Nazwa: ${nazwa}, rasa: ${rasa}, wiek: ${wiek}, żyje: ${life}, kolor: ${kolor}`)
}
printDataAnimal(kotPierwszy.nazwa, kotPierwszy.rasa, kotPierwszy.wiek, kotPierwszy.life, kotPierwszy.kolor) // czemu to warczy a działa? 

function printCats(animal: animals): void {
    console.log(`Nazwa: ${animal.nazwa}, rasa: ${animal.rasa}, wiek: ${animal.wiek}, żyje: ${animal.life}, kolor: ${animal.kolor}`)
}

printCats(kotDrugi)
printCats(kotTrzeci)
printCats(kotPiaty)

console.log("Interface and union types")

interface car {
    marka: string
    model: string
    rok: number | string
}
const car1: car = {
    marka: "Toyota",
    model: "Corolla",
    rok: 2020
}
const car2: car = {
    marka: "Honda",
    model: "Civic",
    rok: "2019"
}
console.log("car1:", car1)
console.log("car2:", car2)

console.log("Interface inside interfaces")
interface author {
    name: string
    surname: string
    age?: number
}
interface book {
    title: string
    author: author
}
const JanKochanowski: author = {
    name: "Jan",
    surname: "Kochanowski",
    age: 50
}
const Treny: book = {
    title: "Treny",
    author: JanKochanowski
}

console.log("Treny:", Treny)

const PanTadeusz: book = {
    title: "Pan Tadeusz",
    author: {
        name: "Adam",
        surname: "Mickiewicz"
    }
}
console.log("PanTadeusz:", PanTadeusz)