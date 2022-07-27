import React, { useState, useEffect } from "react";
import axios from "axios";
export default function BookAppointment() {
  let doctorData = [{
    'name':'Dr. Amit Agrawal',
    'Specialization':'Gastro Surgeon',
    'Degree':'MBBS MD',
    'Mob no.':9988776655,
  },
  {
    'name':'Dr. Bharat Shantanu',
    'Specialization':'Psychiatrist',
    'Degree':'MBBS MD',
    'Mob no.':9456789055,
  },
  {
    'name':'Dr. Bandana Gupta',
    'Specialization':'Surgeon',
    'Degree':'MBBS MD',
    'Mob no.':9588776655,
  },
  {
    'name':'Dr. Ashok kumar dubry',
    'Specialization':'Physician',
    'Degree':'MBBS MD',
    'Mob no.':8988776655,
  }]
  const [userlist, setUserlist] = useState([]);
  useEffect(() => {
    getusers();
  }, []);
  const getusers = () => {
    axios
      .get("/users/getInfo")
      .then((res) => {
        console.log(res.data);
        setUserlist(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleClick = () => {
    window.location.href = "/appointment";
  };
  return (
    <>
      <div className="card container">
        <div className="card-body table-responsive">
          {doctorData.length === 0 ? (
            <p>Sorry, Doctors are currently unavailable !</p>
          ) : (
            <div className="table-wrapper">
              <div className="table-title">
                <div className="text-center">
                  <h4>List of Doctors</h4>
                </div>
              </div>
              <div style={{ overflow: "auto", height: "400px" }}>
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">S.No</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Role</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody className="getbooks">
                    {doctorData.map((doc, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{doc.name}</td>
                        <td>{doc.Specialization}</td>
                        <td>{doc.Degree}</td>
                        <td>
                          <button
                            type="button"
                            onClick={handleClick}
                            className="btn btn-outline-primary btn-sm"
                          >
                            Consult
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
