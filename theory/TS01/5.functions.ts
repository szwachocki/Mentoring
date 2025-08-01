console.log("\n--------Functions with optional and default parameters--------\n")

// Możemy tworzyć opcjonalne i domyślne parametry w funkcjach
// domyślne parametry będą miały typ wykryty przez TypeScript:
function addNewNumbers(numberOne: number, numberTwo = 2): number {
    // numberTwo jest opcjonalny i ma domyślną wartość = 2
    return numberOne + numberTwo
}

// możemy użyć funkcji addNewNumbers tylko z jednym parametrem, a drugi będzie miał wartość domyślną:
let resultSum = addNewNumbers(1)
console.log("result of addNewNumbers(1):", resultSum)

// na konsoli 👀 zobaczysz:
// result of addNewNumbers(1): 3

// możesz także nadpisać wartość domyślną:
resultSum = addNewNumbers(1, 4)
console.log("result of addNewNumbers(1, 4):", resultSum)

// Spróbujmy zadeklarować nową funkcję:
function doSomething(numberOne: number): void {
    console.log("numberOne for addTwoStrings has value:", numberOne)
}

// a co z przekazaniem 0 parametrów?
// pojawi się błąd:
// Expected 1 arguments, but got 0.ts(2554)
// 5.functions.ts(22, 22): An argument for 'numberOne' was not provided.
// doSomething() // TODO: odkomentuj, aby zobaczyć błąd w IDE ⛔

console.log("\n--------Functions (Anonymous functions)--------\n")

// możemy przypisać funkcję do zmiennej:
const addNumbers = function (x: number, y: number): number {
    return x + y
}

// a następnie użyć zmiennej jako funkcji:
const addNumbersResult = addNumbers(2, 4)

console.log("result of addNumbers(2, 4):", addNumbersResult)
// na konsoli 👀 zobaczysz:
// result of addNumbers(2, 4): 6

console.log("\n--------Functions (Arrow functions)--------\n")

// możemy przypisać funkcję do zmiennej:
const multiplyNumbers = (x: number, y: number): number => {
    return x * y
}

// a następnie użyć zmiennej jako funkcji:
const multiplyNumbersResult = multiplyNumbers(2, 4)

console.log("result of multiplyNumbers(2, 4):", multiplyNumbersResult)
// na konsoli 👀 zobaczysz:
// result of multiplyNumbers(2, 4): 8
