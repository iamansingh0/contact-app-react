import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import api from '../api/contacts'
import uuid from "react-uuid";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  // retriveContacts
  // const retrieveContacts = async () => {
  //   const response = await api.get("/contacts")
  //   return response.data;
  // }
  
  const addContactHnadler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    if(window.confirm('You want to delete ?')) {
      const newContactList = contacts.filter((contact) => {
        return contact.id !== id;
      });
      setContacts(newContactList);
    }
    else return;
  };

  useEffect(() => {
    console.log("Use effect ran");
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <ContactList
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            }
          />
          <Route
            path="/add"
            element={<AddContact addContactHnadler={addContactHnadler} />}
          />
          <Route 
            path="/contact/:id" 
            exact 
            element={<ContactDetail />} 
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
