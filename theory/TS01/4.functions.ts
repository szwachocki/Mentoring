console.log("\n--------Functions (Named functions)--------\n")

// To create function you have to use following pattern:
// function [name]([parameter]:[type]): [returned type] {
//     [body of function]
//     [optional return some value]
// }

// simplest example of function without any parameters and no return:

function printHello(): void {
    console.log("Hello World!")
}

// function that does not return anything - returns VOID

// to use above functions just call it by name (same as in JavaScript):
printHello()

// on console 👀 you will get:
// Hello World!

// to see what function printHello() returns we can use console.log():
console.log("printHello() returns:", printHello())

// on console 👀 you will get:
// printHello() returns: undefined

// Other example of function, that returns string (with type added):
function getHello(): string {
    return "Hello World!"
}

// aby użyć funkcji, po prostu wywołaj ją po nazwie i przypisz wynik do nowej zmiennej:
const hello = getHello()
console.log("result of getHello():", hello)

// na konsoli 👀 zobaczysz:
// result of getHello(): Hello World!

console.log("\n--------Function and parameters--------\n")

// bardziej złożony przykład z parametrami - oba parametry to liczby i zwracana jest liczba:
function addTwoNumbersNotOptimal(numberOne: number, numberTwo: number): number {
    const result = numberOne + numberTwo
    return result
}

// albo krócej:
function addTwoNumbers(numberOne: number, numberTwo: number): number {
    return numberOne + numberTwo
}

// aby użyć funkcji, po prostu wywołaj ją po nazwie i przekaż parametry:
const result1 = addTwoNumbers(1, 2)

// wynik tej funkcji zostanie zapisany w zmiennej 'result1' i teraz możemy wyświetlić jej wartość:
console.log("result of 1 + 2:", result1)

// na konsoli 👀 zobaczysz:
// result of 1 + 2: 3

// w TypeScript nie możesz przekazać innego typu niż zdefiniowany!
// jeśli spróbujesz przekazać string - pojawi się błąd:
// Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
// const result2 = addTwoNumbers('a', 'b') // TODO: odkomentuj, aby zobaczyć błąd w IDE ⛔

console.log("\n--------Function and type 'any'--------\n")

// możesz utworzyć funkcję, która przyjmie dowolne parametry i przetworzy je używając typu any:
function addTwoValues(valueOne: any, valueTwo: any): number {
    return valueOne + valueTwo
}

const resultFromAddTwoValues = addTwoValues(1, "test")

// result of that function will be stored in variable 'result1' and now we can display its value:
console.log('result of addTwoValues(1, "test"):', resultFromAddTwoValues)
// but this is hack because any type should be avoided! ⛔
