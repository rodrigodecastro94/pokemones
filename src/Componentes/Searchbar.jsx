import React from "react";
import "./Searchbar.css";

function Searchbar(props) {
  return (
    <div className="searchbar">
      <input type="text" placeholder="Buscar" onChange={props.filtrar} />
    </div>
  );
}

export default Searchbar;
