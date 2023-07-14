const axios = require("axios");
const url = "http://localhost:5000/api/user";

exports.userSignup = async (body) => {
  const { name, email, password, cpassword } = body;
  if (password !== cpassword) {
    console.log("Password and Cpassword must be same");
  } else {
    try {
      const data = await axios.post(
        `${url}/signup`,
        {
          name,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response: ", data.data);
    } catch (error) {
      console.log("Error: ", error.response.data.Error);
    }
  }
};
