const axios = require("axios");
const URL = "http://localhost:5000/api/store";

exports.deleteFromStore = async (body) => {
  const { key } = body;
  if (!key) {
    return console.log("Enter KEY to delete pair");
  }
  try {
    const data = await axios.delete(`${URL}/delete/${key}`, {
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
