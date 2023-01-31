const axios = require("axios");
const { decryptToken } = require("../token/decrypt");
const url = "http://localhost:5000/api/user";

exports.userResetPassword = async (body) => {
  const { oldpassword, newpassword } = body;
  const token = await decryptToken();
  try {
    const data = await axios.put(`${url}/reset`, body, {
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
