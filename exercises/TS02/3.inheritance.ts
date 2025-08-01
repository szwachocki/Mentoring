
// Twoje zadanie:
// 1. Zadeklaruj pierwszą klasę o następujących szczegółach:
// - nazwa: Animal
// - z właściwością type typu string
// - z chronioną właściwością age typu number z domyślną wartością 0
// - z konstruktorem:
// --- który przyjmuje jeden parametr do ustawienia wartości właściwości type
// 2. Zadeklaruj drugą klasę o następujących szczegółach:
// - nazwa: Cat
// - ta klasa dziedziczy po klasie Animal
// - z konstruktorem:
// --- który nie przyjmuje parametrów
// --- który ustawia type na "cat" w konstruktorze nadrzędnym (super)
// - z metodą:
// --- nazwa: increaseAge()
// --- ta metoda zwiększa wartość age o jeden
// - z metodą:
// --- nazwa: present()
// --- powinna zwracać string w formacie: "My type is cat and my age is 2"
// 3. Utwórz obiekt klasy Cat
// 4. Wywołaj metodę increaseAge() 2 razy
// 5. Wypisz na konsolę wynik metody present()

// Aby przetestować swoje rozwiązanie w terminalu, możesz uruchomić następujące polecenie:
// npm run ex2-3


//// TODO:
//// -----------------------TUTAJ UMIEŚĆ SWOJE ROZWIĄZANIE:-------------------------
class Animal {
    protected age: number = 0;
    constructor(public type: string) {}

}

class Cat extends Animal {
    constructor() {
        super("cat");
    }

    increaseAge(): void {
        this.age += 1;
    }

    present(): string {
        return `My type is ${this.type} and my age is ${this.age}`;
    }
}

// Utworzenie obiektu klasy Cat
const myCat = new Cat();

// Wywołanie metody increaseAge() 2 razy
myCat.increaseAge();
myCat.increaseAge();

// Wypisanie wyniku metody present()
console.log(myCat.present());

//// -----------------------NIE MODYFIKUJ KODU PONIŻEJ!-------------------------
// Tutaj znajdziesz oczekiwany rezultat zadania

// Oczekiwany wynik:
// Na konsoli 👀 powinieneś zobaczyć:
// My type is cat and my age is 2
