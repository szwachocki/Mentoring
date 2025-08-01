
console.log("\n--------Proste typy--------\n")

// aby zadeklarować zmienną w JavaScript musisz użyć następującego wzorca:
// [słowo kluczowe] [nazwa] = [wartość]
// przykład:

let variableThatCanBeChanged = 12
const constantString = "World"

// TypeScript sam wykryje typ tych zmiennych

// ale gdy TypeScript "wykryje" typ, nie możesz go już zmienić!
// 💡Wskazówka: To jest zalecany styl w TypeScript

variableThatCanBeChanged = 42 // to jest ok ✅ - ten sam typ (number), inna wartość

// poniższy kod spowoduje błąd: Type 'string' is not assignable to type 'number'.ts(2322)

// variableThatCanBeChanged = '12' // TODO: odkomentuj, aby zobaczyć błąd w IDE ⛔ Type 'string' is not assignable to type 'number'.ts(2322)

// możesz też jawnie ustawić typ każdej zmiennej:
let numberVariable: number = 2
let stringVariable: string = "abc"
let boolVariable: boolean = true

// ale to jest nadmiarowe - nie musisz tego robić w TypeScript
// może się to przydać, gdy:
// - deklarujesz zmienną
// - wykonujesz jakieś operacje
// - potem przypisujesz wartość

// lepiej po prostu przypisać wartość bez podawania typu:
let numberVariable2 = 2
let stringVariable2 = "abc"
let boolVariable2 = true

console.log("\n--------Proste typy - opóźnione przypisanie wartości--------\n")

// zadeklaruj zmienną:

let someVariable: number
// musi być let, bo const spowoduje błąd:
// const someOtherVariable: number // ⛔ deklaracje 'const' muszą być zainicjalizowane.ts(1155)

// console.log("Wartość someVariable:", someVariable) // TODO: odkomentuj, aby zobaczyć błąd w IDE ⛔ Zmienna 'someVariable' użyta przed przypisaniem wartości.ts(2454)

// jakieś operacje...

// teraz przypisujemy wartość do someVariable

someVariable = 12

console.log("Wartość someVariable:", someVariable)

// to jest bardzo pomocne, bo teraz nie możesz przypisać nic innego niż number
// poniższy kod spowoduje błąd: Type 'string' is not assignable to type 'number'.ts(2322)

// someVariable = '12' // TODO: odkomentuj, aby zobaczyć błąd w IDE ⛔

// możesz sprawdzić typ zmiennej na różne sposoby.
// Jedną z możliwości jest użycie typeof:
console.log("Typ someVariable:", typeof someVariable)

// 💡Wskazówka: Proste typy to tzw. "prymitywy" - są to number, string i boolean
// 💡Wskazówka: Dlaczego nie używać var? var jest przestarzały i nie powinien być używany w kodzie
// więcej: 🔗 https://swiatfrontendu.pl/blog/dlaczego-nie-warto-uzywac-var-w-javascript/
