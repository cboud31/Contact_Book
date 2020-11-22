import React, {useState} from "react";
import { fetchAPI, BASE_URL } from "../api";

const CommentList = (props) => {
  const [commentList, setCommentList] = useState([])
  const [content, setContent] = useState("")

  const { contact, addComment } = props;
  const { name, id, comments } = contact;
/*
  const addCommentToContact = (event) => {
      event.preventDefault();
      console.log("Comments (12)", id)
      fetchAPI(`${BASE_URL}/contacts/${id}/comments`, "POST", {content})
        .then( (data) => {
            console.log('Testing',data) 
            addComment(contact, data.comment)
        })
        .catch( (err) => console.error(err) )      
  }
*/
  const deleteComment = async (comment) => {
    fetchAPI(`${BASE_URL}/comments/${comment.id}`, "DELETE")
    .then()
    .catch((err) => console.error(err))
  };

  return (
    <div className="CommentList">
      {comments.length === undefined
      ? null 
      : comments.map((comment, idx) => {
        return <h5 key={idx}>{comment.content}</h5>
      })}
  </div>

  )

};
/**
 *  // map and render a contact's comments array
 *  - will pass in a contact prop
 */
export default CommentList;

// onClick={(event) => {
//     event.preventDefault()
//     fetchAPI(`${BASE_URL}/contacts/${id}/comments`, "POST", {
//         "content": event.target.value
//     }).then(console.log).catch((err) => console.error(err))
//   }


 

/*
    <div className="CommentList">
    {comments.length === 0 
    ? `${name} has no comments.`
    : comments.map( (comment, idx) => {
      const {content} = comment;
      
      return(
        <div className="content" key={idx}>
          <h5>{content}</h5>
          <button
          onClick={(e) => {e.preventDefault();}}>DELETE</button>
        </div>
      )

    })}
  </div>
  */

/*
 <h4>Leave a comment about {name}:</h4>
 <form
   className="createComment"
   // onSubmit={addCommentToContact}
 >
   <input type="text" placeholder="Leave a comment..."
   value={content}
   onChange={(event) => setContent(event.target.value)} />
   <button>
     {fetchAPI for edit post, re-render comments array}
     SUBMIT
   </button>
 </form>
 {comments.length === 0
   ? null
   : comments.map((comment, idx) => {
       return <h5 key={idx}>{comment.content}</h5>;
     })}
    */