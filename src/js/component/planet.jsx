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
      <div className="d-flex">
                    {store.planet.map((land, index) => {
                    return (
                        <div className="card mx-3" style={{ minWidth: "250px", maxWidth: "600px" }} key={index}>
                        <img src={"https://starwars-visualguide.com/assets/img/planets/" + (index+1) + ".jpg"} className="card-img-top" style={{ height: "325px", objectFit: "cover" }} />
                        <div className="card-body">
                            <h5 className="card-title" style={{ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>{people.name}</h5>
                            <Link to={`/people/${people.uid}`} className="btn btn-primary">
                                Learn more!
                            </Link>
                          
                        </div>
                        </div>
                    );
                    })}
                </div>
      </div>
    </>
  );
};

export default Planet;
