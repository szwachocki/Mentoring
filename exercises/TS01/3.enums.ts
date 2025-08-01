
// Twoje zadanie:
// 1. Zadeklaruj Enum:
// - o nazwie HeroActions
// - z następującymi wartościami: Attack, Defend, Move, Rest
// 2. Zadeklaruj funkcję:
// - o nazwie invokeAction
// - z jednym parametrem action typu HeroActions
// - funkcja powinna zwracać string
// 3. Funkcja w zależności od wartości enum powinna zwracać następujące stringi:
// - dla Attack - "Hero Attacks!"
// - dla Defend - "Hero Defends!"
// - dla Move - "Hero got the Moves!"
// - dla Rest - "Hero Rests!"
// - dla nieznanej akcji - "Unknown action"
// - możesz użyć do tego "switch"
// 4. Przetestuj swoje rozwiązanie dla wszystkich wartości z enum HeroActions

// ❓ Pytania:
// ❓ Czy możliwe jest uzyskanie wyniku "Unknown action"?

// Aby przetestować swoje rozwiązanie w terminalu, możesz uruchomić następujące polecenie:
// npm run ex1-3


//// TODO:
//// -----------------------TUTAJ UMIEŚĆ SWOJE ROZWIĄZANIE:-------------------------

enum HeroActions {
    Attack = "Attack",
    Defend = "Defend",
    Move = "Move",
    Rest = "Rest"
}

function invokeAction(action: HeroActions): string {
    switch (action) {
        case HeroActions.Attack:
            return "Hero Attacks!";
        case HeroActions.Defend:
            return "Hero Defends!";
        case HeroActions.Move:
            return "Hero got the Moves!";
        case HeroActions.Rest:
            return "Hero Rests!";
        default:
            return "Unknown action";
    }
}

// Testowanie funkcji dla wszystkich wartości enum
console.log(invokeAction(HeroActions.Attack));
console.log(invokeAction(HeroActions.Defend));
console.log(invokeAction(HeroActions.Move));
console.log(invokeAction(HeroActions.Rest));

//// -----------------------NIE MODYFIKUJ KODU PONIŻEJ!-------------------------
// Tutaj znajdziesz oczekiwany rezultat zadania

//// -----------------------NIE MODYFIKUJ KODU PONIŻEJ!-------------------------
// Tutaj znajdziesz oczekiwany rezultat zadania

// Oczekiwany wynik:
// Na konsoli 👀 powinieneś zobaczyć:
// Hero Attacks!
// Hero Defends!
// Hero got the Moves!
// Hero Rests!
