console.log("Zadanie z ENUM jeszcze raz")

enum ActionOfHero{
    Attack = "Attack",
    Defend = "Defend",
    Move = "Move",
    Rest = "Rest"
}
function invokeAction_2(action: ActionOfHero): string {
    switch (action) {
        case ActionOfHero.Attack:
            console.log("Hero Attacks! - to mi za dużo podpowiada :(")
            break
        case ActionOfHero.Defend:
            console.log("Hero Defends! - staram się to zrobić inaczej niż mi podpowiada")
            break
        case ActionOfHero.Move:
            console.log("Hero Moves! - to jest moja wersja")
            break
        case ActionOfHero.Rest:
            console.log("Hero Rests! - to też jest moja wersja")
            break
        default:
            console.log("Unknown action - ciekawe czy tu wypali?")
            break
    }
}
invokeAction_2(ActionOfHero.Attack)
invokeAction_2(ActionOfHero.Defend)
invokeAction_2(ActionOfHero.Move)
invokeAction_2(ActionOfHero.Rest)
invokeAction_2(ActionOfHero.Kamera)