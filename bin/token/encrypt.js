const fs = require("fs");
require("dotenv").config();
const Cryptr = require("cryptr");
const cryptr = new Cryptr(process.env.key);

const uploadEncryptToken = async (token) => {
  try {
    fs.writeFileSync("./bin/token/token.txt", token, "utf-8");
  } catch (error) {
    console.log("Error Occured...Try Again Later");
    process.exit(0);
  }
};

exports.encryptToken = async () => {
  try {
    const data = fs.readFileSync("./bin/token/token.txt", "utf8");
    const encToken = cryptr.encrypt(data);
    await uploadEncryptToken(encToken);
  } catch (err) {
    console.error(err);
  }
};
