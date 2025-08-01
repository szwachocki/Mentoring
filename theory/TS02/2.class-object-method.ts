console.log("\n--------Classes--------\n")

// Koncepcja klasy w TypeScript jest podobna do klasy w JavaScript.
// Główna różnica dotyczy typów

// przykład klasy:

class Human {
    name: string

    constructor(name: string) {
        this.name = name
    }

    greet(): string {
        return "Hello, my name is " + this.name
    }
}

const daleCooper = new Human("Dale Cooper")
console.log(daleCooper.greet())

// na konsoli 👀 zobaczysz:
// Hello, my name is Dale Cooper

// metody, które nie zwracają wartości - możemy oznaczyć jako "void"
// spójrz na przykład poniżej z metodą increaseAge():

class Animal {
    name: string
    age: number

    constructor(name: string) {
        this.name = name
        this.age = 0
    }

    increaseAge(): void {
        this.age++
    }
}

const lessieDog = new Animal("Lessie")
console.log(lessieDog.increaseAge())

// na konsoli 👀 zobaczysz:
// undefined <-- ponieważ increaseAge() zwraca void!

console.log(lessieDog.age)

// na konsoli 👀 zobaczysz:
// 1

console.log("\n--------Classes and value of properties--------\n")

// właściwości w klasie muszą mieć wartości
// wartości mogą być przypisane od razu lub w konstruktorze
// w przeciwnym razie - zostanie zwrócony błąd

// class ClassA {
//     name: string // wartość przypisana w konstruktorze
//     type = "super S" // wartość przypisana od razu
//     age: number // ⛔ Błąd: Property 'age' has no initializer and is not definitely assigned in the constructor.ts(2564)

//     constructor(name: string) {
//         this.name = name
//     }
// }

console.log("\n--------Classes and Types--------\n")

// Możemy użyć nazwy klasy jako typu przy deklaracji zmiennej.

let someHuman: Human

// tutaj mamy jakieś dodatkowe akcje
// a później inicjalizujemy obiekt typu Human:

someHuman = new Human("Some")

// 💡WSKAZÓWKA: To może być przydatne w testach - gdzie najpierw definiujemy PageObjects, a później przypisujemy strony do tej zmiennej

console.log("\n--------Classes and Types--------\n")

// Spójrzmy na bardziej skomplikowany przykład.
// Mamy funkcję greet, która potrzebuje obiektu typu Human:

function greet(human: Human): void {
    console.log("New human arrived!")
    console.log(human.greet())
}

greet(daleCooper)

// na konsoli 👀 zobaczysz:
// New human arrived!
// Hello, my name is Dale Cooper

// Teraz nie możemy użyć w greet() żadnego innego obiektu o typie innym niż Human.
// Np. użycie obiektu Animal zwróci błąd:
// greet(lessieDog) // TODO: odkomentuj, aby zobaczyć błąd w IDE ⛔

// Na koniec spróbujmy funkcji, która zwraca obiekt Animal:

function getAnimal(name: string): Animal {
    return new Animal(name)
}

let someDog: Animal
let otherHuman: Human

// teraz przypiszmy obiekt z funkcji do naszych zmiennych:
someDog = getAnimal("Burek")
// otherHuman = getAnimal("Burek") // TODO: odkomentuj, aby zobaczyć błąd w IDE ⛔

console.log("\n--------Classes - public and private--------\n")

// public i private to specyfikatory dostępu
// prywatne pola i metody nie mogą być dostępne poza klasą

class ClassA {
    publicProperty: string
    public anotherPublicProperty: string
    private privateProperty: string
    protected protectedProperty: string

    constructor(publicValue: string, anotherPublicValue: string, privateValue: string, protectedProperty: string) {
        this.publicProperty = publicValue
        this.anotherPublicProperty = anotherPublicValue
        this.privateProperty = privateValue
        this.protectedProperty = protectedProperty
    }

    helloPublic(): void {
        console.log("helloPublic!")
    }

    public anotherHelloPublic(): void {
        console.log("anotherHelloPublic!")

        // here we have an access to private property and private method
        // because we are in the same class!
        console.log("hello privateProperty!", this.privateProperty)
        this.helloPrivate()

        // here we have an access to protected property and protected method
        // because we are in the same class!
        console.log("hello protectedProperty!", this.protectedProperty)
        this.helloProtected()
    }

    private helloPrivate(): void {
        console.log("helloPrivate!")
    }

    protected helloProtected(): void {
        console.log("helloProtected!")
    }
}

const classA = new ClassA("1", "2", "private 3", "protected 4")
classA.publicProperty // to pole jest widoczne i dostępne!
classA.anotherPublicProperty // to pole jest widoczne i dostępne!
// classA.privateProperty // to zwróci błąd! ⛔ Property 'privateProperty' is private and only accessible within class 'ClassA'.ts(2341)
// classA.protectedProperty // to zwróci błąd! ⛔ Property 'protectedProperty' is protected and only accessible within class 'ClassA' and its subclasses.ts(2445)

classA.helloPublic() // ta metoda jest widoczna i dostępna!
classA.anotherHelloPublic() // ta metoda jest widoczna i dostępna!
// classA.helloPrivate() // to zwróci błąd! ⛔ Property 'helloPrivate' is private and only accessible within class 'ClassA'.ts(2341)
// classA.helloProtected() // to zwróci błąd! ⛔ Property 'helloProtected' is protected and only accessible within class 'ClassA' and its subclasses.ts(2445)

// Po co używać prywatnych pól/metod?
// Czasami chcemy mieć metodę dostępną tylko wewnątrz klasy.
// - takie metody mogą dzielić logikę na mniejsze części, ale chcemy ich używać tylko w klasie.
// Wtedy, żeby nie mylić członków zespołu - robimy je prywatne.

// Zignoruj tę linię - umożliwia ponowną deklarację zmiennych w tym projekcie
export {}
