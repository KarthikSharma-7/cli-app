#!/usr/bin/env node
const { Command } = require("commander");
const program = new Command();
const { prompt } = require("inquirer");
const {
  userSignup,
  userLogin,
  userUpdate,
  userResetPassword,
  logout,
} = require("./user/index.js");
const {
  signupQuestions,
  loginQuestions,
  updateQuestions,
  resetPassword,
} = require("./questions/userQuestions.js");
const {
  getAllPairs,
  addToStore,
  updateToStore,
  getPair,
  deleteFromStore,
  imageUpload,
} = require("./store/index.js");
const {
  options,
  addStore,
  updateStore,
  getOnePair,
  deletePair,
} = require("./questions/storeQuestions.js");
const { storeToken } = require("./token/token.js");

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
    await userSignup(answers);
  });

program
  .command("update-user")
  .description("Updating an existing user")
  .option("-n", "Update name of the user")
  .option("-e", "Update email of the user")
  .action(async (options) => {
    if (options.e === true) {
      const answers = await prompt(updateQuestions[1]);
      userUpdate(answers);
    } else if (options.n === true) {
      const answers = await prompt(updateQuestions[0]);
      userUpdate(answers);
    } else {
      const answers = await prompt(updateQuestions);
      userUpdate(answers);
    }
  });

program
  .command("login")
  .alias("l")
  .description("Login Here")
  .action(async () => {
    const answers = await prompt(loginQuestions);
    await userLogin(answers);
    const answer = await prompt(options);
    if (answer.action === "Add to store") {
      console.log(`Use the command: a | add`);
    } else if (answer.action === "Update to store") {
      console.log(`Use the command: update-store`);
    } else if (answer.action === "Delete from store") {
      console.log(`Use the command: del | delete`);
    } else if (answer.action === "Get all pairs") {
      console.log(`Use the command: g | get`);
    } else {
      console.log(`Use the command: get-one`);
    }
  });

program
  .command("reset")
  .alias("r")
  .description("Reset Your Password")
  .action(async () => {
    const answers = await prompt(resetPassword);
    userResetPassword(answers);
  });

program
  .command("getall")
  .alias("g")
  .description("Get all key-value pairs")
  .action(() => {
    getAllPairs();
  });

program
  .command("add")
  .alias("a")
  .option("i")
  .description("Add a new entry to the store")
  .action(async (options) => {
    const answers = await prompt(addStore);
    addToStore(answers);
  });

program
  .command("update-store")
  .description("Updating an existing store")
  .option("-k", "To update KEY...")
  .option("-v", "To update VALUE...")
  .action(async (options) => {
    if (options.k === true) {
      const array = updateStore.slice(0, 2);
      const answers = await prompt(array);
      updateToStore(answers);
    } else if (options.v === true) {
      const array = updateStore.splice(1, 1);
      const answers = await prompt(updateStore);
      updateToStore(answers);
    } else {
      const answers = await prompt(updateStore);
      updateToStore(answers);
    }
  });

program
  .command("getone")
  .description("Get a key-value pair")
  .action(async () => {
    const answer = await prompt(getOnePair);
    getPair(answer);
  });

program
  .command("delete-key")
  .alias("del")
  .description("Delete a pair from the store")
  .action(async () => {
    const answer = await prompt(deletePair);
    deleteFromStore(answer);
  });

program
  .command("logout")
  .description("Logout")
  .action(() => {
    logout();
  });

program.command("image").action(async () => {
  const ans = await prompt([
    {
      type: "input",
      name: "pic",
      message: "image path",
    },
  ]);
  imageUpload(ans);
});

program.parse();
