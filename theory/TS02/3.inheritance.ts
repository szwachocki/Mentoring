console.log("\n--------Inheritance--------\n")

// Dziedziczenie w programowaniu oznacza możliwość przejęcia przez klasę właściwości i zachowań innej klasy.
// Pozwala to nowej klasie, zwanej "klasą pochodną" lub "subklasą", dziedziczyć atrybuty i metody istniejącej klasy, zwanej "klasą bazową" lub "superklasą".

// Najpierw zdefiniujmy klasę bazową (superklasę):

class BasePage {
    baseUrl: string
    other = "value"

    constructor() {
        console.log("constructor from BasePage class")
        this.baseUrl = "myUniqueUrl"
    }

    openMenu(): void {
        console.log("Action openMenu from BasePage class")
    }
}

// Teraz zdefiniujmy podklasę.
// Dziedziczenie realizujemy za pomocą słowa kluczowego "extends"

class HomePage extends BasePage {
    constructor() {
        super() // to jest potrzebne, aby wywołać konstruktor z klasy BasePage!
        console.log("constructor from HomePage class")
    }

    login(): void {
        console.log("Action login from HomePage class")
    }
}

const homePage = new HomePage()

// na konsoli 👀 zobaczysz:
// constructor from BasePage
// constructor from HomePage

// homePage ma wszystkie metody i atrybuty z BaseClass:

homePage.login()
homePage.openMenu()
console.log("homePage.baseUrl:", homePage.baseUrl)
console.log("homePage.other:", homePage.other)

// na konsoli 👀 zobaczysz:
// Action login from HomePage
// Action openMenu from BasePage
// homePage.baseUrl: myUniqueUrl
// homePage.other: value

console.log("\n--------Inheritance with constructor with parameters--------\n")

// przykład klasy, której konstruktor wymaga jednego parametru:

class ClassA {
    baseUrl: string

    constructor(url: string) {
        this.baseUrl = url
    }
}

// Now in sub class we have to use super():

class ClassB extends ClassA {
    constructor(url: string) {
        super(url) // to jest potrzebne, aby wywołać konstruktor z klasy bazowej z parametrami!
    }
}

const classB = new ClassB("some url")
console.log("classB.baseUrl:", classB.baseUrl)

// na konsoli 👀 zobaczysz:
// classB.baseUrl: some url

console.log("\n--------Inheritance - public, private and protected--------\n")

// przykład klasy oraz pól/metod private/protected

class ClassC {
    private version = 0
    protected age = 0

    increaseVersionInClassC(): void {
        this.version++ // to jest ok ✅ - version jest private w tej samej klasie!
    }

    getVersion(): number {
        return this.version
    }
}

class ClassD extends ClassC {
    increaseVersion(): void {
        // this.version++ // ⛔ Property 'version' jest private i dostępny tylko w klasie 'ClassC'.ts(2341)
    }

    increaseAge(): void {
        this.age++ // to jest ok ✅
    }

    getAge(): number {
        return this.age
    }
}

const classD = new ClassD()
console.log("classD.getAge():", classD.getAge()) // this is ok ✅
// console.log("classD.version:", classD.version) // ⛔ Property 'version' jest private i dostępny tylko w klasie 'ClassC'.ts(2341)
// console.log("classD.age:", classD.age) // ⛔ Property 'age' jest protected i dostępny tylko w klasie 'ClassC' i jej podklasach.ts(2445)

// Zignoruj tę linię - umożliwia ponowną deklarację zmiennych w tym projekcie
export {}
