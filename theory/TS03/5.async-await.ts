import { loadUserDataAsync, returnsUndefined } from "./helpers/async.helper"

console.log("\n--------Async / Await--------\n")

console.log("Using async function:")

console.log("calling async function with await...")
const result = await loadUserDataAsync()
console.log(result)

// na konsoli 👀 zobaczysz:
// wywołanie funkcji async z await...
// loadUserData: entering function
// loadUserData: entering Promise and waiting for 2 seconds...
// loadUserData: Promise done - returning value!
// [ 'Dale', 'Harry S. Truman', 'Hawk' ]

console.log("\n--------Using async function in another function--------\n")

// kolejny przykład z funkcją, która używa funkcji async:

// function asyncCall(): Promise<void> { // to zwróci: SyntaxError: Unexpected reserved word
//   console.log('wywołanie funkcji async w asyncCall...')
//   const result = await loadUserData()
//   console.log(result)
// }

// musimy użyć słowa kluczowego async

// możemy użyć poniższej konstrukcji
// ale powinniśmy określić typ zwracany!
async function asyncCall() {
    console.log("calling async function in asyncCall...")
    const userData = await loadUserDataAsync()
    console.log("userData from asyncCall:", userData)
}

// a typ zwracany to Promise<void>:
async function asyncCallWithReturnType(): Promise<void> {
    console.log("calling async function in asyncCall...")
    const userData = await loadUserDataAsync()
    console.log("userData from asyncCall:", userData)
}
// funkcja async musi zwracać wartość opakowaną w Promise<>
// Promise<void> to prawie to samo co void, ale opakowane w Promise<>, który musi być rozwiązany

await asyncCallWithReturnType()

// na konsoli 👀 zobaczysz:
// calling async function in asyncCall...
// loadUserData: entering function
// loadUserData: entering Promise and waiting for 2 seconds...
// loadUserData: Promise done - returning value!
// [ 'Dale', 'Harry S. Truman', 'Hawk' ]

console.log("Finished!")

// Co to jest Promise { <pending> }?

// Promise to po prostu obietnica wyniku.
// Aby uzyskać wynik, Promise musi zostać rozwiązany:

// const sampleData = loadUserData()

// sampleData.then(realResult => {
//     console.log('realResult:', realResult)
// })

console.log("\n--------Async function with return type--------\n")

// kolejny przykład funkcji async:

async function getAndFormatData(): Promise<string[]> {
    console.log("calling async function in getAndFormatData...")
    const userData = await loadUserDataAsync()

    return userData
}

// poprawne użycie✅:

const returnedData = await getAndFormatData()
console.log("From getAndFormatData:", returnedData)
console.log("")

// na konsoli 👀 zobaczysz:
// calling async function in getAndFormatData...
// loadUserData: entering function
// loadUserData: entering Promise and waiting for 2 seconds...
// loadUserData: Promise done - returning value!
// From getAndFormatData: [ 'Dale', 'Harry S. Truman', 'Hawk' ]

console.log("\n--------Async function - dangers--------\n")

// (najczęściej) niepoprawne użycie⛔:

const returnedDataWithoutAwait = getAndFormatData()

console.log("")

// i oczekujemy, że w returnedDataWithoutAwait będzie ostateczny wynik..
// ale zawiera promisa:
console.log("From getAndFormatData:", returnedDataWithoutAwait)

console.log("")

// musimy użyć await na Promise, aby uzyskać wynik:
console.log("From getAndFormatData with await:", await returnedDataWithoutAwait)

// a bez "await" na konsoli 👀 zobaczysz:

// calling async function in getAndFormatData...
// loadUserData: entering function
// loadUserData: entering Promise and waiting for 2 seconds...

// From getAndFormatData: Promise { <pending> }

// loadUserData: Promise done - returning value!
// From getAndFormatData with await: [ 'Dale', 'Harry S. Truman', 'Hawk' ]

// 💡WSKAZÓWKA: dlaczego to jest (najczęściej) niepoprawne użycie⛔?
// W niektórych przypadkach chcemy operować na wartości wyniku
// i ta operacja daje nam 2 różne rezultaty w zależności czy operujemy na Promise czy na wartości z Promise:

const resultPromise = returnsUndefined()
console.log("resultPromise", resultPromise)
console.log("resultPromise !== undefined", resultPromise !== undefined)
const resultPromiseAfterAwait = await resultPromise
console.log("resultPromiseAfterAwait", resultPromiseAfterAwait)
console.log("resultPromiseAfterAwait !== undefined", resultPromiseAfterAwait !== undefined)

// a bez "await" na konsoli 👀 zobaczysz:
// resultPromise Promise { <pending> }
// resultPromise !== undefined true
// resultPromiseAfterAwait undefined
// resultPromiseAfterAwait !== undefined false
