// import React from "react";
import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

const Planet = (props) => {
  const params = useParams();
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="row">
        {store.planet.map((planets, index, population) => (
          <div className="col-md-3 mt-5" key={index}>
            <div className="card mx-3 bg-transparent border-dark" style={{ minWidth: "250px", maxWidth: "600px" }}>
              <img src={`https://starwars-visualguide.com/assets/img/planets/${index + 1}.jpg`} className="card-img-top" style={{ height: "325px", objectFit: "cover" }} />
              <div className="card-body">
                <h5 className="card-title" style={{ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>{planets.name}</h5>
                <Link to={`/planets/${planets.uid}`} className="btn btn-transparent border-dark">
                  Learn more!
                </Link>
                <button className="color-danger border-danger bg-transparent ms-5"><i class="fa-regular fa-heart border-danger text-color-danger text-danger"></i></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Planet;
