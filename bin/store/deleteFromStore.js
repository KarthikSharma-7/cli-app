const axios = require("axios");
const { decryptToken } = require("../token/decrypt");
const URL = "http://localhost:5000/api/store";

exports.deleteFromStore = async (body) => {
  const { key } = body;
  const token = decryptToken();
  if (!key) {
    return console.log("Enter KEY to delete pair");
  }
  try {
    const data = await axios.delete(`${URL}/delete/${key}`, {
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
