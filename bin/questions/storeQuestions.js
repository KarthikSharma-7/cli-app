exports.options = [
  {
    type: "list",
    name: "action",
    message: "Choose an option",
    choices: [
      "Add to store",
      "Update to store",
      "Delete from store",
      "Get all pairs",
      "Get a single pair",
    ],
  },
];

exports.addStore = [
  {
    type: "input",
    name: "key",
    message: "Add a KEY to store...",
  },
  {
    type: "input",
    name: "value",
    message: "Add a VALUE to store",
  },
];

exports.updateStore = [
  {
    type: "input",
    name: "oldkey",
    message: "Which KEY you want to update?",
  },
  {
    type: "input",
    name: "key",
    message: "Enter the new KEY",
  },
  {
    type: "input",
    name: "value",
    message: "Enter the new VALUE",
  },
];

exports.getOnePair = [
  {
    type: "input",
    name: "key",
    message: "Enter KEY to get the pair",
  },
];

exports.deletePair = [
  {
    type: "input",
    name: "key",
    message: "Enter KEY you want to delete from the store",
  },
];
