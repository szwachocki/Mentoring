console.log("Typ any jest jak dla mnie nielogiczny")
let FirstAnyVariable: any
FirstAnyVariable = 1
console.log("number:", typeof FirstAnyVariable)
FirstAnyVariable = true
console.log(" boolean teraz jest to:", typeof FirstAnyVariable)
FirstAnyVariable = 2+"jako tako"+1+true
console.log("string a teraz :", FirstAnyVariable)
console.log("Wg mnie to się powinno nadpisywa ;)") // w pierwszej wersji nie użyłem typeof

let AdditionalVariableOne: number
let AdditionalVariableTwo: string
const AdditionalVariableThree: boolean = true // tu miałem fajną sytuację bo nie przypisałem od razu wartości do boolean i VSC mi warczał

AdditionalVariableOne=1
AdditionalVariableTwo="String Variable"
console.log("Pierwsza", typeof AdditionalVariableOne, "druga", typeof AdditionalVariableTwo, "trzecia", typeof AdditionalVariableThree)