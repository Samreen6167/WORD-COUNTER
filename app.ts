#! /usr/bin/env node
// tis line is seban . it tells te os to run te codez
import inquirer from "inquirer";
import chalk from "chalk";

const answer: {
    sentence: string
} = await inquirer.prompt([{
    name: "sentence",
    type: "input",
    message: chalk.red.bold(" ENTER YOUR SENTENCE TO COUNT TE WORDS:"),
}])

const words=answer.sentence.trim().split(" ");// trim= remove spaces ; split=sow in form  of array 

console.log(words);

console.log(chalk.green.bold(`THE TOTAL WORDS IN GIVEN PARAGRAPH IS ${words.length}`)); //lent= count te words

console.log(chalk.blue.bold("THE END"))
