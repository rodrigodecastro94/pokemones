import { Link } from "react-router-dom";
import "./errorPage.css";

export default function ErrorPage() {
  return (
    <div className="errorpage-container">
      <div className="error-page">
        <h1>Oops! You seem to be lost.</h1>
        <h2>There is no pokemons here to catch! </h2>

        <Link to="/">
          <img src="/img/Pokeball.png" alt="logo pokeball" />
          <p>Pokemon Home</p>
        </Link>
      </div>
    </div>
  );
}
