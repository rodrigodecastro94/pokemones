import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import "./Detalles.css";
import { useEffect } from "react";

function Detalles(props) {
  const { idPokemon } = useParams();
  const [pokemon, setPokemon] = useState("");
  const [pokemonTotal, setPokemonTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/pokemons/" + idPokemon, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(response);
      })

      .then(function (myJson) {
        setPokemon(myJson);
      })

      .catch((error) => {
        navigate("/error");
      });
  }, [idPokemon]);

  useEffect(() => {
    fetch("http://localhost:3000/pokemons/", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })

      .then(function (myJson) {
        setPokemonTotal(myJson.length);
      });
  }, [idPokemon]);

  return (
    <div className="details-card" style={{ backgroundColor: pokemon.color1 }}>
      {/* HEADER */}
      <div className="details-header">
        <div className="arrow-name">
          <Link to="../">
            <img src="/img/arrow-left.svg" alt="backArrow" className="arrows" />
          </Link>

          <h2>{pokemon?.nombre}</h2>
        </div>
        <div>
          <p>#{pokemon?.idd}</p>
        </div>
      </div>

      {/* IMAGEN */}
      <section className="img-floating">
        <div className="pokemon-photo">
          <Link
            to={`/pokemon/${
              pokemon.id - 1 === 0 ? pokemonTotal : pokemon.id - 1
            }`}
          >
            <img
              src="/img/left.png"
              alt="previous page"
              width="25px"
              height="25px"
              className="arrows"
            />
          </Link>
          <img src={pokemon?.imagen} alt="pokemon" />
          <Link
            to={`/pokemon/${
              pokemon.id + 1 === pokemonTotal + 1 ? 1 : pokemon.id + 1
            }`}
          >
            <img
              src="/img/next.png"
              alt="next page"
              width="25px"
              height="25px"
              className="arrows"
            />
          </Link>
        </div>
      </section>

      {/* SECTION DETAILS */}
      <section className="pokemon-details">
        {/* POKEMON TYPE */}
        <div className="pokemon-type">
          <div style={{ backgroundColor: pokemon.color1 }}>
            {pokemon?.types?.type1}
          </div>
          <div style={{ backgroundColor: pokemon.color2 }}>
            {pokemon?.types?.type2}
          </div>
        </div>

        {/* ABOUT */}
        <article className="about">
          <h3 className="about-title" style={{ color: pokemon.color1 }}>
            About
          </h3>

          <div className="about-data">
            <div className="about-scales">
              <div className="scales">
                <img src="/img/Weight.svg" alt="balance" />
                <h5>{pokemon?.weight}</h5>
              </div>
              <p> Weight</p>
            </div>

            <div className="about-scales">
              <div className="scales">
                <img src="/img/Height.svg" alt="rule" />
                <h5>{pokemon?.height}</h5>
              </div>
              <p> Height</p>
            </div>

            <div className="about-moves">
              <h5>{pokemon?.moves}</h5> <p>Moves</p>
            </div>
          </div>
          <p className="about-description">{pokemon?.description}</p>
        </article>

        {/* BASE STATS */}
        <div className="base-stats">
          <h3 className="stats-title" style={{ color: pokemon.color1 }}>
            Base Stats
          </h3>
          <div>
            <ul>
              <li className="stats-item" style={{ color: pokemon.color1 }}>
                HP <span className="stats-number">{pokemon?.stats?.hp}</span>
                <span>
                  <input
                    className="stats-bars"
                    type="range"
                    min={0}
                    max={100}
                    value={pokemon?.stats?.hp}
                  />
                </span>
              </li>
              <li className="stats-item" style={{ color: pokemon.color1 }}>
                ATK <span className="stats-number">{pokemon?.stats?.atk}</span>
                <span>
                  <input
                    className="stats-bars"
                    type="range"
                    min={0}
                    max={100}
                    value={pokemon?.stats?.atk}
                  />
                </span>
              </li>
              <li className="stats-item" style={{ color: pokemon.color1 }}>
                DEF <span className="stats-number">{pokemon?.stats?.def}</span>
                <span>
                  <input
                    className="stats-bars"
                    type="range"
                    min={0}
                    max={100}
                    value={pokemon?.stats?.def}
                  />
                </span>
              </li>
              <li className="stats-item" style={{ color: pokemon.color1 }}>
                SATK
                <span className="stats-number">{pokemon?.stats?.satk}</span>
                <span>
                  <input
                    className="stats-bars"
                    type="range"
                    min={0}
                    max={100}
                    value={pokemon?.stats?.satk}
                  />
                </span>
              </li>
              <li className="stats-item" style={{ color: pokemon.color1 }}>
                SDEF
                <span className="stats-number">{pokemon?.stats?.sdef}</span>
                <span>
                  <input
                    className="stats-bars"
                    type="range"
                    min={0}
                    max={100}
                    value={pokemon?.stats?.sdef}
                  />
                </span>
              </li>
              <li className="stats-item" style={{ color: pokemon.color1 }}>
                SPD <span className="stats-number">{pokemon?.stats?.spd}</span>
                <span>
                  <input
                    className="stats-bars"
                    type="range"
                    min={0}
                    max={100}
                    value={pokemon?.stats?.spd}
                  />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Detalles;
