import "./Listado.css";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";
function Listado(props) {
  const [listOriginal, setListOriginal] = useState();
  const [listado, setListado] = useState();
  const [isNumericSorted, setIsNumericSorted] = useState(true);
  const getData = () => {
    fetch("http://localhost:3000/pokemons", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })

      .then(function (myJson) {
        setListOriginal(myJson);
        setListado(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  function ordenarListado() {
    let nuevoListado = [...listado];
    if (isNumericSorted === true) {
      nuevoListado = nuevoListado.sort((p1, p2) =>
        p1.nombre.localeCompare(p2.nombre)
      );
      setIsNumericSorted(false);
    } else {
      nuevoListado = nuevoListado.sort((p1, p2) => +p1.idd - +p2.idd);
      setIsNumericSorted(true);
    }
    console.log(nuevoListado);
    setListado(nuevoListado);
    //setListOriginal(nuevoListado);
  }

  function filtrarListado(e) {
    let value = e.target.value.trim();
    if (value !== "") {
      let newA = [];
      for (let i = 0; i < listOriginal.length; i++) {
        let index = listOriginal[i].nombre
          .toUpperCase()
          .indexOf(value.toUpperCase());
        if (index > -1) {
          newA.push(listOriginal[i]);
        }
      }
      if (newA.length > 0) {
        setListado(newA);
      } else {
        setListado([]);
      }
    } else {
      setListado(listOriginal);
    }
    // revisar parametros
  }
  return (
    <div>
      <Header ordenar={ordenarListado} sorted={isNumericSorted} />
      <Searchbar filtrar={filtrarListado} />
      <section className="main">
        {listado?.map(function (array, index) {
          return (
            <div key={index}>
              <Link to={`pokemon/${array.id}`}>
                <div
                  className="poke-card"
                  style={{ borderColor: array.color1 }}
                >
                  <div className="poke-id" style={{ color: array.color1 }}>
                    <p>#{array.idd}</p>
                  </div>

                  <div className="poke-img">
                    <img src={array.imagen} alt="pokemon" />
                  </div>

                  <div
                    className="poke-name"
                    style={{ backgroundColor: array.color1 }}
                  >
                    <p>{array.nombre}</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </section>
    </div>
  );
}
export default Listado;
