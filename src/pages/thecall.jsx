import React from "react";
import { useNavigate } from "react-router-dom";
import '../index.css';
import Header from "/src/components/header.jsx"

export default function TheCall() {

  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/');
  } 

    return (
        <div className="callpage">
            <Header />
            <h1>The Call...</h1>
          <div className="call">
            <p id="callp">I bring with me a unique skill set that gives me a competitive edge as I have a lifetime of experience in customer service, team work and team building, and a drive for excellence matched by none. Don't miss this opportunity to add a star to your team.</p>
            <p id="callp">.</p>
           <div className="resume"> 
            <img id="callpic" src="/images/1.png" height="600px" width="400px" alt="Picture of Matthew Shuman" title="A Gentleman and a Scholar" />
            <img id="callpic" src="/images/2.png" height="600px" width="400px" alt="Picture of Matthew Shuman" title="A Gentleman and a Scholar" />
           </div> 
            <p id="callp">.</p>
            <p id="callp">215-254-0810</p>
            <p id="callp">.</p>
            <p id="callp">MatthewShuman@MyYahoo.com</p>
          </div>
        </div>
    );
}

