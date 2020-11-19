import React, { useState, useEffect } from "react";

import { fetchAPI } from "../api";
import { ContactForm, ContactList } from "../components";

const App = () => {
  const URL = `https://univ-contact-book.herokuapp.com/api`;

  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    fetchAPI(`${URL}/contacts`)
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
  setContactList([...contactList, contact])
  }

  const deleteFromContactList = (contact) => {
    const newContactList = contactList.filter( (c) => {
      return (c !== contact)
    })
    setContactList(newContactList)
  }
  

  return (
    <div id="App">
      <ContactForm addToContactList={addToContactList}
      contactList={contactList}
      setContactList={setContactList} />
      <ContactList contactList={contactList}
      setContactList={setContactList} />
    </div>
  );
};

export default App;
