const axios = require("axios");
const { storeToken } = require("../token/token");
const { encryptToken } = require("../token/encrypt");
const url = "http://localhost:5000/api/user";

exports.userLogin = async (body) => {
  const { email, password } = body;
  if (!email || !password) {
    console.log("All fields required");
    process.exit(0);
  } else {
    try {
      const data = await axios.post(`${url}/login`, body, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const boolean = await storeToken(data.data.token);
      if (boolean === false) {
        console.log("Login Again");
        process.exit(0);
      }
      encryptToken();
      console.log(`Welcome ${data.data.name}`);
    } catch (error) {
      console.log("Error: ", error.response.data.Error);
      process.exit(0);
    }
  }
};
