
import React from "react";  
import '../index.css';
import Header from "/src/components/header.jsx"

export default function Landing() {

    return (
        <div>
            <Header />
            <div className="landing">
   
            <img id="landpic" src="/images/cover.jpg" height="400px" width="350px" alt="Picture of Matthew Shuman" title="Matthew Shuman" />

                <h2>Full Stack Web Developer</h2>
                <h3>Philadelphia, PA</h3>
            </div>
        </div>
    )
}


