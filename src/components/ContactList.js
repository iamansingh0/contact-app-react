import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      ></ContactCard>
    );
  });
  return (
    <div>
      <h2 style={{ marginTop: "5vh" }}>Contact List</h2>
      <div className="ui celled list">{renderContactList}
      </div>
    </div>
  );
};

export default ContactList;
