import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

const Character = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <h1 className="mt-3">Characters</h1>
      <div className="card-container">
        {store.character.map((people, index) => (
          <div className="col-md-3 mt-2" key={index}>
            <div
              className="card mx-3 bg-transparent border-dark my-3"
              style={{ minWidth: "250px", maxWidth: "600px" }}
            >
              <img
                src={`https://starwars-visualguide.com/assets/img/characters/${
                  index + 1
                }.jpg`}
                className="card-img-top"
                style={{ height: "325px", objectFit: "cover" }}
                alt={`Character ${people.name}`}
              />
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  {people.name}
                </h5>

                <h6>Gender: {people.gender}</h6>
                <h6>Hair color: {people.hair_color}</h6>
                <h6>Eye color: {people.eye_color}</h6>

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
    </>
  );
};

export default Character;
