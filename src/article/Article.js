import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

function Article(props) {
  console.log(props);
  const {
    slug,
    author: { username, image },
    title,
    description,
    createdAt,
    tagList,
    favoritesCount,
  } = props;

  return (
    <div className="global__feed__container">
      <div className="user__info__container">
        <div className="user__info">
          <img src={image} alt="" />
          <div>
            <p>{username}</p>
            <p>{createdAt}</p>
          </div>
        </div>

        <div className="user__likes">
          <p>
            <AiFillHeart />
          </p>
          <p>{favoritesCount}</p>
        </div>
      </div>

      <div className="feed__info__header">
        <h3>{title}</h3>
        <br />
        <p>{description}</p>
      </div>

      <div className="more__action">
        <Link to={`/article/${slug}`}>Read more...</Link>
        <div>
          {tagList.map((list) => {
            return <p key={list}>{list}</p>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Article;
