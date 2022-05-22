const express = require("express");
const AppointmentModel = require("../models/AppointmentModel");
const router = express.Router();

router.get("/appointmentData", async (req, res) => {
  console.log(req.query);
  const appointmentData = req.query;
  const bimari = req.query.Name;
  const dateOfBooking = req.query.date;
  const slot = req.query.time;
  const patient = req.query.Pname;
  const doctor = req.query.DrName;
  //   console.log(bimari);
  //   console.log(dateOfBooking);
  //   console.log(slot);
  //   console.log(patient);
  //   console.log(doctor);
  try {
    const newAppointment = await AppointmentModel.create({
      Name: bimari,
      date: dateOfBooking,
      slot: slot,
      PName: patient,
      Drname: doctor,
    });
    res.json({ statusCode: 200, data: newAppointment });
  } catch (error) {
    res.json({ statusCode: 400, data: error });
  }
});
module.exports = router;
