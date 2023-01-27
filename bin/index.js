#!/usr/bin/env node
const { Command } = require("commander");
const program = new Command();
const { prompt } = require("inquirer");
const { userSignup } = require("./user/userSignup");
const {
  signupQuestions,
  loginQuestions,
} = require("./questions/userQuestions");

program
  .name("string-util")
  .description("CLI to some JavaScript string utilities")
  .version("0.8.0");

program
  .command("signup")
  .alias("s")
  .description("Signup for a new user")
  .action(async () => {
    const answers = await prompt(signupQuestions);
    userSignup(answers);
  });

program.parse();
