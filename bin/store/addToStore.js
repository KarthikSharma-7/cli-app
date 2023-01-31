const axios = require("axios");
const { decryptToken } = require("../token/decrypt");
const URL = "http://localhost:5000/api/store";

exports.addToStore = async (body) => {
  const { key, value } = body;
  const token = await decryptToken();
  if (!key || !value) {
    return console.log("All fields required");
  }
  try {
    const data = await axios.post(`${URL}/add`, body, {
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
