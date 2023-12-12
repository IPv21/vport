import React from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import Header from "../components/header";

export default function TheWorks() {
  return (
    <div className="works">
      <Header />
      <div className="work">
        <h1>The Works...</h1>
        <p>
          Here are some of the projects I've worked on. Click on the links to
          check them out!
        </p>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img src="/images/factors.png" height="300px"className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
          Factors is a search engine that allows users to search for an actor or actress and see what movies they have been in. It uses the OMDB API to make the calls and is deployed on Github Pages.
          </p>
          <a href="https://brousy.github.io/factors/" className="btn btn-primary">
            Find EM!
          </a>
        </div>
      </div>


      <div className="card" style={{ width: "18rem" }}>
        <img src="/images/connect.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>

    </div>
  );
}
