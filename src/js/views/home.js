import React from "react";
import "../../styles/home.css";
import Character from "../component/character.jsx";
import Planet from "../component/planet.jsx";

const Home = () => {
  return (
    <>
      <div className="container-fluid bg-black"style={{ marginTop: "75px" }} >
        <div className="card-group">
          <Character />
        </div>
      </div>

      <div className="container-fluid mt-5">
        
        <div className="card-group mt-3">
          <Planet />
        </div>
      </div>
    </>
  );
};

export default Home;
