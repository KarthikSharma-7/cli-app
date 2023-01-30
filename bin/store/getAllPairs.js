const axios = require("axios");
const URL = "http://localhost:5000/api/store";

exports.getAllPairs = async () => {
  try {
    const data = await axios.get(`${URL}/getAll`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ",
      },
    });
    console.log("Response: ", data.data);
  } catch (error) {
    console.log("Error: ", error.response.data.Error);
  }
};
