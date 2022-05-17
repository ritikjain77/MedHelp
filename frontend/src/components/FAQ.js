import React from "react";
import "../styles/App.css";
export default function FAQ() {
  return (
    <div className="container">
      <div className="card" style={{ overflow: "auto", height: "90vh" }}>
        <div className="card-header bluee">
          <h4>Frequently Asked Questions</h4>
        </div>
        <div className="card-body">
          <div id="accordion">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link accord"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Who can be a donor?
                  </button>
                </h5>
              </div>

              <div
                id="collapseOne"
                className="collapse show active"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div className="card-body">
                  People of all ages and medical histories should consider
                  themselves potential donors. Your medical condition at the
                  time of death will determine what organs and tissues can be
                  donated.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingTwo">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link collapsed accord"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    What can be donated?
                  </button>
                </h5>
              </div>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordion"
              >
                <div className="card-body">
                  The list of organs and tissues that can be successfully
                  transplanted continues to grow. So does your ability to save
                  and heal lives as a deceased organ, eye and tissue donor. One
                  donor can save up to eight lives, restore sight to two people
                  through cornea donation, and heal more than 75 lives through
                  tissue donation.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingThree">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link collapsed accord"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Is there a cost to be an organ, eye and tissue donor?
                  </button>
                </h5>
              </div>
              <div
                id="collapseThree"
                className="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordion"
              >
                <div className="card-body">
                  There is no cost to the donor’s family or estate for donation.
                  The donor family pays only for medical expenses before death
                  and costs associated with funeral arrangements.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingThree">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link collapsed accord"
                    data-toggle="collapse"
                    data-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Does registering as a donor change my patient care?
                  </button>
                </h5>
              </div>
              <div
                id="collapseFour"
                className="collapse"
                aria-labelledby="headingFour"
                data-parent="#accordion"
              >
                <div className="card-body">
                  Our life always comes first. Doctors work hard to save every
                  patient’s life, but sometimes there is a complete and
                  irreversible loss of brain function. The patient is declared
                  clinically and legally dead. Only then is donation an option.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingFive">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link collapsed accord"
                    data-toggle="collapse"
                    data-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    How do I use the online booking service?
                  </button>
                </h5>
              </div>
              <div
                id="collapseFive"
                className="collapse"
                aria-labelledby="headingFive"
                data-parent="#accordion"
              >
                <div className="card-body">
                  You search for the doctor whose appointment is required. We
                  ask for a user id to be created, we require a patient to login
                  for getting the appointments booked through MedHelp.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingSiz">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link collapsed accord"
                    data-toggle="collapse"
                    data-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    Are transplant recipients at higher risk for COVID-19?
                  </button>
                </h5>
              </div>
              <div
                id="collapseSix"
                className="collapse"
                aria-labelledby="headingSix"
                data-parent="#accordion"
              >
                <div className="card-body">
                  The American Society of Transplantation has published a
                  Transplant Community FAQ resource providing detailed
                  information for transplant recipients regarding COVID-19. The
                  FAQ document is regularly updated with current information.
                  Please contact your transplant program care team for further
                  questions about your health needs.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingSevem">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link collapsed accord"
                    data-toggle="collapse"
                    data-target="#collapseSeven"
                    aria-expanded="false"
                    aria-controls="collapseSeven"
                  >
                    How can I view the time slots for the availability of
                    Doctor?
                  </button>
                </h5>
              </div>
              <div
                id="collapseSeven"
                className="collapse"
                aria-labelledby="headingSeven"
                data-parent="#accordion"
              >
                <div className="card-body">
                  Go to Book Appointment's page, select a date and then you will
                  see the time slots on which the said doctor is available for
                  consultancy.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
