import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Detalles from "./Componentes/Detalles";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const router = createBrowserRouter([
  // <Router>
  //   <Switch>
  //     <Route exact path="/" component={App} />
  //     <Route path="pokemon/:idPokemon" component={Details} />
  //   </Switch>
  // </Router>,
  {
    path: "/",
    element: <App />,
  },
  {
    path: "pokemon/:idPokemon",
    element: <Detalles />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
   
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
