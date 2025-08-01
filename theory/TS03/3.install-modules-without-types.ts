
console.log("\n--------Instalacja modułów bez wbudowanych deklaracji typów--------\n")


// Niektóre moduły nie mają wbudowanych deklaracji typów
// Zobacz ten przykład:
// https://www.npmjs.com/package/supertest
// Ikona DefinitelyTyped oznacza, że ten pakiet ma deklaracje typów TypeScript dostarczane przez osobny pakiet @types/supertest

// na stronie zobaczysz, że polecenie do instalacji modułu supertest to:
// npm i supertest

// po wykonaniu tego polecenia w konsoli zobaczysz:

// added 33 packages, and audited 53 packages in 2s
// 8 packages are looking for funding
//   run `npm fund` for details
// found 0 vulnerabilities

// Ale to nie wystarczy

// Poniższy kod zwróci błąd, bo typ supertest jest nieznany:
// import * as supertest from "supertest" // to zwróci błąd ⛔

// Could not find a declaration file for module 'supertest'. 'ts-base/node_modules/supertest/index.js' implicitly has an 'any' type.
//   Spróbuj `npm i --save-dev @types/supertest` jeśli istnieje lub dodaj nowy plik deklaracji (.d.ts) zawierający `declare module 'supertest';`ts(7016)

// ten błąd podpowiada też jak zainstalować typy
// Wystarczy użyć polecenia:
// `npm i --save-dev @types/supertest`

// lub po prostu:
// npm i @types/supertest

// 💡WSKAZÓWKA: Więcej informacji o typach znajdziesz tutaj:
// https://www.npmjs.com/package/@types/supertest

// import * as supertest from "supertest" // to działa poprawnie ✅ po zainstalowaniu typów


console.log("\n--------Odinstalowywanie modułów--------\n")


// 🧹aby odinstalować supertest musimy usunąć moduł i jego typy:
// npm uninstall supertest
// npm uninstall @types/supertest
