import React from "react";
import { fetchAPI, BASE_URL } from "../api";

const ContactList = (props) => {
  const { contactList, deleteFromContactList } = props;

  const handleDelete = (contact) => {
    fetchAPI(`${BASE_URL}/contacts/${contact.id}`, "DELETE")
      .then(console.log)
      .catch(console.error);
  };

  return (
    <div id="ContactList">
      {contactList.map((contact, idx) => {
        const { id, name, address, phoneNumber, email, contactType } = contact;

        return (
          <div
            className="card"
            key={idx}
            style={{
              border: "1px solid black",
              marginTop: "3rem",
            }}
          >
            <h2>{name}</h2>
            <p>{address}</p>
            <p>{phoneNumber}</p>
            <p>{email}</p>
            <p>{contactType}</p>
            <p>
              <button>EDIT</button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleDelete(contact);
                  deleteFromContactList(contact);
                }}
              >
                DELETE
              </button>
              <button>COMMENT</button>
              {/* Links to <CommentList />? */}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ContactList;