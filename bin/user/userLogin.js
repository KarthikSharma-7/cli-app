const axios = require("axios");
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
      console.log(`Welcome ${data.data.name}`);
      return data.data.token;
    } catch (error) {
      console.log("Error: ", error.response.data.Error);
      process.exit(0);
    }
  }
};
