console.log("\n--------Union types--------\n")

// Typy złożone (Union types) pozwalają nam zdefiniować więcej niż jeden typ dla zmiennej
// Typy złożone pozwalają nam "łączyć różne typy"

// Wcześniej robiliśmy tak:
let someValue1: number

// a potem:
someValue1 = 1 // to jest ok ✅
// someValue1 = "2" // to nie jest ok ⛔
// someValue1 = true // to nie jest ok ⛔

// ale możemy przypisać 2 typy - zarówno number jak i string:
let someValue2: number | string
// i to jest typ złożony (Union Type)

// a teraz:
someValue2 = 1 // to jest ok ✅
someValue2 = "2" // to też jest ok ✅
// someValue2 = true // to nie jest ok ⛔

// Możemy używać typów złożonych w tablicach:
let someArray: (number | string)[] = []

someArray.push(1) // to jest ok ✅
someArray.push("1") // to też jest ok ✅
// someArray.push(true) // to nie jest ok ⛔

console.log("someArray:", someArray)
// na konsoli 👀 zobaczysz:
// someArray: [ 1, '1' ]

console.log("\n--------Union types in functions--------\n")

// Spróbujmy zadeklarować nową funkcję:
function printValue(value: number | string): void {
    console.log("Printing value:", value)
}

printValue("test") // to jest ok ✅
printValue(1234) // to jest ok ✅
// printValue(true) // to nie jest ok ⛔

// na konsoli 👀 zobaczysz:
// Printing value: test
// Printing value: 1234

// Spróbujmy zadeklarować nową funkcję:
function printMoreValues(value: number | string | boolean): void {
    console.log("Printing more values:", value)
}

printMoreValues("test") // to jest ok ✅
printMoreValues(1234) // to jest ok ✅
printMoreValues(true) // to jest ok ✅

// na konsoli 👀 zobaczysz:
// Printing values: test
// Printing values: 1234
// Printing values: true

// 💡WSKAZÓWKA: Typy złożone (Union types) - 🔗 https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types
export {}