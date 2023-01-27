const axios = require("axios");
const url = "http://localhost:5000/api/user";

exports.userLogin = async (body) => {
  const { email, password } = body;
  if (!email || !password) {
    console.log("All fields required");
  } else {
    try {
      const data = await axios.post(`${url}/login`, body, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(data.data);
    } catch (error) {
      console.log(error.response.data.Error);
    }
  }
};
