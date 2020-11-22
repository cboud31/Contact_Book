import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import { fetchAPI, BASE_URL } from "../api";
import { CreateContact, ContactList, CommentList } from "../components";
import EditContact from "./EditContact";

const App = () => {
  const [contactList, setContactList] = useState([]);
  const [editContact, setEditContact] = useState(null);

  useEffect(() => {
    fetchAPI(`${BASE_URL}/contacts`)
      .then(function (data) {
        const { contacts } = data;
        setContactList(contacts);
        console.log("my contacts", contacts);
      })
      .catch(function (error) {
        console.error("error fetching contacts", error);
      });
  }, []);

  const addToContactList = (contact) => {
    setContactList([...contactList, contact]);
  };

  const deleteFromContactList = (contact) => {
    const newContactList = contactList.filter((c) => {
      return c !== contact;
    });
    setContactList(newContactList);
  };

  const addCommentToContact = (id, content) =>{
    
  }

  return (
    <Router>
    <div id="App">
      {editContact ? (
        <EditContact />
      ) : (
        // <Route path="/createcontact">
        <CreateContact
          addToContactList={addToContactList}
          contactList={contactList}
          setContactList={setContactList}
        />
        /* </Route> */
      )}
      <ContactList
        contactList={contactList}
        // setContactList={ setContactList }
        // setEditContact={setEditContact}
        // setContactList={setContactList}
        // deleteFromContactList={deleteFromContactList}
      />
    </div>
    </Router>
  );
};

export default App;
