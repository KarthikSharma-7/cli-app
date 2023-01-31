const axios = require("axios");
const { decryptToken } = require("../token/decrypt");
const URL = "http://localhost:5000/api/store";

exports.updateToStore = async (body) => {
  if (!body.oldkey) {
    return console.log("Enter the KEY you want to update");
  }
  const key = body.oldkey;
  delete body.oldkey;
  try {
    const token = decryptToken();
    const data = await axios.put(`${URL}/update/${key}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Response: ", data.data);
  } catch (error) {
    console.log("Error", error.response.data.Error);
  }
};
