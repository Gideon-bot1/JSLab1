/*console.log("Hello World!");
console.log("Welcome to Web 1");
let name = prompt("who are you?");
let years = prompt("How long have you lived in Dunedin?")

console.log("Hello "+ name);
console.log(years + " years is long enough to get a feel for the place");
console.log(`Hello ${name}, welcome to Dunedin`);
*/

//Task1
console.log("Welcome to Web 1 Javascript");
console.lg
//task2
let name = prompt("who are you?");
let years = prompt("How many years have you lived in Dunedin?");
console.log(`Hello ${name}, welcome to Dunedin`);
//Task3
let num1 = Number(prompt("Please enter your first number"));
let num2 = Number(prompt("Please enter your second number"));

let sum = num1 + num2

console.log(`${num1} + ${num2} = ${sum}`);
//Task 4
let hours = Number(prompt("How many hours a night do you watch tv?"));
let week = hours * 7
let month = week * 4
let year = month * 12

console.log(`You watch TV for ${week} hours a week, ${month} hours a month, ${year} hours a year`);
//Task5
let age = Number(prompt("Please enter your age"));

let daystask5 = age * 365
let hourstask5 = daystask5 * 24

console.log(`You are ${daystask5} days old or ${hourstask5} hours old...`);
//Task6
let averageSpeed = Number(prompt("What is your average speed?"));
let elapsedTime = Number(prompt("What was your total elapsed time?"));
let nonTravelTime = Number(prompt("how long did you stop for?"));
let distance = averageSpeed * (elapsedTime - nonTravelTime)
console.log(`Your total distance traveled was ${distance}km.`)
//Task7
let milk1 = Number(prompt("Please enter the price of the first milk"))
let milk2 = Number(prompt("Please enter the price of the second milk"))
let milk3 = Number(prompt("Please enter the price of the third milk"))

let milkavg = (milk1 + milk2 + milk3) / 3

console.log(`The average price of your milk is ${milkavg.toFixed(2)}`)