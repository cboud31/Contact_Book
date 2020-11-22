import React from "react";

import { CreateContact, ContactList } from "../components";

const EditContact = (props) => {
  const {
    editContact,
    setEditContact,
    name,
    setName,
    address,
    setAddress,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    contactType,
    setContactType,
  } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div id="EditContact">
      {/* <h1>MAKE A FORM FOR EDIT CONTACT, PASS IN editContact as a prop</h1> */}
      <form
        className="form"
        style={{ border: "1px solid black" }}
        onSubmit={handleSubmit}
      >
        <h2>Update {name}:</h2>
        <p>
          Name:
          <input
            type="text"
            placeholder="Name"
            style={{ width: "100%" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </p>
        <p>
          Address:
          <input
            type="text"
            placeholder="Address"
            style={{ width: "100%" }}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </p>
        <p>
          Phone:
          <input
            type="text"
            placeholder="(123) 456-7890"
            style={{ width: "100%" }}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </p>
        <p>
          Email:
          <input
            type="text"
            placeholder="Email"
            style={{ width: "100%" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <p>
          Contact:
          <select
            className="contact-type"
            value={contactType}
            onChange={(e) => setContactType(e.target.value)}
          >
            <option value="personal">Personal</option>
            <option value="work">Work</option>
            <option value="other">Other</option>
          </select>
        </p>
        {/* make a conditional that toggles btw button & p/w requirements? */}
        <button id="formSubmit">UPDATE</button>

        
          <button
            style={{ width: "100%" }}
            onClick={(event) => {
              event.preventDefault();
              setEditContact(false)}}
          >
            CANCEL
          </button>
        
      </form>
    </div>
  );
};

export default EditContact;
