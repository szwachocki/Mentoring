enum ListOfTeams {
    Gieksa,
    Bks,
    Mosir
}
//na kursie filmowym pokazało to w jednej linii a mi rozbiło, czemu?
console.log("Teams", ListOfTeams)
console.log("Niemce", ListOfTeams.Gieksa)
console.log("Lublin", ListOfTeams.Bks)
console.log("Lubartów", ListOfTeams.Mosir)



enum BigTowns {
    Kijany = 0,
    Spiczyn = 1,
    Nielisz = 2,
    Cyców = 3
}
console.log("drugi enum",BigTowns)
console.log("Napisz Kijany", BigTowns.Kijany)
console.log("Napisz Spiczyn", BigTowns.Spiczyn)
console.log("Napisz Nielisz", BigTowns.Nielisz)
console.log("Napisz Cyców", BigTowns.Cyców)
console.log("NEXT")
console.log("Napisz A", BigTowns[0])
console.log("Napisz B", BigTowns[1])
console.log("Napisz C", BigTowns[2])
console.log("Napisz D", BigTowns[3]) // to dla mnie dopiero zaczeło mieć sens przy enumach


enum MaybeString {
    A = "Warszawa",
    B = "Spiczyn",
    C = 1
}
console.log("Legia", MaybeString.A)
console.log("Sparta", MaybeString.B)
console.log("eF", MaybeString.C)


enum WithStrings {
    Up = "GÓRA",
    Down = "DÓŁ"
}
console.log(WithStrings)


// console.log("Funkcja, ale bez enuma")

// function whereWeTurn(turn: string): void{
//     switch (turn) {
//         case "left":
//             console.log("skręć w lewo")
//             break
//         case "right":
//             console.log("skręć w prawo")
//             break
//         default:
//             console.log("Czy to jest element konstrukcji z JS?")
//             break

//     }
// }

// whereWeTurn("left") 
// whereWeTurn("right")
// whereWeTurn("krowa")


console.log("Z FUNKCJĄ i z ENUM")

function NextTimeTurn(side: WithStrings): void {
    switch (side) {
        case WithStrings.Up: 
            console.log("leć w górę")
            break
        case WithStrings.Down:
            console.log("Leć w dół")
            break
        default: 
            console.log("czy dobrze myślę ze przed tą funkcją z casami enum musi być zdeklarowany???")
            break
    }
}

NextTimeTurn(WithStrings.Up)

NextTimeTurn(WithStrings.Down)

NextTimeTurn(WithStrings.Dziąsło)