
import React from "react";  
import '../index.css';
import Header from "/src/components/header.jsx"

export default function Landing() {

    return (
        <div className="landing">
            <Header />
            <div className="landing">
   
                <img src="/images/cover.jpg" height= "400px" width="350px" alt="Picture of Matthew Shuman" />
                <h2>Full Stack Web Developer</h2>
                <h3>Philadelphia, PA</h3>
            </div>
        </div>
    )
}


