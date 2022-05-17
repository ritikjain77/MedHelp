import React from "react";
import img from "../images/bg.jpg";
export default function Home() {
  return (
    <div className="home">
      <div
        className="card container"
        style={{ opacity: "93%", overflow: "auto", height: "90vh" }}
      >
        <div className="card-body">
          <h4 className="text-dark mb-3">Introduction</h4>
          <p>
            In India, healthcare systems are grappling with the consequences of
            existing communicable and noncommunicable means of meeting people's
            needs. The failure of public health to make adequate progress on
            these underlying social determinants of health has been recognised
            as a glaring failure. The lack of availability of resources in one
            place and in an organised manner has led to several patients left
            untreated for their symptoms. Our main aim is to bring together a
            platform that bridges this gap between the healthcare system and the
            people.
          </p>
          <h4 className="text-dark">Key Features</h4>
          <div className="card-group">
            <div className="card">
              <img
                className="card-img-top"
                src={img}
                alt="feature1"
                style={{ height: "21rem" }}
              />
              <div className="card-body">
                <h5 className="card-title">Online Appointments</h5>
                <hr />
                <p className="card-text">
                  Booking appointments through a real-time chat-bot,
                  consultations or setting up a call with the Doctors according
                  to the needs of the patients.
                </p>
              </div>
            </div>
            <div className="card">
              <img
                className="card-img-top"
                src={img}
                alt="feature2"
                style={{ height: "21rem" }}
              />
              <div className="card-body">
                <h5 className="card-title">Blood/Organ Donation</h5>
                <hr />
                <p className="card-text">
                  A section to put in requests and directly contact people for
                  resources(organ donations, blood donations etc).
                </p>
              </div>
            </div>
            <div className="card">
              <img
                className="card-img-top"
                src={img}
                alt="feature3"
                style={{ height: "21rem" }}
              />
              <div className="card-body">
                <h5 className="card-title">Charity Funding</h5>
                <hr />
                <p className="card-text">
                  A section to collect donations for the cause to help less
                  privileged people access better healthcare facilities.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer text-center">
          <b>@2022 Copyright, We The Jugglers</b>
        </div>
      </div>
    </div>
  );
}
