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
                  className="card-img-top"
                  src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`}
                  alt="Card image cap"
                />
              </div>
              <div className="col-6">
                <h1>{store.characterDetails.name}</h1>
                <p1>
                  Geonosis, referred to as Geonosia by some natives, was the
                  desert home planet of the Geonosians. It was the Confederacy
                  of Independent Systems' first capital and hosted its major
                  battle droid foundries. It was the site of the First Battle of
                  Geonosis, the opening conflict of the Clone Wars, as well as
                  the subsequent invasion by the Galactic Republic. During and
                  after the war, the Death Star was constructed above the
                  planet. Five years after the conflict's conclusion and
                  transformation of the Galactic Republic, the Galactic Empire
                  would garrison the planet heavily and attempt to mine the
                  planet's asteroids for minerals. At least five years after the
                  Clone Wars, the Empire moved the Death Star to another
                  construction site and the planet was sterilized by the Empire
                  as a security measure, an act which resulted in the virtual
                  elimination of the planet's native population.
                </p1>
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
                <div className="col-2">xxx</div>
                <div className="col-2">xxx</div>
                <div className="col-2">xxx</div>
                <div className="col-2">xxx</div>
                <div className="col-2">xxx</div>
                <div className="col-2">xxx</div>
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
