console.log("Tomek do wozu, czyli UNION-TYPES")

let FirstUnionValue: number | string

FirstUnionValue = 1
FirstUnionValue = "Wiertarka" 
// FirstUnionValue = true // podoba mnie sie 
console.log(FirstUnionValue) // czyli napisało 1 wiertarką? 

let UnionArray: (number | string | boolean)[] = []
UnionArray.push(1)
UnionArray.push("Szambiarka")
UnionArray.push(true)
console.log("Gówno ożyło: ", UnionArray)

function unionFunctionEx(value: number | string | boolean | number[]): void {
    console.log("Z funckji z unionem: ",value)
}
unionFunctionEx("Ryjówka")
unionFunctionEx(111)
unionFunctionEx(false) // a tu nie nadpisuje 
// czy funkcja z UNION TYPE jest tylko void? 
unionFunctionEx([11, 222, 3333])