const mongoose = require("mongoose");

const hospital = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
});

const Hospital = mongoose.model("Hospital", hospital);

module.exports = Hospital;
