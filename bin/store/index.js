const { getAllPairs } = require("./getAllPairs");
const { addToStore, imageUpload } = require("./addToStore");
const { updateToStore } = require("./updateToStore");
const { getPair } = require("./getPair");
const { deleteFromStore } = require("./deleteFromStore");

module.exports = {
  getAllPairs,
  addToStore,
  updateToStore,
  getPair,
  deleteFromStore,
  imageUpload,
};
