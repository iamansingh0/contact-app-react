import React from "react";
import user from '../images/user.jpg';
import { useLocation } from 'react-router-dom';

const ContactDetail = (props) => {
  const location = useLocation();
  const { name, email } = location.state.contact
  return (
    <div className="main">
        <div className="ui card centered">
            <div className="image" style={{backgroundColor: "red"}}>
                <img src={user} alt="user" />
            </div>
            <div className="content">
                <div className="header">{name}</div>
                <div className="description">{email}</div>
            </div>
        </div>
    </div>
  );
};

export default ContactDetail;
