import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { Context } from "../store/appContext";

const Planet = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <h1>Planets</h1>
      <div className="card-container">
        {store.planet.map((planets, index) => (
          <div className="col-md-3 mt-2" key={index}>
            <div
              className="card mx-3 bg-transparent border-dark my-3"
              style={{ minWidth: "250px", maxWidth: "600px" }}
            >
              <img
                src={`https://starwars-visualguide.com/assets/img/planets/${
                  index + 1
                }.jpg`}
                className="card-img-top"
                style={{ height: "325px", objectFit: "cover" }}
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
                  {planets.name}
                </h5>
                <h6>Population: {planets.population}</h6>
                <h6>Terrain: {planets.terrain}</h6>
                <div className="mt-3 justify-content-between d-flex">
                  <Link
                    to={`/planets/${planets.uid}`}
                    className="btn btn-transparent border-dark"
                  >
                    Learn more!
                  </Link>
                  <button
                    onClick={() => actions.setFavorites(planets.name)}
                    className="color-danger border-danger bg-transparent ms-5"
                  >
                    <i class="fa-regular fa-heart border-danger text-color-danger text-danger"></i>
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

export default Planet;
