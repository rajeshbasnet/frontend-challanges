import React from "react";
import { Link } from "react-router-dom";
import "./comments.css";

function ArticleComments(props) {
  const {
    author: { username, image },
    body,
    updatedAt,
  } = props;

  return (
    <div className="comments__container">
      <div className="comment__info">
        <p className="comment__header">{body}</p>
        <div>
          <img src={image} alt="" />
          <p>{username}</p>
          <p>{updatedAt}</p>
        </div>
      </div>
    </div>
  );
}

export default ArticleComments;
