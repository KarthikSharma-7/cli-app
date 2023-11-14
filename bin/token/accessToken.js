const fs = require("fs");

exports.accessToken = async () => {
  try {
    const token = await fs.readFileSync(".token.txt", "utf-8");
    return token;
  } catch (error) {
    console.log("Login Required");
    process.exit(0);
  }
};
