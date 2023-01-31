const axios = require("axios");
const { decryptToken } = require("../token/decrypt");
const url = "http://localhost:5000/api/user";

exports.userUpdate = async (body) => {
  try {
    const token = await decryptToken();
    const data = await axios.put(`${url}/update`, body, {
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
