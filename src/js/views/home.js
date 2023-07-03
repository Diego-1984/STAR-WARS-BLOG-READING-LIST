import React from "react";
import "../../styles/home.css";
import Character from "../component/character.jsx";
import Planet from "../component/planet.jsx";

const Home = () => {
  return (
    <>
      <div className="container-fluid vw-100">
        <h1>Characters</h1>
        <div className="card-group mt-3">
          <Character />
        </div>
      </div>

      <div className="container-fluid mt-5">
        <h1>Planets</h1>
        <div className="card-group mt-3">
          <Planet />
        </div>
      </div>
    </>
  );
};
export default Home;
