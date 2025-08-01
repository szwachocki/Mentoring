console.log("\n--------Type Guards--------\n")

// Type Guards to "po prostu" sprawdzanie typów
// - typeof
// - instanceof
// - in

// "instanceof" i "typeof" już znasz ;)

// przygotujmy dane do kilku testów:

interface simpleCar {
    maxSpeed: number
    color: string
}

class Car {
    // maxSpeed = 12
    constructor() {
        console.log("constructor of Car class")
    }
}

class Bus {
    constructor() {
        console.log("constructor of Bus class")
    }
}

// przygotujmy obiekty do testów:

const stringValue = "string value"
const numberValue = 123.42
const carInstance = new Car()
const busInstance = new Bus()
const mySimpleCar: simpleCar = {
    color: "black",
    maxSpeed: 420
}

console.log("\n--------Type Guards - typeof--------\n")

// Możemy sprawdzić typ prymitywów używając "typeof":

console.log("Check typeof numberValue:", typeof numberValue)
console.log("Check typeof stringValue:", typeof stringValue)
console.log("Check typeof carInstance:", typeof carInstance)
console.log("Check typeof mySimpleCar:", typeof mySimpleCar)
console.log("Check if stringValue typeof string:", typeof stringValue === "string")
console.log("Check if stringValue typeof number:", typeof stringValue === "number")

// "typeof" działa dobrze dla prymitywów!

// Poniższy kod zwróci błąd:
// This comparison appears to be unintentional because the types '"string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function"' and '"Car"' have no overlap.ts(2367)
// console.log("Check if carInstance typeof Car:", typeof carInstance === 'Car') // TODO: odkomentuj, aby zobaczyć błąd w IDE ⛔
// console.log("Check if mySimpleCar typeof simpleCar:", typeof mySimpleCar === "simpleCar") // TODO: odkomentuj, aby zobaczyć błąd w IDE ⛔

console.log("\n--------Type Guards - instanceof--------\n")

// Dla klas używamy "instanceof":

console.log("Check if carInstance instanceof Car:", carInstance instanceof Car)
console.log("Check if carInstance instanceof Bus:", carInstance instanceof Bus)

// "instanceof" działa tylko dla klas!
// Prymitywy i interfejsy zwrócą błędy!

// Poniższy kod zwróci błąd:
// console.log("Check if carInstance instanceof Car:", stringValue instanceof Car) // TODO: odkomentuj, aby zobaczyć błąd w IDE ⛔ The left-hand side of an 'instanceof' expression must be of type 'any', an object type or a type parameter.ts(2358)
// console.log("Check if mySimpleCar instanceof simpleCar:", mySimpleCar instanceof simpleCar) // TODO: odkomentuj, aby zobaczyć błąd w IDE ⛔ 'simpleCar' only refers to a type, but is being used as a value here.ts(2693)

console.log("\n--------Type Guards - in--------\n")

// Dla interfejsów i klas używamy "in":
console.log("Check if mySimpleCar has property 'maxSpeed':", "maxSpeed" in mySimpleCar)
console.log("Check if carInstance has property 'maxSpeed':", "maxSpeed" in carInstance)

// "in" działa tylko dla klas i interfejsów!
// Prymitywy zwrócą błędy!

// Poniższy kod zwróci błąd:
// console.log("Check if stringValue has property 'maxSpeed':", "maxSpeed" in stringValue) // TODO: odkomentuj, aby zobaczyć błąd w IDE ⛔ Type 'string' is not assignable to type 'object'.ts(2322)

// Type Guards - 🔗 https://basarat.gitbook.io/typescript/type-system/typeguard
// Type Guards - 🔗 https://blog.logrocket.com/how-to-use-type-guards-typescript/
// Typy złożone (Union types) i Type Guards - 🔗 https://fsgeek.pl/post/typescript-type-guard-type-predicate/

// Zignoruj tę linię - umożliwia ponowną deklarację zmiennych w tym projekcie
export {}
