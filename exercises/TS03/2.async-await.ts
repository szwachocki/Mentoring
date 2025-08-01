
// Twoje zadanie:
//
// W module async.helpers ukryte są ustawienia aplikacji
// Możesz uzyskać do nich dostęp TYLKO za pomocą asynchronicznych funkcji loadProjectSettings i saveProjectSettings
//
// 1. Użyj funkcji saveProjectSettings, aby dodać wartość ustawienia:
// -- ta funkcja wymaga 2 parametrów - klucza i wartości - użyj 'Firefox' i '1'
// -- możesz użyć cheatAndPeekProjectSettings(), aby sprawdzić, czy wartość została poprawnie dodana
// -- pobierz wartość zwrotną i wyświetl ją w konsoli w formacie: 'Result after save:', result
// 2. Użyj funkcji loadProjectSettings, aby odczytać wszystkie ustawienia:
// -- wczytaj wszystkie ustawienia i wyświetl je w konsoli (używając console.log())
// 3. Napisz funkcję o nazwie 'loadValue', aby wczytać konkretną wartość ustawienia:
// -- loadValue powinna mieć jeden parametr - klucz
// -- loadValue powinna zwracać wartość tego klucza z ustawień (z loadProjectSettings)
// 4. Użyj funkcji 'loadValue', aby wyświetlić wartość klucza 'headless' z ustawień
// 5. Użyj funkcji 'loadValue', aby wyświetlić wartość klucza 'Chrome' z ustawień

// WSKAZÓWKA: Użyj cheatAndPeekProjectSettings do sprawdzenia

// Aby przetestować swoje rozwiązanie w terminalu, możesz uruchomić następujące polecenie:
// npm run ex3-2

import { cheatAndPeekProjectSettings, loadProjectSettings, saveProjectSettings} from "./helpers/async.helpers"

//// TODO:
//// -----------------------TUTAJ UMIEŚĆ SWOJE ROZWIĄZANIE:-------------------------



//// -----------------------NIE MODYFIKUJ KODU PONIŻEJ!-------------------------
// Tutaj znajdziesz oczekiwany rezultat zadania

// Oczekiwany wynik:
// Na konsoli 👀 powinieneś zobaczyć:

// 1:
// > Peaking Project settings: { headless: '1' }
// > saveProjectSettings...
// Result after save: true
// > Peaking Project settings: { headless: '1', Firefox: '1' }
// 2:
// > loadProjectSettings...
// Result after load: { headless: '1', Firefox: '1' }
// 4:
// > loadProjectSettings...
// headless value: 1
// 5:
// > loadProjectSettings...
// Chrome value: undefined

// Zignoruj tę linię - umożliwia ponowną deklarację zmiennych w tym projekcie
export {}
