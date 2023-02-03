const axios = require("axios");
const { accessToken } = require("../token/accessToken.js");
const URL = "http://localhost:5000/api/store";

exports.getAllPairs = async () => {
  try {
    const token = await accessToken();
    const data = await axios.get(`${URL}/getAll`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Response: ", data.data);
  } catch (error) {
    console.log("Error: ", error.response.data.Error);
  }
};
