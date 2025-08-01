console.log("\n--------Interfaces--------\n")

// Interfejsy w TypeScript służą do definiowania pól obiektów
// Interfejs - mówiąc prosto - to "bardziej złożony typ"
// Aby zdefiniować interfejs musimy:
// - użyć słowa kluczowego "interface"
// - zdefiniować listę właściwości z ich typami

interface human {
    name: string
    age: number
    hair: string
    height: number
    weight: number
}

// Teraz możemy użyć interfejsu przy tworzeniu obiektu:
const daleCopper: human = {
    name: "Dale Cooper",
    age: 40,
    hair: "black",
    height: 182,
    weight: 70
}

// musimy podać wszystkie pola zdefiniowane w interfejsie!
// jeśli nie podamy wszystkich właściwości i wartości, dostaniemy błąd
// np. bez name:
// Property 'name' is missing in type '{ age: number; hair: string; height: number; weight: number; }'
// but required in type 'human'.ts(2741)

// TODO: uncomment to see error in IDE ⛔
// const otherHuman: human = {
//     age: 40,
//     hair: 'black',
//     height: 182,
//     weight: 70
// }

// interfejs może mieć opcjonalne właściwości:
interface book {
    title: string
    author: string
    owner?: string
}

// teraz oba poniższe użycia są poprawne:
const book1: book = {
    author: "Jack Black",
    title: "The D."
}

const book2: book = {
    author: "John Doe",
    title: "Greenfield",
    owner: "Kyle"
}

console.log("book1:", book1)

// na konsoli 👀 zobaczysz:
// book1: { author: 'Jack Black', title: 'The D.' }

console.log("\n--------Interface and functions--------\n")

// Po co używać interfejsów?
// Do agregowania danych!

// spójrz na przykład - funkcja, która potrzebuje wielu parametrów:

function printHumanData(name: string, age: number, hair: string, height: number, weight: number): void {
    console.log(`name:${name} age:${age} hair:${hair} height:${height} weight:${weight}`)
}

// użycie nie jest takie proste:
printHumanData(daleCopper.name, daleCopper.age, daleCopper.hair, daleCopper.height, daleCopper.weight)

// to dużo parametrów...
// możemy to zredukować do jednego obiektu/interfejsu:

function printHuman(human: human): void {
    console.log(`name:${human.name} age:${human.age} hair:${human.hair} height:${human.height} weight:${human.weight}`)
}

// użycie jest proste:
printHuman(daleCopper)

// na konsoli 👀 zobaczysz:
// name:Dale Cooper age:40 hair:black height:182 weight:70

console.log("\n--------Interface and union types--------\n")

// możemy używać typów złożonych (union types) w interfejsach:
interface magazine {
    title: string
    author: string
    pages: string | number
}

// teraz oba poniższe użycia są poprawne:
const magazine1: magazine = {
    author: "Jack Black",
    title: "The D.",
    pages: "123"
}

const magazine2: magazine = {
    author: "John Doe",
    title: "The R.",
    pages: 321
}

console.log("magazine1:", magazine1)
console.log("magazine2:", magazine2)

// na konsoli 👀 zobaczysz:
// magazine1: { author: 'Jack Black', title: 'The D.', pages: '123' }
// magazine2: { author: 'John Doe', title: 'The R.', pages: 321 }

console.log("\n--------Interface inside interfaces--------\n")

// możemy używać interfejsów w interfejsach:
interface author {
    author: string
    country: string
}
interface game {
    title: string
    author: author
}

// teraz oba poniższe użycia są poprawne:
const jackBlack: author = {
    author: "Jack Black",
    country: "USA"
}

const myGame: game = {
    author: jackBlack,
    title: "Journey"
}

console.log("myGame:", myGame)

// na konsoli 👀 zobaczysz:
// myGame: { author: { author: 'Jack Black', country: 'USA' }, title: 'Journey' }

// deklaracja całego obiektu za jednym razem:
const myGame2: game = {
    title: "Hades",
    author: {
        author: "XYZ",
        country: "UK"
    }
}

// Zignoruj tę linię - umożliwia ponowną deklarację zmiennych w tym projekcie
export {}
