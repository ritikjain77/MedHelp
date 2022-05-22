const mongoose = require("mongoose");
const schema = new mongoose.Schema(
  {
    Name: "String",
    date: "String",
    slot: "String",
    PName: "String",
    Drname: "String",
  },
  { timestamps: true }
);

const AppointmentInfo = mongoose.model("AppointmentInfo", schema);
module.exports = AppointmentInfo;
