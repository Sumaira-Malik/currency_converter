#! /usr/bin/env node 
import chalk from "chalk";
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.917,
    PKR: 278.28,
    IND: 83.53,
    AED: 3.673
};
// Making questions
let user_answer = await inquirer.prompt([
    {
        name: 'From',
        message: chalk.cyanBright('Enter From Currency'),
        Type: 'List',
        choices: ['USD', 'EUR', 'PKR', 'IND', 'AED']
    },
    {
        name: 'to',
        message: chalk.blue('Enter To Currency'),
        type: 'list',
        choices: ['USD', 'EUR', 'PKR', 'IND', 'AED']
    },
    {
        name: 'amount',
        message: chalk.yellow('Enter Your Amount'),
        type: 'number'
    }
]);
let fromAmount = currency[user_answer.From]; //exchange Rate
let toAmount = currency[user_answer.to]; // exchange rate
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; // usd base currency // 4
let convertedAmount = baseAmount * toAmount;
console.log(chalk.gray(convertedAmount));
