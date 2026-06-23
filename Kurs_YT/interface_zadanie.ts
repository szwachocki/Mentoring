console.log("Interface zadanie z kursu")

interface UserData {
    id: number
    fullName: string
    pass: string
    data?: string
}
const userOne: UserData = {
    id: 2,
    fullName: "Jan Kowalski",
    pass: "123456"
}

const userTwo: UserData = {
    id: 1,
    fullName: "Anna Nowak",
    pass: "qwerty",
    data: "2024-06-01"
}

console.log("userOne:", userOne)
console.log("userTwo:", userTwo)