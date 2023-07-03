import React, { useEffect, useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

const Vistadetalleplaneta = () => {
  const params = useParams();
  const { actions, store } = useContext(Context);
  useEffect(() => {
    actions.fetchPlanetDetails(params.id);
  }, []);
  return (
    <div>
      {store.planetDetails ? (
        <div>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img
                  className="card-img-top"
                  src={`https://starwars-visualguide.com/assets/img/planets/${params.id}.jpg`}
                  alt="Card image cap"
                />
              </div>
              <div className="col-6">
                <h1>{store.planetDetails.name}</h1>
                <p1>{store.planetDetails.description}</p1>
              </div>
              <div className="row h4 pb-2 mb-4 mt-5 text-danger border-bottom border-danger">
                <div className="col-2">Name</div>
                <div className="col-2">Climate</div>
                <div className="col-2">Population</div>
                <div className="col-2">Orbital Period</div>
                <div className="col-2 ">Rotation period</div>
                <div className="col-2">Diameter</div>
              </div>
              <div className="row text-danger">
                <div className="col-2">{store.planetDetails.name}</div>
                <div className="col-2">{store.planetDetails.climate}</div>
                <div className="col-2">{store.planetDetails.population}</div>
                <div className="col-2">{store.planetDetails.orbital_period}</div>
                <div className="col-2">{store.planetDetails.rotation_period}</div>
                <div className="col-2">{store.planetDetails.diameter}</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        "cargando"
      )}
    </div>
  );
};
export default Vistadetalleplaneta;
