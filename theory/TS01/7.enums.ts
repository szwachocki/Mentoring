console.log("\n--------Enums--------\n")

// Enumy pozwalają nam zdefiniować zbiór powiązanych wartości.
// Mogą to być liczby lub stringi jako zestaw nazwanych stałych.
// Prosty przykład enum:

enum Direction {
    Up,
    Down
}

console.log("Direction:", Direction)
console.log("Direction.Down:", Direction.Down)
console.log("Direction.Up:", Direction.Up)

// na konsoli 👀 zobaczysz:
// Direction: { '0': 'Up', '1': 'Down', Up: 0, Down: 1 }
// Direction.Down: 1
// Direction.Up: 0

console.log("\n--------Enums and values--------\n")

// Możemy także przypisać wartość do każdej wartości enum:

enum UserResponse {
    No = 0,
    Yes = 1
}

console.log("UserResponse:", UserResponse)
console.log("UserResponse.No:", UserResponse.No)
console.log("UserResponse.Yes:", UserResponse.Yes)
console.log("UserResponse[1]:", UserResponse[1])
console.log("UserResponse[0]", UserResponse[0])
console.log("UserResponse[2]", UserResponse[2])

// na konsoli 👀 zobaczysz:
// UserResponse: { '0': 'No', '1': 'Yes', No: 0, Yes: 1 }
// UserResponse.No: 0
// UserResponse.Yes: 1
// UserResponse[1]: Yes
// UserResponse[0] No

enum MyEnum {
    Up = "UP",
    Down = "DOWN"
}

console.log("MyEnum:", MyEnum)
console.log("MyEnum.Up:", MyEnum.Up)
console.log("MyEnum.Down:", MyEnum.Down)

// na konsoli 👀 zobaczysz:
// MyEnum: { Up: 'UP', Down: 'DOWN' }
// MyEnum.Up: UP
// MyEnum.Down: DOWN

console.log("\n--------Example without Enum--------\n")

function moveByString(direction: string): void {
    switch (direction) {
        case "up":
            console.log("> We go up!")
            break
        case "down":
            console.log("> We go down!")
            break
        default:
            console.log("> We don't know where to go!")
            break
    }
}

moveByString("up") // this is ok ✅
// na konsoli 👀 zobaczysz:
// > We go up!

moveByString("down") // this is ok ✅
// na konsoli 👀 zobaczysz:
// > We go down!

moveByString("Up") // this is not ok ⛔
// na konsoli 👀 zobaczysz:
// > We don't know where to go!

console.log("\n--------Enums and functions--------\n")

// Enums can be used to narrow values passed to function:
function move(direction: MyEnum): void {
    switch (direction) {
        case MyEnum.Up:
            console.log("> We go up!")
            break
        case MyEnum.Down:
            console.log("> We go down!")
            break
        default:
            console.log("> We don't know where to go!")
            break
    }
}

move(MyEnum.Down) // this is ok ✅
// na konsoli 👀 zobaczysz:
// > We go down!

move(MyEnum.Up) // this is ok ✅
// na konsoli 👀 zobaczysz:
// > We go up!

// move("up") // to nie jest ok ⛔

// Inne wartości nie zadziałają!
// pojawi się błąd:
// Conversion of type 'number' to type 'MyEnum' may be a mistake because neither type sufficiently overlaps with the other.
// If this was intentional, convert the expression to 'unknown' first.ts(2352)
// move(1 as MyEnum) // TODO: odkomentuj, aby zobaczyć błąd w IDE ⛔

console.log("\n--------Enums with different types - Heterogeneous enums--------\n")

// Możemy mieszać typy w jednym enumie, to się nazywa "enumy heterogeniczne":
enum MyOtherEnum {
    Up = "UP",
    Down = "DOWN",
    Stop = 0
}

console.log("MyOtherEnum:", MyOtherEnum)
console.log("MyOtherEnum.Up:", MyOtherEnum.Up)
console.log("MyOtherEnum.Stop:", MyOtherEnum.Stop)

// na konsoli 👀 zobaczysz:
// MyOtherEnum: { '0': 'Stop', Up: 'UP', Down: 'DOWN', Stop: 0 }
// MyOtherEnum.Up: UP
// MyOtherEnum.Stop: 0

// Enumy istnieją w TypeScript, ale nie w JavaScript!
// 💡WSKAZÓWKA: Enumy - 🔗 https://www.typescriptlang.org/docs/handbook/enums.html
