console.log("\n--------Try... Catch--------\n")

// Try... Catch to konstrukcja do przechwytywania błędów (Errors)

// Czym są błędy (Errors)?
// Błąd pojawia się, gdy kod napotyka nieoczekiwany stan lub zachowanie podczas wykonywania.

// Jak wywołać błąd?
// - próba dostępu do nieistniejącej metody lub pola

// spójrzmy na przykład poniżej, gdzie przygotowujemy kod, który rzuca błąd:

try {
    const emptyArray: string[] = []
    // Now lets try to access not existing element from list:
    console.log("The result of 'emptyArray[1]' is:", emptyArray[1])
    // Now lets try to access not existing element of not existing element from list:
    console.log("The result of 'emptyArray[1][1]' is:", emptyArray[1][1]) // we expect an error here
} catch {
    console.log("An error occurred!")
}

// co jeśli chcemy wydrukować błąd?

console.log("\n--------Catch error and print it!--------\n")

// możemy dodać `catch (error)`:

try {
    const emptyArray: string[] = []
    // Now lets try to access not existing element from list:
    console.log("The result of 'emptyArray[1]' is:", emptyArray[1])
    // Now lets try to access not existing element of not existing element from list:
    console.log("The result of 'emptyArray[1][1]' is:", emptyArray[1][1]) // we expect an error here
} catch (error) {
    console.log("An error occurred!")
    console.log(error)
}

// na konsoli 👀 zobaczysz:
// The result of 'emptyArray[1]' is: undefined
// An error occurred!
// TypeError: Cannot read properties of undefined (reading '1')
//     at <anonymous> (c:\Projects\ts-base\theory\TS02\5.exceptions-try-catch.ts:34:69)
//     at ModuleJob.run (node:internal/modules/esm/module_job:218:25)
//     at async ModuleLoader.import (node:internal/modules/esm/loader:329:24)
//     at async loadESM (node:internal/process/esm_loader:28:7)
//     at async handleMainPromise (node:internal/modules/run_main:113:12)

console.log("\n--------Readable Errors--------\n")

// Możemy uczynić błędy bardziej czytelnymi, rzutując przechwycony błąd na Error:

try {
    const emptyArray: string[] = []
    // Now lets try to access not existing element from list:
    console.log("The result of 'emptyArray[1]' is:", emptyArray[1])
    // Now lets try to access not existing element of not existing element from list:
    console.log("The result of 'emptyArray[1][1]' is:", emptyArray[1][1])
} catch (error) {
    console.log("An error occurred!")
    let errorTyped = error as Error // rzutujemy error na Error...
    console.log(errorTyped.message) // ...i mamy dostęp do jego właściwości
}

// na konsoli 👀 zobaczysz:
// The result of 'emptyArray[1]' is: undefined
// An error occurred!
// Error message: Cannot read properties of undefined (reading '1')

console.log("\n--------Own Errors--------\n")

// Możemy łatwo rzucić błąd używając słowa kluczowego "throw":

try {
    throw new Error("My custom message for an Error")
} catch (error) {
    console.log("An error occurred!")
    let errorTyped = error as Error // rzutujemy error na Error...
    console.log("Error message:", errorTyped.message) // ...i mamy dostęp do jego właściwości
}

// na konsoli 👀 zobaczysz:
// An error occurred!
// Error message: My custom message for an Error

console.log("\n--------Catching only selected types of Errors--------\n")

// każdy błąd ma typ:
// TypeError
// RangeError
// więcej znajdziesz tutaj: 🔗 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#error_types

try {
    const emptyArray: string[] = []
    // Now lets try to access not existing element from list:
    console.log("The result of 'emptyArray[1]' is:", emptyArray[1])
    // Now lets try to access not existing element of not existing element from list:
    console.log("The result of 'emptyArray[1][1]' is:", emptyArray[1][1])
} catch (error) {
    if (error instanceof TypeError) {
        console.log("An error of type TypeError occurred!")
    } else {
        console.log("An unknown error occurred!")
    }
    let errorTyped = error as Error // rzutujemy error na Error...
    console.log(errorTyped.message) // ...i mamy dostęp do jego właściwości
}

// Zignoruj tę linię - umożliwia ponowną deklarację zmiennych w tym projekcie
export {}
