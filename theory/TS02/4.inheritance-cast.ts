console.log("\n--------Classes, interfaces and casting--------\n")

// Najpierw zdefiniujmy klasę bazową (superklasę):

class BasePageElement {
    selector: string

    constructor() {
        console.log("constructor from BasePageElement class")
        this.selector = "some css selector"
    }

    isVisible(): boolean {
        console.log("Action isVisible from BasePageElement class")
        return true
    }
}

// Teraz zdefiniujmy 2 podklasy:

class Button extends BasePageElement {
    constructor() {
        super() // to jest potrzebne, aby wywołać konstruktor z klasy BasePage!
        console.log("constructor from Button class")
    }

    click(): void {
        console.log("Action click from Button class")
    }
}

class TextBox extends BasePageElement {
    constructor() {
        super() // to jest potrzebne, aby wywołać konstruktor z klasy BasePage!
        console.log("constructor from TextBox class")
    }

    focus(): void {
        console.log("Action focus from TextBox class")
    }
}

// teraz utwórz funkcję do sprawdzenia czy element jest widoczny:

function checkIfVisible(element: BasePageElement) {
    console.log("checkIfVisible:", element)
    console.log(element.isVisible())
}

// jeśli zdefiniujemy klasę bazową, możemy przekazać tam dowolny obiekt będący podklasą:

const button = new Button()
const textBox = new TextBox()

console.log("")
console.log("> We have objects... now lets use checkIfVisible()")
console.log("")

checkIfVisible(button) // this is ok ✅
checkIfVisible(textBox) // this is ok ✅

// na konsoli 👀 zobaczysz:
// constructor from BasePageElement class
// constructor from Button class
// constructor from BasePageElement class
// constructor from TextBox class
//
// > Mamy obiekty... teraz użyjmy checkIfVisible()
//
// checkIfVisible: Button { selector: 'some css selector' }
// Action isVisible from BasePageElement class
// true
// checkIfVisible: TextBox { selector: 'some css selector' }
// Action isVisible from BasePageElement class
// true

// Ważne: wewnątrz checkIfVisible() mamy dostępne tylko metody z BasePageElement!

console.log("\n--------Advanced Inheritance and instanceof--------\n")

// Możemy sprawdzić, czy obiekt jest instancją klasy:

console.log("Check if button instanceof Button:", button instanceof Button)
console.log("Check if button instanceof TextBox:", button instanceof TextBox)

// To da nam informację, czy obiekt ma wybrany typ.
// UWAGA: instanceof działa tylko na obiektach i klasach! Nie na interfejsach!

console.log("\n--------Advanced Inheritance and casting in functions--------\n")

// Możemy użyć instanceof w funkcji, aby sprawdzić, czy obiekt jest instancją klasy.
// Możemy rzutować obiekt na podklasę używając "as".
// Rzutowanie pozwala nam używać właściwości i metod podklasy:

function actIfVisibleBasedOnBaseClass(element: BasePageElement) {
    console.log("Check if element instanceof Button:", element instanceof Button)
    console.log("Check if element instanceof TextBox:", element instanceof TextBox)

    if (element instanceof Button) {
        const button = element as Button // rzutowanie!
        button.click()
    }
    if (element instanceof TextBox) {
        const textBox = element as TextBox
        textBox.focus()
    }
}

actIfVisibleBasedOnBaseClass(button)
console.log("")
actIfVisibleBasedOnBaseClass(textBox)

// na konsoli 👀 zobaczysz:
// Check if element instanceof Button: true
// Check if element instanceof TextBox: false
// Action click from Button class
//
// Check if element instanceof Button: false
// Check if element instanceof TextBox: true
// Action focus from TextBox class

console.log("\n--------Inheritance, Union Types and casting in functions--------\n")

// Zamiast używać klasy bazowej możemy użyć typów złożonych (Union Types):

