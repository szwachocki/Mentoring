// aby eksportować obiekty i funkcje z modułu - użyj export:
export const sampleArray = ["Python", "Java", "JavaScript", "C#"]

export function printDataOnConsole(data: string): void {
    console.log("printDataOnConsole:", data)
}

function printArrayOnConsoleWithForeach(array: string[]): void {
    array.forEach((element) => {
        console.log("printArrayOnConsoleWithForeach:", element)
    })
}

function printArrayOnConsoleWithFor(array: string[]): void {
    for (let index = 0; index < array.length; index++) {
        const element = array[index]
        console.log("printArrayOnConsoleWithFor:", element)
    }
}

const userName = "sample.user@test.test"

// jeśli chcesz eksportować wiele obiektów naraz - użyj poniższej konstrukcji:
export { printArrayOnConsoleWithForeach, printArrayOnConsoleWithFor, userName }
