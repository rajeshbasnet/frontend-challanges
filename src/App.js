import Home from "./Home";
import { Routes, Route, Link } from "react-router-dom";
import Register from "./register/Register";
import Article from "./article/Article";
import SingleArticle from "./SingleArticle";
import Login from "./register/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/article/:slug" element={<SingleArticle />} />
      </Routes>
    </>
  );
}

export default App;
