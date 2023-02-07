const { accessToken } = require("../token/accessToken.js");
const URL = "http://localhost:5000/api/store";
const fs = require("fs");
const path = require("path");
const axios = require("axios");
const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");
const { log } = require("console");
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.addToStore = async (body) => {
  const { key, value } = body;
  const token = await accessToken();
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

exports.imageUpload = async (userPath) => {
  console.log(process.env.CLOUDINARY_API_KEY);
  const absolutePath = path.resolve(userPath.pic.split("\\").join("/"));
  console.log(absolutePath);
  try {
    const image = fs.readFileSync(`${absolutePath}`);

    const cld_upload_stream = cloudinary.uploader.upload_stream(
      image,
      (error, result) => {
        if (error) {
          console.log(error);
        } else {
          console.log(result.secure_url);
        }
      }
    );
    streamifier.createReadStream(image).pipe(cld_upload_stream);
  } catch (error) {
    console.log(error);
  }
};
