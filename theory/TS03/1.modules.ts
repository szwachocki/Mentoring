
console.log("\n--------Moduły i importy--------\n")


// Importy w TypeScript działają tak samo jak w JavaScript.
// Możesz importować funkcje, obiekty i zmienne z innych modułów.
// Moduły to pliki z kodem, które mogą być używane w innych plikach.
// W TypeScript każdy plik jest modułem, a importy i eksporty są używane do dzielenia kodu na mniejsze części.

// Aby zaimportować funkcje lub obiekty z innego modułu, musisz najpierw je wyeksportować.
// Eksportowanie elementów z modułu pozwala innym modułom na ich użycie.
// Możesz eksportować pojedyncze elementy lub cały moduł.
// Eksportowanie elementów z modułu pozwala innym modułom na ich użycie.
// Możesz eksportować pojedyncze elementy lub cały moduł.

// Przykład eksportu funkcji:
export function getBiggestNumber(values: number[]): number {
  return Math.max(...values)
}

// Teraz możemy użyć tej funkcji w innym pliku, importując ją.
// Możemy to zrobić na dwa sposoby:
// 1. Importując pojedynczo:
// import { getBiggestNumber } from "./data.helpers"

// 2. Importując cały moduł:
// import * as dataHelpers from "./data.helpers"
// aby zaimportować dane z innego modułu użyj import:
import { sampleArray } from "./helpers/sample.module"

// upewnij się, że ten obiekt ma przed sobą 'export'!

// możemy importować wiele elementów naraz:
import { printArrayOnConsoleWithFor, printArrayOnConsoleWithForeach } from "./helpers/sample.module"

// Dobra praktyka: wszystkie importy umieszczamy na początku pliku


console.log("zaimportowany sampleArray:", sampleArray)
// na konsoli 👀 zobaczysz:
// zaimportowany sampleArray: [ 'Python', 'Java', 'JavaScript', 'C#' ]


// po zaimportowaniu funkcji możemy ich używać jak wcześniej:
printArrayOnConsoleWithFor(sampleArray)
// na konsoli 👀 zobaczysz:
// printArrayOnConsoleWithFor: Python
// printArrayOnConsoleWithFor: Java
// printArrayOnConsoleWithFor: JavaScript
// printArrayOnConsoleWithFor: C#


printArrayOnConsoleWithForeach(sampleArray)
// na konsoli 👀 zobaczysz:
// printArrayOnConsoleWithForeach: Python
// printArrayOnConsoleWithForeach: Java
// printArrayOnConsoleWithForeach: JavaScript
// printArrayOnConsoleWithForeach: C#
