exports.signupQuestions = [
  {
    type: "input",
    name: "name",
    message: "Name of the user",
  },

  {
    type: "input",
    name: "email",
    message: "Email of the user",
  },
  {
    type: "password",
    name: "password",
    message: "Password of the user",
  },
  {
    type: "password",
    name: "cpassword",
    message: "Re-enter password to confirm the",
  },
];

exports.loginQuestion = [
  {
    type: "input",
    name: "email",
    message: "Enter your email",
  },
  {
    type: "password",
    name: "password",
    message: "Enter your password",
  },
];
