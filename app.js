const { ObjectId } = require("bson");
const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db = mongoose.connection;
//Check Database connection
db.once("open", () => {
  console.log("db is connected");
});

//Check Database Errors
db.on("error", (err) => {
  console.log(err);
});

//Import Model
let Person = require("./models/Person");

//************************************************* */
//Create new person
/* var person = new Person({
  name: "John",
  age: 35,
  favoriteFoods: ["Burger", "Tacos"],
});

person.save((err, data) => {
  if (err) console.log(err);
  else console.log(data);
}); */

//************************************************ */
//Create many records of persons

/* Person.create(
  [
    { name: "Mohamed", age: 27, favoriteFood: ["Pizza", "Noodles"] },
    { name: "Samir", age: 35, favoriteFoods: ["Meat"] },
  ],
  (err, data) => {
    if (err) console.log(err);
    else console.log(data);
  }
); */

//************************************************ */
//Search using find() (Example age greater than 27)
/* Person.find({ age: { $gt: 27 } }, (err, persons) => {
  if (err) console.log(err);
  else console.log(persons);
});
 */

//*********************************************//
//Search using findOne() (Example favoritFood )

/* Person.findOne(
  { favoriteFoods: { $in: ["Tacos", "Meat"] } },
  (err, persons) => {
    if (err) console.log(err);
    else console.log(persons);
  }
); */

//*********************************************//
//Search using findById()
/* Person.findById(ObjectId("6051010a20d15629cc6deaf4"), (err, data) => {
  if (err) console.log(err);
  else console.log(data);
}); */

//*********************************************//
//Classic Updates : Find , edit , save

/* Person.findById(ObjectId("6051010a20d15629cc6deaf4"), (err, data) => {
  if (err) console.log(err);
  else {
    data.favoriteFoods.push("hamburger");
    data.save();
    console.log(data);
  }
}); */

//Check the classic edits
/* Person.find({ favoriteFoods: { $in: ["hamburger"] } }, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
}); */

//*********************************************//
//Using model.findOneAndUpdate()

/* Person.findOneAndUpdate({ name: "John" }, { name: "Foued" }, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
}); */

//*********************************************//
//Delete One Document Using model.findByIdAndRemove
/* Person.findByIdAndRemove("6050fffb5d820a4b7865302f", (err, data) => {
  if (err) console.log(err);
}); */

//*********************************************//
//Delete Many Documents with model.remove()

/* Person.remove({ age: { $gt: 30 } }, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});
 */

//*********************************************//
//Chain Search Query Helpers to Narrow Search Results

/* Person.find({
  favoriteFoods: { $in: ["buritto", "hamburger", "Pizza", "Soupe"] },
})
  .sort({ name: "asc" })
  .limit(2)
  .select("-age")
  .exec((err, data) => {
    if (err) console.log(err);
    else console.log(data);
  }); */
