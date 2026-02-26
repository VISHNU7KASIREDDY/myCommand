#!/usr/bin/env node
const { Command } = require("commander");
const program = new Command();
program
    .command("greet <name>")
    .action((name) => { console.log(`Hello ${name}`); });
program
    .command("add <n1> <n2>")
    .description("Add two numbers")
    .action((n1, n2) => { console.log(Number(n1) + Number(n2)); });
program
    .command("subtract <n1> <n2>")
    .description("Subtract two numbers")
    .action((n1, n2) => { console.log(Number(n1) - Number(n2)); });
program
    .command("multiply <n1> <n2>")
    .description("Multiply two numbers")
    .action((n1, n2) => { console.log(Number(n1) * Number(n2)); });
program
    .command("divide <n1> <n2>")
    .description("Divide a with b")
    .action((n1, n2) => { console.log(Number(n1) - Number(n2)); });
program.parse();
