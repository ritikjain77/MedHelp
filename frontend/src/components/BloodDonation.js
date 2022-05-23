import React from "react";
import "../styles/Donation.css";

function DonationForm() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header bluee">
          <h4>Blood Donation Form</h4>
        </div>
        <div className="card-body">
          <form
            className="row g-3 p-3 mt-3"
            autoComplete="off"
            style={{ overflow: "auto", height: "70vh" }}
          >
            <div className="col-md-6 mt-3">
              <label for="inputfirstname" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputfirstname"
                placeholder="First Name"
              />
            </div>
            <div className="col-md-6 mt-3">
              <label for="inputlastname" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputlastname"
                placeholder="Last Name"
              />
            </div>
            <div className="col-md-6 mt-3">
              <label for="inputcontact" className="form-label">
                Contact Number
              </label>
              <input
                type="text"
                className="form-control"
                id="inputcontact"
                pattern="+yy-xxxx-xxx-xxx"
                placeholder="+91-6387-168-893"
              />
            </div>
            <div className="col-md-3 mt-3">
              <label className="visually-hidden" for="autoSizingSelect">
                Gender
              </label>
              <select className="form-control">
                <option>Male</option>
                <option>Female</option>
                <option>Rather Not Say</option>
              </select>
            </div>
            <div className="col-md-3 mt-3">
              <label for="inputage" className="form-label">
                Age
              </label>
              <input
                type="text"
                className="form-control"
                id="inputage"
                placeholder="Enter Age"
              />
            </div>
            <div className="col-md-6 mt-3">
              <label for="inputAddress" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="1234 Main St."
              />
            </div>
            <div className="col-md-2 mt-3">
              <label for="inputcity" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="inputcity"
                placeholder="Mumbai"
              />
            </div>
            <div className="col-md-2 mt-3">
              <label for="inputstate" className="form-label">
                State
              </label>
              <input
                type="text"
                className="form-control"
                id="inputstate"
                placeholder="Maharashtra"
              />
            </div>
            <div className="col-md-2 mt-3">
              <label for="inputzip" className="form-label">
                Zip
              </label>
              <input
                type="text"
                className="form-control"
                id="inputzip"
                placeholder="226021"
              />
            </div>
            <div className="col-md-3 mt-3">
              <label for="inputweight" className="form-label">
                Weight
              </label>
              <input
                type="text"
                className="form-control"
                id="inputweight"
                placeholder="In Kg"
              />
            </div>
            <div className="col-md-3 mt-3">
              <label className="visually-hidden" for="autoSizingSelect">
                Blood Group
              </label>
              <select className="form-control">
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>O+</option>
                <option>O-</option>
                <option>AB+</option>
                <option>AB-</option>
              </select>
            </div>
            <div className="col-md-3 mt-3">
              <label for="inputdonate" className="form-label">
                Have you donated before?
              </label>
              <select className="form-control">
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div className="col-md-3 mt-3">
              <label for="inputdateofdonate" className="form-label">
                Date of last donation
              </label>
              <input
                type="date"
                className="form-control"
                id="inputdateofdonate"
                placeholder="In Kg"
              />
            </div>
            <div className="col-md-6 mt-3">
              <label for="inputdiseaset" className="form-label">
                Do you suffer from any of the following Disease ?
              </label>
              <select className="form-control">
                <option>Heart</option>
                <option>Lungs</option>
                <option>Tuberculosis</option>
                <option>Liver</option>
                <option>Kidney</option>
                <option>Diabetes</option>
              </select>
            </div>
            <div className="col-md-6 mt-3">
              <label for="inputsurgery" className="form-label">
                Had any Surgery Or Blood TransFusion before?
              </label>
              <select className="form-control">
                <option>Major</option>
                <option>Minor</option>
                <option>Blood Transfusion</option>
              </select>
            </div>
            <div className="col-12 mt-3" style={{ textAlign: "center" }}>
              <button type="button" className="btn btnhover">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default DonationForm;
