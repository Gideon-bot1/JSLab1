//Task 1
console.log (`welcome to jslab2`);
let balance = Number(prompt ("What is your bank balance"));
let interest = Number(result = (3 / 100) * balance);

if (balance >0)
{
    balance += interest;
}
else
{
    balance = balance - 20; 
    console.log(`You have been charged a fee of -$20"`)
}

console.log(`Your bank balance is: ${balance}`);


//Task 2
console.log(`Better Bank`)
let bbalance = Number(prompt ("What is your bank balance"));
let binterest = Number(result = (3 / 100) * bbalance);

if (bbalance >=0)
{
    bbalance += binterest;
}

console.log(`Your bank balance is: ${bbalance}`);

//Task 3
//Ascending order. Read in three numbers and print whether they were entered in ascending order (equal entries count as in order, e.g. 4 4 5 is OK).
let num1 = Number(prompt("Please enter your first number"));
let num2 = Number(prompt("Please enter your second number"));
let num3 = Number(prompt("Please enter your third number"));

if (num1 <= num2 && num2 <= num3)
{
    console.log("your numbers were entered in ascending order.")
}
else
{
    console.log("Your numbers were not entered in ascending order.")
}
//Task 4
//All odd. Read in three numbers and print whether they are all odd.
let num11 = Number(prompt("Please enter your first number"));
let num22 = Number(prompt("Please enter your second number"));
let num33 = Number(prompt("Please enter your third number"));

if (num11 %2 && num22 %2 && num33 %2 == 1)
{
    console.log("The numbers you entered are all odd")
} 
else
{
    console.log("At least one of your numbers was even")
}
//Task 5
//Soccer scores. Generate a random number of goals for team 1 and for your favourite team (team 2), each 0–9. Print whether your team won, lost or drew.
let team1 = Math.floor(Math.random() * 10);   // 0 to 9
let team2 = Math.floor(Math.random() * 10);

console.log(`Team1 scored: ${team1}`)
console.log(`Team2 scored: ${team2}`)

if (team1 < team2)
{
    console.log("Your favourite team won!");
}
else if (team2 < team1)
{
    console.log("Your favourite team lost!");
}
else
{
    console.log("It was a draw!");
}

//Task 6
//Read an assignment 1 mark, an assignment 2 mark and a test mark. Award a Pass if all three are 80 or over, except if the average is 95 or over, in which case award a Merit. Everyone else gets a Fail.



/*

*/