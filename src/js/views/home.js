import React from "react";
import "../../styles/home.css";
import Character from "../component/character.jsx";

const Home = () => {
  return (
    <>
      <div className="container">
        <h1>Characters</h1>
        <div className="card-group">
          <Character />
        </div>
      </div>
    </>
  );
};
export default Home;
