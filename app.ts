// Day 15 Challenge: Start Coding!

// Question 43
let magician : string[] = ["user1","user2","user3"];
let magic =["sfsag"]
function showMagician(magicians:string[]): void{
    for (const magician of magicians )
    console.log(magician);
}
function  make_great(magicians:string[]): string[] {
    const greatMagicians: string[] = magician.map(magician => `the great ${magicians}`)
    return magician;
}
const greatMagicianNames : string[] = make_great(magician); //modified 
console.log("Orignal magicians");//Orignal magicians list
showMagician(magician);
console.log("\nGreat Magicians");  //Great Magicians list
showMagician(greatMagicianNames)

// Question 44;

function sandwiches(...items: string[]) {
    console.log(`Making a sandwiches ${items.join(', ')}.`);
}
sandwiches("Cheese");
sandwiches( "avocado" , "Mayo");

// Question 45

function cars(manufacturing:string, model: string,...options: [string, any][]): object {
    let car={manufacturing ,model};
    options.forEach(([key , value]) => car[key] = value);
    return car;
    
}

console.log(cars("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(cars("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));