const mongoose = require("mongoose");
const dbconfig = require("../config/db.config");


const db = {};

db.mongoose = mongoose;
db.dbconfig = dbconfig;
db.ingredients = require("./ingredients.model");
db.user = require("./user.model");
db.recipe = require("./recipe.model");
db.process = require("./process.model");    


module.exports = db;