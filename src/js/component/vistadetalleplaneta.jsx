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
          <div className="text-black">h</div>
          <div className="container"style={{ marginTop: "75px" }}>
            <div className="row">
              <div className="col-6">
                <img
                  className="card-img-top"
                  src={`https://starwars-visualguide.com/assets/img/planets/${params.id}.jpg`}
                  alt="Card image cap"
                  width="265"
                  class="my-5"
                />
              </div>
              <div className="col-6">
                <h1>{store.planetDetails.name}</h1>
                <p1>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Veniam itaque corporis doloribus? Necessitatibus harum,
                  adipisci illum rem dicta unde, asperiores recusandae itaque,
                  quas soluta iure corrupti culpa facilis reprehenderit
                  incidunt?
                </p1>
              </div>
              <div className="container my-4">
                <div className="row h4 pb-2 mb-4 mt-1 text-danger border-bottom border-danger">
                  <div className="col-2 text-center">Name</div>
                  <div className="col-2 text-center">Climate</div>
                  <div className="col-2 text-center">Population</div>
                  <div className="col-2 text-center">Orbital Period</div>
                  <div className="col-2 text-center">Rotation period</div>
                  <div className="col-2 text-center">Diameter</div>
                </div>
                <div className="row text-danger">
                  <div className="col-2 text-center">
                    {store.planetDetails.name}
                  </div>
                  <div className="col-2 text-center">
                    {store.planetDetails.climate}
                  </div>
                  <div className="col-2 text-center">
                    {store.planetDetails.population}
                  </div>
                  <div className="col-2 text-center">
                    {store.planetDetails.orbital_period}
                  </div>
                  <div className="col-2 text-center">
                    {store.planetDetails.rotation_period}
                  </div>
                  <div className="col-2 text-center">
                    {store.planetDetails.diameter}
                  </div>
                </div>
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
