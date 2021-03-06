const mongoose = require("mongoose");
let personSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: { type: Number },
    favoriteFoods: [String],
  },
  { collection: "persons" }
);

let Person = (module.exports = mongoose.model("Person", personSchema));
