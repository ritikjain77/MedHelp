import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import React, { useState } from "react";
import "../styles/Appointment.css";
import axios from "axios";

export default function AppointmentForm(props) {
  const [enterTitle, SetenterTitle] = useState("");
  const [enterDate, SetenterDate] = useState("");
  const [enterTime, setTime] = useState("9:00 Am to 12:00Pm");
  const [enterName, setName] = useState("");
  const [enterDrName, setDrName] = useState("");

  const titleChangehandler = (event) => {
    SetenterTitle(event.target.value);
  };

  const dateChangeHandler = (event) => {
    // const fdate=();
    SetenterDate(event.target.value);
  };

  const dropdownHandler = (event) => {
    setTime(event.target.value);
  };

  const nameChangehandler = (event) => {
    setName(event.target.value);
  };

  const drNameChangehandler = (event) => {
    setDrName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const appointData = {
      Name: enterTitle,
      date: new Date(enterDate),
      time: enterTime,
      Pname: enterName,
      DrName: enterDrName,
    };
    // console.log("jsadkjlsjd");
    // console.log(appointData);
    // bookAppointment(appointData);
    props.addData(appointData);
    SetenterTitle("");
    SetenterDate("");
    setTime("");
    setDrName("");
    setName("");
    console.log("jsadkjlsjd");
    console.log(appointData);
    axios
      .get(`/appointmentData`, {
        params: {
          Name: appointData.Name,
          date: appointData.date,
          time: appointData.time,
          Pname: appointData.Pname,
          DrName: appointData.DrName,
        },
      })
      .then((response) => console.log("Chal gaya axios"))
      .catch((error) => console.log(error));
  };

  return (
    <div className="Appointment">
      <Box component={"form"} onSubmit={submitHandler} className="box">
        <h1>Book Appointment</h1>
        <TextField
          required
          id="outlined--required"
          className="text-required"
          label="Name"
          defaultValue="Enter Name"
          value={enterName}
          onChange={nameChangehandler}
        />
        <TextField
          required
          id="outlined--required"
          className="text-required"
          label="Doctor Name"
          defaultValue="Enter Dr. Name"
          value={enterDrName}
          onChange={drNameChangehandler}
        />
        <TextField
          required
          id="outlined--required"
          className="text-required"
          label="Issue"
          defaultValue="Tell your issue"
          value={enterTitle}
          onChange={titleChangehandler}
        />
        {/* <br/> */}
        {/* <br /> */}
        <TextField
          required
          id="outlined-required"
          className="text-required"
          //   label="date"
          type="date"
          value={enterDate}
          onChange={dateChangeHandler}
        />

        <div className="expense-filter">
          <div className="expense-filter__control">
            <label>Book Slot</label>
            <select onChange={dropdownHandler} placeholder="Select Slot">
              <option value="" disabled selected hidden>
                Select Slot
              </option>
              <option value="9:00 Am to 12:00 Pm">9:00 Am to 12:00 Pm</option>
              <option value="2:00 Pm to 5:00 Pm">2:00 Pm to 5:00 Pm</option>
              <option value="6:00 Pm to 9:00 Pm">6:00 Pm to 9:00 Pm</option>
            </select>
          </div>
        </div>
        <button type="submit" className="button">
          Add
        </button>
        <div className="bar"></div>
      </Box>
    </div>
  );
}
