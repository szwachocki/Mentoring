console.log("\n--------Type 'any'--------\n")

// w TypeScript istnieje specjalny typ
// typ any
// typ any oznacza... dowolny typ!

// deklarujesz go jak każdy inny typ:
let someValue: any

// a następnie możesz przypisywać różne wartości różnych typów:
someValue = 1
console.log("Type of someValue:", typeof someValue) // Type of someValue: number

someValue = "1"
console.log("Type of someValue:", typeof someValue) // Type of someValue: string

// TypeScript wykryje przypisany typ, ale nadal możesz przypisywać różne typy

// 💡WSKAZÓWKA: typ "any" w wielu przypadkach może być traktowany jako antywzorzec❗
// Celem używania TypeScript jest posiadanie typów w zmiennych i funkcjach.
// Powinniśmy więc używać ich wszędzie tam, gdzie możemy.
// Używając typu 'any' tracimy przewagę TypeScript, jaką są typy.

// 💡WSKAZÓWKA: Typ "any" - 🔗 https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#any