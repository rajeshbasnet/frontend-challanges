import React, { useEffect, useState } from "react";
import "./feeds.css";
import Article from "../article/Article";

function GlobalFeeds() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setArticles(data.articles);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="global__feed__section">
      <div className="main-content">
        <p className="global__feed">Global Feed</p>

        {articles.map((article) => {
          return <Article key={article.slug} {...article} />;
        })}
      </div>

      <div className="popular__tags">
        <p>Popular Tags</p>
      </div>
    </section>
  );
}

export default GlobalFeeds;
