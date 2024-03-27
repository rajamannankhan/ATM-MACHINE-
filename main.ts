#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.yellowBright("WELCOME TO ATM MACHINE"));

let mybalance = 20000;
let myPin = 1122;
let pinAns = await inquirer.prompt([
  {
    name: "pin",
    message:chalk.greenBright ("ENTER YOUR PIN HERE"),
    type: "number",
  },
]);
if (pinAns.pin === myPin) {
  console.log(chalk.bold.italic.whiteBright("ENTERD PIN CODE IS CORRECT"));
  let opt = await inquirer.prompt([
    {
      name: "options",
      type: "list",
      message:chalk.greenBright( "WHAT DO YOU WANNA DO?"),
      choices: ["FAST CASH", "CHECK BALANCE","CASH DEPOSIT"],
    },
  ]);
  if (opt.options === "FAST CASH") {
    let amount = await inquirer.prompt([
      {
        name: "amountwithdraw",
        type: "list",
        choices: [5000,  10000, 15000, 20000, 25000, 30000],
        message: chalk.yellowBright("ENTER AMOUNT YOU WANNA WITHDRAW"),
      },
    ]);
    if (amount.amountwithdraw <= mybalance) {
      mybalance -= amount.amountwithdraw;
      console.log(chalk.magentaBright.bold
        `AMOUNT SECCESSFULY WITHDRAWN NOW YOUR CURRENT BALANCE IS: ${mybalance}`
      );
    } else {
      console.log(chalk.redBright.italic`INSUFFICIENT BALANCE YOUR BALANCE IS:${mybalance}`);
    }
  } else if (opt.options === "CHECK BALANCE") {
    console.log(chalk.magentaBright`YOUR CURRENT BALANCE IS :${mybalance}`);
  } else if (opt.options === "CASH DEPOSIT") {
    let deposit = await inquirer.prompt([
      {
        name: "cashdeposit",
        type: "number",
        message: "ENTER AMOUNT YOU WANNA DEPOSIT",
      },
    ]);
    mybalance += deposit.cashdeposit;
    console.log(
      `AMOUNT SUCCESSFULLY DEPOSITED YOUR CURRENT BALANCE IS:${mybalance}`
    );
  }
} else {
  console.log(chalk.redBright("WRONG PINCODE"));
}
