const fs = require("fs");
require("dotenv").config();
const Cryptr = require("cryptr");
const cryptr = new Cryptr(process.env.key);

exports.decryptToken = async () => {
  try {
    const data = fs.readFileSync("./bin/token/token.txt", "utf8");
    const encToken = cryptr.decrypt(data);
    return encToken;
  } catch (err) {
    console.error(err);
  }
};
