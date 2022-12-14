import React from "react";
import user from '../images/user.jpg';
import { useLocation, Link } from 'react-router-dom';

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
        <div style={{height: "10vh"}}>
            <Link to="/">
            <button className="ui button blue center floated segment" style={{marginLeft: "42.5%", marginRight: "42.5%", width: "15%"}}>Back to Contact List</button>
            </Link>
        </div>
    </div>
  );
};

export default ContactDetail;
