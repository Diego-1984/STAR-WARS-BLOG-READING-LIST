import React, { useContext } from "react";
import { Context } from "../store/appContext";

const Dropdown = () => {
  const { actions, store } = useContext(Context);

  return (
    <>
      <div className="dropdown pull-left">
        <button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown">
          Favorites {store.favorites.length}
        </button>
        <ul className="dropdown-menu bg-dark dropdown-menu-end">
          {store.favorites.map((fav, index) => (
            <li key={index} className="d-flex mx-1 bg-dark">
              <a className="dropdown-item text-white my-1 bg-dark">{fav}</a>
              <button className ="bg-dark"onClick={() => actions.deleteFavorite(index)}>
                <i className="fa-solid fa-trash-can mx-1 text-danger bg-dark "></i>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
