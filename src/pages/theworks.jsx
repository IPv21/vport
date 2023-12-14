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
    <container className="card-container">
      <div className="card" >
          <img src="/images/factors.png" height="220px"className="card-img-top" alt="Search Page" />
           <div className="card-body">
            <h3 className="card-title">Factors</h3>
              <p className="card-text">
               Factors is a search engine that allows users to search for an actor or actress and see what movies they have been in. It uses the OMDB API to make the calls and is deployed on Github Pages.
              </p>
      
              <a href="https://brousy.github.io/factors/">
              <button className="button-59">Find EM!</button>
              </a>
           </div>
      </div>


      <div className="card">
        <img src="/images/connect.png" height="300px" className="card-img-top" alt="App Login Page" />
         <div className="card-body">
           <h3 className="card-title">ConnectUs</h3>
            <p className="card-text">
          ConnectUs is a powerful React application designed to streamline communication within a company across different departments. This project leverages GraphQL and MongoDB to  provide a seamless and efficient communication platform.
            </p>
            <a href="https://connectus943-7bbab6a61bad.herokuapp.com/">
            
          <button className="button-59">Get Connected</button>
          </a>
        </div>
      </div>

      <div className="card" >
        <img src="/images/wow.png" height="300px"className="card-img-top" alt="Blog Post" />
          <div className="card-body">
            <h3 className="card-title">Wourld of WOW!</h3>
              <p className="card-text">
                WOW is a simple blog using using Auth, a MySQL database and displaying information using Handlebars. 
              </p>
      
              <a href="https://morning-falls-12589-743225784c59.herokuapp.com/">
              <button className="button-59">Start Posting!</button>
              </a>
          </div>
      </div>

      <div className="card" >
        <img src="/images/weather.png" height="300px"className="card-img-top" alt="Weather App" />
          <div className="card-body">
            <h3 className="card-title">WeatherGuy</h3>
              <p className="card-text">
                WeatherGuy is a simple weather app that uses the Open Weather API to display the current weather in a city as well as a 5 day forecast. It saves the last 5 cities searched in local storage. 
              </p>
      
              <a href="https://ipv21.github.io/weatherguy/ ">
              <button className="button-59">5 Day Forecast</button>
              </a>
          </div>
      </div>

      <div className="card" >
        <img src="/images/primal.png" height="250px"className="card-img-top" alt="Fitness App Landing page" />
          <div className="card-body">
            <h3 className="card-title">Primal Planner</h3>
              <p className="card-text">
              Primal Planner is a fitness scheduling tool that allows users to plan their workouts for an entire week. It offers features like user authentication for secure access, a database to store workouts, and API calls to fetch relevant fitness data. With Primal Planner, you can create a personalized workout plan, track your progress, and stay motivated on your fitness journey. 
              </p>
      
              <a href="https://primalplanner-6f3879bf7f09.herokuapp.com/">
              <button className="button-59">GET PUMPED UP!</button>
              </a>
          </div>
      </div>

      <div className="card" >
        <img src="/images/6.png" height="250px"className="card-img-top" alt="TodoTada Landing page" />
          <div className="card-body">
            <h3 className="card-title">Todo Tada!</h3>
              <p className="card-text">
              Description: Todo Tada! is a simple to-do list app that allows users to create, edit, and delete tasks. It uses a MySQL database to store the tasks and is deployed on Heroku.
              </p>
      
              <a href="https://immense-lake-10385-616c7fef344f.herokuapp.com/">
              <button className="button-59">Take Notes</button>
              </a>
          </div>
      </div>

      </container>

    </div>
  );
}
