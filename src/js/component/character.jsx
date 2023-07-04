import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

const Character = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="d-flex flex-wrap mb-3">
      {store.character.map((people, index) => (
        <div className="col col-md-3 mt-5 wrapScroll" key={index}>
          <div
            className="card mx-3 bg-transparent border-dark"
            style={{ minWidth: "250px", maxWidth: "600px" }}
          >
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`}
              className="card-img-top"
              style={{ height: "400px", objectFit: "cover" }}
              alt={`Character ${people.name}`}
            />
            <div className="card-body">
              <h5
                className="card-title"
                style={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis"
                }}
              >
                {people.name}
              </h5>
              <h6>Gender: {store.characterDetails.gender}</h6>
              <h6>Hair color: {store.characterDetails.hair_color}</h6>
              <h6>Eye color: {store.characterDetails.eye_color}</h6>

              <div className="mt-3 justify-content-between d-flex">
                <Link
                  to={`/people/${people.uid}`}
                  className="btn btn-transparent border-dark"
                >
                  Learn more!
                </Link>
                <button
                  onClick={() => actions.setFavorites(people.name)}
                  className="color-danger border-danger bg-transparent ms-5"
                >
                  <i className="fa-regular fa-heart border-danger text-color-danger text-danger"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Character;

