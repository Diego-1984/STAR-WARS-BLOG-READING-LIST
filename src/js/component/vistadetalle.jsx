import React, { useEffect, useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

const Vistadetalle = () => {
  const params = useParams();
  const { actions, store } = useContext(Context);
  useEffect(() => {
    actions.fetchCharacterDetails(params.id);
  }, []);
  return (
    <div>
      {store.characterDetails ? (
        <div>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img
                  className="card-img-top "
                  width="250"
                  class="my-4"
                  src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`}
                  alt="Card image cap"
                />
              </div>
              <div className="col-6">
                <h1>{store.characterDetails.name}</h1>
                <p1>{store.characterDetails.description}</p1>
              </div>
              <div className="container my-4">
                <div className="row h4 pb-2 mb-4 mt-1 text-danger border-bottom border-danger">
                  <div className="col-2 text-center">Name</div>
                  <div className="col-2 text-center">Birth Year</div>
                  <div className="col-2 text-center">Gender</div>
                  <div className="col-2 text-center">Height</div>
                  <div className="col-2 text-center">Skin Color</div>
                  <div className="col-2 text-center">Eye Color</div>
                </div>
                <div className="row text-danger">
                  <div className="col-2 text-center">{store.characterDetails.name}</div>
                  <div className="col-2 text-center">
                    {store.characterDetails.birth_year}
                  </div>
                  <div className="col-2 text-center">{store.characterDetails.gender}</div>
                  <div className="col-2 text-center">{store.characterDetails.height}</div>
                  <div className="col-2 text-center">
                    {store.characterDetails.skin_color}
                  </div>
                  <div className="col-2 text-center">
                    {store.characterDetails.eye_color}
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
export default Vistadetalle;
