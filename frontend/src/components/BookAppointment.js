import React, { useState, useEffect } from "react";
import axios from "axios";
export default function BookAppointment() {
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
          {userlist.length === 0 ? (
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
                    {userlist.map((singleuser, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{singleuser.Username}</td>
                        <td>{singleuser.Email}</td>
                        <td>{singleuser.Role}</td>
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
