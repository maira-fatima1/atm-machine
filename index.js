#! /user/bin/env node
import inquirer from "inquirer";
let myBalance = 50000;
let myPin = 1234;
console.log("\n\tWelcome to my ATM_Machine\n");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter Your pin code:"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Pin is Correct,Login Sucessfully!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation:",
            choices: ["Withdraw Amount", "Check Balance"]
        }
    ]);
    if (operationAns.operation === "Withdraw Amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to Withdraw:"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance:");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} Withdraw Sucessfully`);
            console.log(`Your Remaining Balance is:${myBalance}`);
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your Account Balance is:${myBalance}`);
    }
}
else {
    console.log("Pin is Incorrect, Try Again!");
}
