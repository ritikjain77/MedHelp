import React, { useState } from "react";
import AppointmentForm from "./AppointmentForm";
import NewCard from "./NewCard";
export default function Appoint() {
  const [olddata, SetnewData] = useState([]);
  const addData = (AppointData) => {
    SetnewData([...olddata, AppointData]);
  };
  return (
    <div className="conatiner">
      <div className="cardo">
        <div className="appointment">
          <AppointmentForm addData={addData} />
          {olddata.map((data) => {
            return <NewCard items={data} />;
          })}
        </div>
        <div className="appointimg">
          <div className="imgholder"></div>
        </div>
      </div>
    </div>
  );
}
