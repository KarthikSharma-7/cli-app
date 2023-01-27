const axios = require("axios");
const url = "http://localhost:5000/api/user";

exports.userUpdate = async (body) => {
  try {
    const data = await axios.put(`${url}/update`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Response: ", data.data);
  } catch (error) {
    console.log("Error: ", error.response.data.Error);
  }
};
