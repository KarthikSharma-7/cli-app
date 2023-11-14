const fs = require("fs");
const hidefile = require("hidefile");

const hideToken = async () => {
  const path = await hidefile.hideSync("token.txt");
};

exports.storeToken = async (token) => {
  try {
    fs.writeFileSync(
      "token.txt",
      token,
      {
        flag: "w",
      },
      "utf-8"
    );
    hideToken();
  } catch (error) {
    console.log("Login from the package directory");
    return false;
  }
};
