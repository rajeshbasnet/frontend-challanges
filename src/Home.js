import React from "react";
import Banner from "./banner/Banner";
import GlobalFeeds from "./feeds/GlobalFeeds";
import Header from "./header/Header";

function Home() {
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <GlobalFeeds />
    </React.Fragment>
  );
}

export default Home;
