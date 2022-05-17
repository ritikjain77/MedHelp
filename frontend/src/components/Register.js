import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../images/mhlogo.png";

export default function Register() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [repass, setRePass] = useState("");
  const [role, setRole] = useState("");

  const onChangeName = (e) => {
    setUserName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePass = (e) => {
    setPass(e.target.value);
  };
  const onChangeRePass = (e) => {
    setRePass(e.target.value);
  };
  const onChangeRole = (e) => {
    setRole(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (
      username === "" ||
      email === "" ||
      pass === "" ||
      repass === "" ||
      role === ""
    ) {
      alert("Please fill the details");
    } else if (pass !== repass) {
      alert("Passwords did not match!");
    } else {
      axios
        .post("/users/register", {
          Username: username,
          Email: email,
          Password: pass,
          Role: role,
        })
        .then((res) => {
          console.log(res);
          alert("User added successfully");
          window.location.href = "/login";
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setUserName("");
    setEmail("");
    setPass("");
    setRePass("");
    setRole("");
  };
  return (
    <>
      <div className="wrapper">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="text-center mt-4 name">MEDHELP</div>
        <form className="p-3 mt-3" onSubmit={onSubmitForm} autoComplete="off">
          <div className="form-field d-flex align-items-center">
            <span className="fa fa-user pr-1"></span>
            <input
              type="text"
              name="userName"
              id="userName"
              placeholder="Username"
              onChange={onChangeName}
              value={username}
            />
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="fa fa-envelope pr-1"></span>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={onChangeEmail}
              value={email}
            />
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="fa fa-key pr-1"></span>
            <input
              type="password"
              name="password"
              id="pwd"
              placeholder="Password"
              onChange={onChangePass}
              value={pass}
            />
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="fa fa-unlock-alt pr-1"></span>
            <input
              type="password"
              name="confirmpassword"
              id="repwd"
              placeholder=" Confirm Password"
              onChange={onChangeRePass}
              value={repass}
            />
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="fa fa-address-card pr-1"></span>
            <input
              type="text"
              name="role"
              id="role"
              placeholder="Doctor/Staff or Patient"
              onChange={onChangeRole}
              value={role}
            />
          </div>
          <button className="btn mt-3 color">Register</button>
        </form>
        <div className="text-center fs-6">
          Already Registered ?<Link to="/login"> Sign In</Link>
        </div>
      </div>
    </>
  );
}
