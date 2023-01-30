const axios = require("axios");
const URL = "http://localhost:5000/api/store";

exports.addToStore = async (body) => {
  const { key, value } = body;
  if (!key || !value) {
    return console.log("All fields required");
  }
  try {
    const data = await axios.post(`${URL}/add`, body, {
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
