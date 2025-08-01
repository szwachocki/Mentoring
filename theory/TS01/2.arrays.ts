console.log("\n--------Arrays--------\n")

// Tablice (Arrays) - tablica to lista elementów
// na przykład stwórzmy tablicę liczb:
let arrayOfNumbers = [1, 2, 3]

// a teraz wypiszmy ją na konsoli:
console.log("arrayOfNumbers:", arrayOfNumbers)

// na konsoli 👀 zobaczysz:
// arrayOfNumbers: [1, 2, 3]

// domyślnie TypeScript wykryje typ jako: number[]

// możemy to zrobić ręcznie:
let otherArrayOfNumbers: number[]

// a następnie przypisać listę liczb:
otherArrayOfNumbers = [1, 2, 3]

otherArrayOfNumbers.forEach( number => console.log(number * 2))

// lista stringów nie zadziała - pojawi się błąd:
// Type 'string' is not assignable to type 'number'.ts(2322)
// otherArrayOfNumbers = ["1", "2", "3"] // TODO: odkomentuj, aby zobaczyć błąd w IDE ⛔

// możesz wykonywać wszystkie operacje na tablicy, takie jak push, pop, concat itd.
// Na przykład możesz dodać liczby do swojej tablicy:
otherArrayOfNumbers.push(4)

// ale dodanie innego typu spowoduje błąd:
// Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
// otherArrayOfNumbers.push("test") // TODO: odkomentuj, aby zobaczyć błąd w IDE ⛔

// Zignoruj tę linię - umożliwia ponowną deklarację zmiennych w tym projekcie
export {}