function actIfVisibleBasedOnUnionTypes(element: Button | TextBox) {
    console.log("Check if element instanceof Button:", element instanceof Button)
    console.log("Check if element instanceof TextBox:", element instanceof TextBox)

    if (element instanceof Button) {
        const button = element as Button
        button.click()
    }
    if (element instanceof TextBox) {
        const textBox = element as TextBox
        textBox.focus()
    }
}

actIfVisibleBasedOnUnionTypes(button)
console.log("")
actIfVisibleBasedOnUnionTypes(textBox)

// na konsoli 👀 zobaczysz:
// Check if element instanceof Button: true
// Check if element instanceof TextBox: false
// Action click from Button class
//
// Check if element instanceof Button: false
// Check if element instanceof TextBox: true
// Action focus from TextBox class

// 💡WSKAZÓWKA: Union może być bezpieczniejsze - definiujemy konkretne typy.
// BaseClass może prowadzić do błędów lub pominiętych przypadków, jeśli dodamy nowe podklasy

console.log("\n--------Invalid casting--------\n")

// Teraz zobaczmy przykład, gdy spróbujemy rzutować dowolny obiekt na podklasę Button:

function invalidCastingExample(element: BasePageElement) {
    console.log("Check if element instanceof Button:", element instanceof Button)
    console.log("Check if element instanceof TextBox:", element instanceof TextBox)

    const button = element as Button
    console.log("After casting: Check if element instanceof Button:", element instanceof Button)
    console.log("After casting: Check if element instanceof TextBox:", element instanceof TextBox)
    button.click()
}

invalidCastingExample(button) // this is ok ✅
console.log("")
// invalidCastingExample(textBox) // this is not ok ⛔ // TODO: uncomment to see error after running running ⛔

// na konsoli 👀 zobaczysz:
// Check if element instanceof Button: true
// Check if element instanceof TextBox: false
// After casting: Check if element instanceof Button: true
// After casting: Check if element instanceof TextBox: false
// Action click from Button class
//
// Check if element instanceof Button: false
// Check if element instanceof TextBox: true
// After casting: Check if element instanceof Button: false
// After casting: Check if element instanceof TextBox: true
// ts-base\theory\S02\4.inheritance-cast.ts:131
//     button.click()
//            ^
// TypeError: button.click is not a function

console.log("\n--------Casting and Interfaces--------\n")

// A co z rzutowaniem i interfejsami?
// Możliwe jest zmienienie typu obiektu.

interface card {
    owner: string
    balance: number
}

interface transaction {
    owner: string
    balance: number
    date: string
}

function printCard(cardData: card): void {
    console.log("Card:", cardData)
}

function printTransaction(transactionData: transaction): void {
    console.log("Transaction:", transactionData)
}

const cardA: card = {
    balance: 10,
    owner: "Dale C"
}

console.log("-- Example with casting Card to Transaction:")

printCard(cardA)
const transactionA = cardA as transaction

printTransaction(transactionA)
console.log("Transaction A typeof:", typeof transactionA)

// na konsoli 👀 zobaczysz:
// Card: { balance: 10, owner: 'Dale C' }
// Transaction: { balance: 10, owner: 'Dale C' }
// Transaction A typeof: object

// ⚠️ Nie wszystkie pola zostały dodane do transactionA po rzutowaniu!

console.log("-- Example with casting Transaction to Card:")

const transactionB: transaction = {
    balance: 10,
    owner: "Dale C",
    date: "10/10/2021"
}
const cardB = transactionB as card

printTransaction(transactionB)
printCard(cardB)
console.log("Card B typeof:", typeof cardB)

// na konsoli 👀 zobaczysz:
// Transaction: { balance: 10, owner: 'Dale C', date: '10/10/2021' }
// Card: { balance: 10, owner: 'Dale C', date: '10/10/2021' }
// Card B typeof: object

// ⚠️ Pole date zostało dodane do obiektu card!

// Zignoruj tę linię - umożliwia ponowną deklarację zmiennych w tym projekcie
export {}
