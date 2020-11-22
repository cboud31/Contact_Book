import React, { useState } from "react";

import { fetchAPI, BASE_URL } from "../api";

const CreateContact = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [contactType, setContactType] = useState("personal");

  const { contactList, setContactList } = props;

  const sendData = {
    name: name,
    address: address,
    phoneNumber: phoneNumber,
    email: email,
    contactType: contactType,
  };

  const addToContactList = (contact) => {
    const contactListClone = [...contactList, contact];
    setContactList(contactListClone);
  };

  const handleName = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchAPI(`${BASE_URL}/contacts`, "POST", sendData)
      .then((res) => {
        const { contact } = res;
        console.log(contact);
        addToContactList(contact);
        //   reset form --> setState("");
        setName("");
        setAddress("");
        setEmail("");
        setPhoneNumber("");
        setContactType("personal");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div id="ContactForm">
      
      <form
        className="form"
        style={{ border: "1px solid black" }}
        onSubmit={handleSubmit}
      ><h2>Create Contact:</h2>
        <p>
          Name:
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleName}
          />
        </p>
        <p>
          Address:
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </p>
        <p>
          Phone:
          <input
            type="text"
            placeholder="(123) 456-7890"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </p>
        <p>
          Email:
          <input
            type="text"
            placeholder="Email"
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
        <button id="formSubmit">SUBMIT</button>
      </form>
    </div>
  );
};

export default CreateContact;

/*

endpoint route + request Params: (`${URL}/contacts`, "POST", {
    name: "name",
    address: "address",
    phoneNumber: "(123) 456-7890",
    email: "email",
    contactType: "option"
})

*/