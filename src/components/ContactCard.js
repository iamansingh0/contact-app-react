import React from "react";
import user from "../images/user.png";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <img
        className="ui avatar image"
        src={user}
        alt="user"
        style={{ marginTop: "2vh" }}
      />
      <div
        className="content"
        style={{ paddingTop: "2vh", paddingBottom: "2vh" }}
      >
        <Link to={`/contact/${id}`} state={{ contact: props.contact }}>
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
        <i
          className="trash alternate outline icon right floated"
          style={{ color: "red", paddingTop: "3vh", width: "3vw" }}
          onClick={() => {
            props.clickHandler(id);
          }}
        ></i>
    </div>
  );
};

export default ContactCard;
