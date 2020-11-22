import React, { useState } from "react";

import {fetchAPI, BASE_URL} from "../api"

const CreateComment = (props) => {
  
  const [commentContent, setCommentContent] = useState("");

  const { contactList, setContactList, commentList, setCommentList, contact } = props;
  const { name, id, comments } = contact;

  const submitComment = (event) => {
    event.preventDefault();
    fetchAPI(`${BASE_URL}/contacts/${id}/comments`, "POST", {content: commentContent})
        .then((data) => {
            const {comment} = data
            setCommentList([...comments, comment])
            // console.log(newComments)
            // setCommentList(newComments)
        })
        .catch( err => console.error(err));
    setCommentContent("")

  };

  return (
    <div className="CreateComment">
      <form id="comment-form"
      onSubmit={submitComment}>
        <input
          type="text"
          placeholder={`Leave a comment about ${name}`}
          style={{ width: "100%" }}
          value={commentContent}
          onChange={(e) => {
              e.preventDefault();
              setCommentContent(e.target.value)}}
        />
        <button>SUBMIT</button>
      </form>
    </div>
  );
};

export default CreateComment;
