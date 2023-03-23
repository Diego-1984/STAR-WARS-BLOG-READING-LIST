import React from "react";

const Dropdown=()=>{
    return(
    <>
    <div class="dropdown ">
  <button class="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown">
    Favorites
  </button>
  <ul class="dropdown-menu bg-dark ">
    <li><a class="dropdown-item text-white">Action</a></li>
    
  </ul>
</div>
    </>)
}
export default Dropdown;