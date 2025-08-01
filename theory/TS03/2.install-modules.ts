console.log("\n--------Install modules--------\n")

// Importy w TypeScript działają tak samo jak w JavaScript.
// aby zainstalować nowy moduł musisz użyć polecenia:
// npm i <nazwa-pakietu>
// lub:
// npm install <nazwa-pakietu>
// jak znaleźć moduły i <nazwa-pakietu>?
// moduły są dostępne na stronie https://www.npmjs.com/
// znajdźmy moduł: faker-js
// Ten moduł służy do generowania losowych danych
// i może być używany w testach do generowania losowych imion, dat, tekstów itp.
// https://www.npmjs.com/package/@faker-js/faker
// na stronie zobaczysz, że polecenie do instalacji modułu faker to:
// npm i @faker-js/faker
// 💡WSKAZÓWKA: Zwróć uwagę na ikonę TypeScript obok nazwy modułu.
// Ikona TypeScript oznacza, że pakiet ma wbudowane deklaracje typów
// po wykonaniu tego polecenia w konsoli zobaczysz:
// added 1 package, and audited 3 packages in 14s
// 1 high severity vulnerability
// Aby rozwiązać wszystkie problemy (w tym zmiany niekompatybilne), uruchom:
//   npm audit fix --force
// Uruchom `npm audit` po więcej szczegółów.
// 💡WSKAZÓWKA: możesz uruchomić "npm audit fix --force", aby naprawić problemy typu "1 high severity vulnerability"
// po instalacji zostanie utworzony nowy katalog:
// node_modules
// gdzie będą przechowywane wszystkie pobrane dane i moduły
// zostanie też dodany nowy wpis do package.json:
// "dependencies": {
//     "@faker-js/faker": "^9.9.0" lub nowszy
// }
// więc po zainstalowaniu nowego modułu w projekcie, zostanie on dodany do package.json z informacją o wersji.
// aby sprawdzić w terminalu wszystkie zainstalowane moduły z wersjami, możesz użyć polecenia:
// npm list
// powinieneś zobaczyć:
// jt-base@1.0.0 E:\Projects\jt-api\js-base
// └── @faker-js/faker@9.9.0

// jak używać zainstalowanych modułów?
// jest to również opisane na stronie modułu:
// https://www.npmjs.com/package/@faker-js/faker
// import { faker } from "@faker-js/faker" // UWAGA: bez uruchomienia "npm i @faker-js/faker" pojawi się błąd ⛔
// // to wygeneruje losowe imiona:
// let fullName: string
// fullName = faker.person.fullName()
// console.log(fullName)

console.log("\n--------Uninstall modules--------\n")

// 🧹jak odinstalować/usunąć moduły?
// npm uninstall <nazwa-pakietu>
// więc musimy zamienić <nazwa-pakietu> na nazwę pakietu
// na przykład, aby odinstalować @faker-js/faker:
// npm uninstall @faker-js/faker
