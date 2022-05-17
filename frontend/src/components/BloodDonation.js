import React, { useState } from "react";
import "../styles/Donation.css";

function DonationForm() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [gender, setGender] = useState(null);
  const [contact_no, setContactNo] = useState(null);
  const [age, setAge] = useState(null);
  const [address, setAddress] = useState(null);
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);
  const [pincode, setPincode] = useState(null);
  const [bloodgroup, setBloodGroup] = useState(null);
  const [weight, setWeight] = useState(null);
  const [donated_before, setDonatedBefore] = useState(null);
  const [lastdonationdate, setLastDonationDate] = useState(null);
  const [anydisease, setAnydisease] = useState(null);
  const [surgeryortransformation, setSurgeryorTransformation] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
    if (id === "gender") {
      setGender(value);
    }
    if (id === "contact_no") {
      setContactNo(value);
    }
    if (id === "age") {
      setAge(value);
    }
    if (id === "address") {
      setAddress(value);
    }
    if (id === "city") {
      setCity(value);
    }
    if (id === "state") {
      setState(value);
    }
    if (id === "pincode") {
      setPincode(value);
    }
    if (id === "bloodgroup") {
      setBloodGroup(value);
    }
    if (id === "weight") {
      setWeight(value);
    }
    if (id === "donated_before") {
      setDonatedBefore(value);
    }
    if (id === "lastdonationdate") {
      setLastDonationDate(value);
    }
    if (id === "anydisease") {
      setAnydisease(value);
    }
    if (id === "surgeryortransformation") {
      setSurgeryorTransformation(value);
    }
  };

  const handleSubmit = () => {
    console.log(
      firstName,
      lastName,
      gender,
      contact_no,
      age,
      address,
      city,
      state,
      pincode,
      bloodgroup,
      weight,
      donated_before,
      lastdonationdate,
      anydisease,
      surgeryortransformation
    );
  };

  return (
    <div className="form" style={{ overflow: "auto", height: "80vh" }}>
      <div className="form-body">
        <div className="firstname">
          <label className="form__label" for="firstName">
            First Name{" "}
          </label>
          <input
            className="form__input"
            type="text"
            id="firstName"
            placeholder="First Name"
          />
        </div>
        <div className="lastname">
          <label className="form__label" for="lastName">
            Last Name{" "}
          </label>
          <input
            type="text"
            name=""
            id="lastName"
            className="form__input"
            placeholder="LastName"
          />
        </div>
        <div className="gender">
          <div className="label">
            <label className="form__label" for="gender">
              Gender
            </label>
          </div>

          <div className="selector">
            <input type="radio" name="gender" value="male" /> Male
            <input type="radio" name="gender" value="female" /> Female
          </div>
        </div>
        <div className="Contact-No">
          <label className="form__label" for="contact no">
            Contact No{" "}
          </label>
          <input
            className="form__input"
            type="tel"
            id="contact_no"
            placeholder="Contact No"
          />
        </div>
        <div className="age">
          <label className="form__label" for="age">
            Age{" "}
          </label>
          <input
            className="form__input"
            type="number"
            id="age"
            placeholder="Age"
          />
        </div>
        <div className="address">
          <label className="form__label" for="address">
            Address{" "}
          </label>
          <input
            className="form__input"
            type="text"
            id="address"
            placeholder="Address"
          />
        </div>
        <div className="city">
          <label className="form__label" for="city">
            City{" "}
          </label>
          <input
            className="form__input"
            type="text"
            id="city"
            placeholder="City"
          />
        </div>
        <div className="state">
          <label className="form__label" for="state">
            State{" "}
          </label>
          <input
            className="form__input"
            type="text"
            id="state"
            placeholder="State"
          />
        </div>
        <div className="pincode">
          <label className="form__label" for="pincode">
            Pincode{" "}
          </label>
          <input
            className="form__input"
            type="number"
            id="pincode"
            placeholder="Pincode"
          />
        </div>
        <div className="BloodGroup">
          <label className="form__label" for="bloodgroup">
            BloodGroup{" "}
          </label>
          <br></br>
          <input type="radio" name="bloodgroup" value="bloodgroup" /> O+
          <input type="radio" name="bloodgroup" value="bloodgroup" /> O-
          <input type="radio" name="bloodgroup" value="bloodgroup" /> A+
          <input type="radio" name="bloodgroup" value="bloodgroup" /> A-
          <br />
          <input type="radio" name="bloodgroup" value="bloodgroup" /> B+
          <input type="radio" name="bloodgroup" value="bloodgroup" /> B-
          <input type="radio" name="bloodgroup" value="bloodgroup" /> AB+
          <input type="radio" name="bloodgroup" value="bloodgroup" /> AB-
        </div>
        <div className="Weight">
          <label className="form__label" for="weight">
            Weight (in kg)
          </label>
          <input
            className="form__input"
            type="number"
            id="weight"
            placeholder="Weight"
          />
        </div>
        <div className="donated_before">
          <label className="form__label" for="donated_before">
            Have you donated Before ?
          </label>
          <input
            className="form__input"
            name="donated_before"
            type="radio"
            placeholder="DonatedBefore"
          />{" "}
          Yes
          <input
            className="form__input"
            type="radio"
            name="donated_before"
            placeholder="DonatedBefore"
          />{" "}
          No
        </div>
        <div className="lastdonationdate">
          <label className="form__label" for="lastdonationdate">
            Last Donation Date{" "}
          </label>
          <input
            className="form__input"
            type="date"
            id="lastdonationdate"
            placeholder="LastDonationDate"
          />
        </div>
        <div className="anydisease">
          <label className="form__label" for="anydisease">
            Do you suffer from or have sufferes from any of the following
            Disease ?
          </label>
          <div>
            <input type="checkbox" name="anydisease" value="disease" /> Allergic
            Disease
          </div>
          <div>
            <input type="checkbox" name="anydisease" value="disease" /> Heart
            Disease
          </div>
          <div>
            <input type="checkbox" name="anydisease" value="disease" /> Cancer
          </div>
          <div>
            <input type="checkbox" name="anydisease" value="disease" />{" "}
            Tuberculosis
          </div>
          <div>
            <input type="checkbox" name="anydisease" value="disease" /> Lung
            Disease
          </div>
          <div>
            <input type="checkbox" name="anydisease" value="disease" /> Kidney
            Disease
          </div>
          <div>
            <input type="checkbox" name="anydisease" value="disease" /> Diabetes
          </div>
          <div>
            <input type="checkbox" name="anydisease" value="disease" /> Malaria
          </div>
        </div>
        <div className="surgeryortransformation">
          <label className="form__label" for="surgeryortransformation">
            Had any Surgery Or Blood TransFusion before?{" "}
          </label>
          <br></br>
          <input
            type="radio"
            name="surgery"
            value="surgeryorbloodtransfusion"
          />{" "}
          Major
          <input
            type="radio"
            name="surgery"
            value="surgeryorbloodtransfusion"
          />{" "}
          Minor
          <input
            type="radio"
            name="surgery"
            value="surgeryorbloodtransfusion"
          />{" "}
          Blood Transfusion
        </div>
      </div>
      <div className="footer">
        <button
          type="button"
          className="btn-primary"
          onClick={handleSubmit}
          style={{ borderRadius: "20px", fontSize: "18px" }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
export default DonationForm;
