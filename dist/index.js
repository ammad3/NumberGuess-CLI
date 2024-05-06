#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgRed("Number Guessing Game"));
const randomNumber = Math.floor(Math.random() * 10 + 1);
let answer = await inquirer.prompt([
    {
        name: "oneTen",
        type: "number",
        message: "Guess a Number",
        default: "Guess from 1 to 10",
    },
]);
console.log(chalk.blue("Your Number: " + answer.oneTen));
console.log("Computer Generated: " + randomNumber);
if (answer.oneTen === randomNumber) {
    console.log(chalk.magenta("You Win"));
}
else {
    console.log(chalk.red("You lose"));
}
