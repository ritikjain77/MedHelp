import React from "react";
import "../styles/Card.css";

const NewCard = (props) => {
  console.log("props", props);
  return (
    <>
      <div className="appoint">
        <div>{props.items.Name}</div>
        <div>{props.items.date.toDateString()}</div>
        <div>{props.items.time}</div>
      </div>
    </>
  );
};
export default NewCard;
