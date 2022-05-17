const mongoose = require("mongoose");

const form = new mongoose.Schema({
  Fname: {
    type: String,
    required: true,
    trim: true,
  },
  Lname: {
    type: String,
    required: true,
    trim: true,
  },
  gender: {
    type: String,
    enum: "male" || "female",
  },
  contact: {
    type: Number,
    required: true,
    minlength: 10,
    maxlength: 10,
  },
  age: {
    type: Number,
    required: true,
    minlength: 2,
    validate(value) {
      if (value <= 14) {
        throw new Error(" Not qualified for Donation");
      }
    },
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  state: {
    type: String,
    required: true,
    trim: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
  blood_group: {
    type: String,
  },
  weight: {
    type: Number,
    required: true,
  },
  organ: {
    type: String,
    required: true,
  },
  any_disease: {
    type: String,
  },
  surgery_or_transfusion: {
    type: String,
    enum: "major" || "minor" || "blood transfusion",
  },
});

const OrganDonation = mongoose.model("OrganDonation", form);

module.exports = OrganDonation;
