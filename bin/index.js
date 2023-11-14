#!/usr/bin/env node
const { Command } = require("commander");
const program = new Command();
const { prompt } = require("inquirer");
const {
  userSignup,
  userLogin,
  userUpdate,
  userResetPassword,
} = require("./user/index.js");
const {
  signupQuestions,
  loginQuestions,
  updateQuestions,
  resetPassword,
} = require("./questions/userQuestions");

program
  .name("cli-app")
  .description("This is a CLI-STORE to store key value pairs")
  .version("1.0.0");

program
  .command("signup")
  .alias("s")
  .description("Signup for a new user")
  .action(async () => {
    const answers = await prompt(signupQuestions);
    userSignup(answers);
  });

program
  .command("update-user")
  .alias("u")
  .description("Updating an existing user")
  .option("-n", "Update name of the user")
  .option("-e", "Update email of the user")
  .option("-n-e", "Update name and email of the user")
  .action(async (options) => {
    if (options.NE === true) {
      const answers = await prompt(updateQuestions);
      userUpdate(answers);
    } else if (options.n === true) {
      const answers = await prompt(updateQuestions[0]);
      userUpdate(answers);
    } else {
      const answers = await prompt(updateQuestions[1]);
      userUpdate(answers);
    }
  });

program
  .command("login")
  .alias("l")
  .description("Login Here")
  .action(async () => {
    const answers = await prompt(loginQuestions);
    userLogin(answers);
  });

program
  .command("reset")
  .alias("r")
  .description("Reset Your Password")
  .action(async () => {
    const answers = await prompt(resetPassword);
    userResetPassword(answers);
  });

program.parse();
