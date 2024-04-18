import { useState } from "react";

function CommentsList() {
  const [comments, setComments] = useState([
    { id: 1, text: "This is the first comment" },
    { id: 2, text: "This is the second comment" },
    { id: 3, text: "This is the third comment" },
  ]);

  const handleDeleteComment = (id) => {
    const updatedComments = comments.filter((comment) => comment.id !== id);
    setComments(updatedComments);
  };

  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.text}</p>
          <button onClick={() => handleDeleteComment(comment.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default CommentsList;
