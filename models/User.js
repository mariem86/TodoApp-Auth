const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["client",  "admin"],
    required: true,
    default:'client'
  },
  code: {
    type: String,

  },
 
 
});

module.exports = User = mongoose.model("user", userSchema);