const fs = require("fs");

exports.storeToken = async (token) => {
  try {
    fs.writeFileSync(
      "./bin/token/token.txt",
      token,
      {
        flag: "w",
      },
      "utf-8"
    );
  } catch (error) {
    return false;
  }
};
