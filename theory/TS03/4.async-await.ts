
console.log("\n--------Async / Await--------\n")


// TypeScript jest językiem asynchronicznym (tak jak JavaScript!)
// bardzo łatwo możemy pisać kod asynchroniczny
// jaka jest największa zaleta asynchronicznego kodu w JS?

// - możemy pisać kod, który wykonuje zapytania do backendu, gdy strona jest responsywna
// więc możemy uruchamiać wiele zadań jednocześnie!

// Pamiętaj, że JS był najpierw używany w stronach HTML!


// Funkcje asynchroniczne są najlepsze do długich operacji, takich jak:
// - odczytywanie plików
// - wysyłanie zapytań do REST API
// - operacje na bazie danych
// - równoległe testy w Playwright
// - i wiele innych

// Możemy uruchomić taką funkcję async i w międzyczasie wykonać inne szybkie zadania.
// Gdy funkcja async się zakończy, wtedy wynik zostanie zaprezentowany.
// ... ale jak?

// Zobaczmy jak używać funkcji async
// Oto przykład funkcji async, która po 2 sekundach zwróci jakąś wartość:

import { loadUserDataAsync, loadUserDataSync } from "./helpers/async.helper"


// gdy mamy funkcję async i użyjemy jej jak zwykłej funkcji, nie otrzymamy poprawnego wyniku:


console.log("wywołanie funkcji synchronicznej:")
const sampleData = loadUserDataSync()
console.log("sampleData:", sampleData)


console.log("\n--------------------------------------\n")


// odkomentuj kod poniżej, aby sprawdzić async:
console.log("wywołanie funkcji async bez await:")
const sampleDataFromAsync = loadUserDataAsync()
console.log("sampleDataFromAsync (bez await!):", sampleDataFromAsync)

console.log("Koniec!")


// na konsoli 👀 zobaczysz:

// wywołanie funkcji async bez await:
// loadUserData: entering function
// loadUserData: entering Promise and waiting for 2 seconds...
// sampleDataFromAsync (bez await!): Promise { <pending> }
// Koniec!
// loadUserData: Promise done - returning value!
