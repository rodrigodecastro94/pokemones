import React from "react";
// import { useState } from "react";
import "./Searchbar.css";
// import loupe from "../img/loupe.png";  COMO COLOCAR UNA IMG EN PLACEHOLDER

function Searchbar(props) {
  

  return (
    <div className="searchbar">
      <input type="text" placeholder="Buscar" onChange={props.filtrar} />
    </div>
  );
}

export default Searchbar;