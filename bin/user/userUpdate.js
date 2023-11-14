const axios = require("axios");
const { accessToken } = require("../token/accessToken.js");
const url = "http://localhost:5000/api/user";

exports.userUpdate = async (body) => {
  try {
    const token = await accessToken();
    const data = await axios.put(`${url}/update`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Response: ", data.data);
  } catch (error) {
    if (error.response.data.Error) {
      console.log(error.response.data.Error);
    } else {
      console.log("Error Occured....Try Again");
    }
  }
};
