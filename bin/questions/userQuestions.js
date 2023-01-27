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

exports.loginQuestions = [
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

exports.updateQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter the new name of the user",
  },
  {
    type: "input",
    name: "email",
    message: "Enter the new email of the user",
  },
];

exports.resetPassword = [
  {
    type: "password",
    name: "oldpassword",
    message: "Enter old password",
  },
  {
    type: "password",
    name: "newpassword",
    message: "Enter new password",
  },
];
