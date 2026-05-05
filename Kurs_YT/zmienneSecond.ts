console.log("Pierwsza Tablica");
let FirstArray: number[];
FirstArray = [3,6,9];
FirstArray = [9,9,9]; //nadpisała się względem pierwszej
FirstArray.push(18,18,18);
console.log(FirstArray);
console.log("Druga tablica");
let SecondArray: string[];
SecondArray=["Samo", "geste", "az sie paski grzeja na pompie"]; 
SecondArray.push("inwestycja powoli się zwraca");
console.log(SecondArray);
SecondArray.push("1")


console.log("teraz drugi raz tablice")
 //let ThirdArray = [111,222,333] //zakomentowałem zeby sprawdzić uprzednie deklarowanie rodzaju zmiennych dla arrayki 
let ThirdArray: number [] // krzyczało w linii niżej jak nie dałem tu dwóch nawiasów
ThirdArray=[444,555,666] 
ThirdArray.push(777)
//ThirdArray.push("słoń") // taka próba

let FourthArray: string []
FourthArray=["bóbr", "żubr", "łoś"]
FourthArray.push("słoń")
//FourthArray.push(1) //kolejna próba


 console.log("Trzecia tablica", ThirdArray)
 console.log("Czwarta tablica", FourthArray)