import React, { useState } from "react";
import logo from "../images/mhlogo.png";
import { Link } from "react-router-dom";
import { validateEmail } from "../helpers/validation";
import axios from "axios";

export default function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const onChangeUser = (e) => {
    //  spread operator ...
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    // console.log(user.email);
    if (!validateEmail(user.email)) alert("Enter the valid email");
    else if (user.password === "") alert("Password cannot be empty");
    else {
      axios
        .post("/users/login", user)
        .then((res) => {
          alert(res.data.message);
          // console.log(res.data);
          localStorage.setItem("my_token", res.data.token);
        })
        .catch((err) => {
          alert(err.message);
          console.log(err);
        })
        .finally(() => {
          setUser({ email: "", password: "" });
          window.location.href = "/home";
        });
    }
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
            <span className="fa fa-envelope"></span>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              autocomplete="off"
              onChange={onChangeUser}
              value={user.email}
            />
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="fa fa-key"></span>
            <input
              type="password"
              name="password"
              id="pwd"
              placeholder="Password"
              autocomplete="off"
              onChange={onChangeUser}
              value={user.password}
              required
            />
          </div>
          <Link to="/register" style={{ float: "right" }}>
            Forgot Password?
          </Link>
          <button className="btn color mt-3">Login</button>
        </form>
        <div className="text-center fs-6">
          Don't have an account? <Link to="/register">Register</Link>
        </div>
      </div>
    </>
  );
}
