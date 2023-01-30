const axios = require("axios");
const URL = "http://localhost:5000/api/store";

exports.getPair = async (body) => {
  if (!body.key) {
    return console.log("Enter KEY to get pair");
  }
  try {
    const data = await axios.get(`${URL}/getValue/${body.key}`, {
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
