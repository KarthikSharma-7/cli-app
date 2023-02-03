const fs = require("fs");

const consoleFunction = () => {
  console.log("Logout Sucessfully....");
};

exports.logout = async () => {
  try {
    fs.unlinkSync(".token.txt");
    consoleFunction();
  } catch (error) {
    console.log("Error in Logging Out");
    process.exit(0);
  }
};
