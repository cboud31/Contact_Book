import React from "react";
import { fetchAPI, BASE_URL } from "../api";
import { CommentList } from "../components";
import CreateComment from "./CreateComment";

const ContactList = (props) => {
  const { contactList, setContactList, deleteFromContactList, editContact, setEditContact } = props;

  const handleDelete = async (contact) => {
    fetchAPI(`${BASE_URL}/contacts/${contact.id}`, "DELETE")
      .then(console.log)
      .catch(console.error);
  };
// this is very useful, but may need to move to its own component.
  const addComment = (contact, comment) => {
    const newContacts = [...contactList]
    console.log("newContact", newContacts)
    console.log("Contact", contact)
    const index = newContacts.indexOf(contact)
    console.log("Line 19",index)
    newContacts[index].comments.push(comment)

  }

  return (
    <div id="ContactList">
      {contactList.map((contact, idx) => {
        const {
          name,
          address,
          phoneNumber,
          email,
          contactType,
          comments,
        } = contact;
        // console.log(comments);

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
            <p>{contactType}</p>
            <p>{address}</p>
            <p>{phoneNumber}</p>
            <p>{email}</p>
            
           
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleDelete(contact);
                  deleteFromContactList(contact);
                }}
              >
                DELETE
              </button>
              <button onClick={() => setEditContact(contact)}>EDIT</button>
              
            
              <CreateComment 
                contact={contact}/>
              <CommentList
                contact={ contact }
                contactList={contactList}
                setContactList={setContactList}
                addComment={addComment}
                addCommentToContact={(newComment) => {
                    // you have access to: contact, newComment, contactList,
                }}
                />
           
          </div>
        );
      })}
    </div>
  );
};

export default ContactList;
