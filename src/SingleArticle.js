import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ArticleComments from "./comments/Comments";
import Header from "./header/Header";
import "./singleArticle.css";

function SingleArticle() {
  let params = useParams();

  const [article, setArticle] = useState({});

  async function getData() {
    try {
      const res = await fetch("http://localhost:3000/data.json");

      console.log(res);

      const data = await res.json();

      if (data) {
        const fetchData = data.articles.find((item) => {
          return item.slug === params.slug;
        });

        if (fetchData) {
          setTimeout(() => {
            setArticle(fetchData);
          }, 1000);
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  if (Object.keys(article).length !== 0) {
    return (
      <>
        <Header />
        <section className="single__article__section">
          <div className="single__article__container">
            <div className="article__header">
              <div>
                <h1>{article.title}</h1>
                <div className="user__info">
                  <img src={article.author.image} alt="" />
                  <div>
                    <p>{article.author.username}</p>
                    <p>{article.createdAt}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="article__info">
              <p>{article.body}</p>
              <div>
                {article.tagList.map((item, index) => {
                  return <p key={index}>{item}</p>;
                })}
              </div>
            </div>
          </div>

          <p className="login__action__para">
            Sign in or <Link to={"/register"}>Sign up</Link> to add comments on
            this article.
          </p>

          {article.comments.map((item) => {
            return <ArticleComments key={item.id} {...item} />;
          })}
        </section>
      </>
    );
  }

  return (
    <div className="spinner">
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    </div>
  );
}

export default SingleArticle;
