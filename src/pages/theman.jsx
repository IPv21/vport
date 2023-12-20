import React from 'react';
import '../index.css';
import Header from '../components/header.jsx';

export default function TheMan() {
  return (
    <section className='aboutMeWrapper'>
        <Header />
      <h1>The Man...</h1>
      <div className="moreman">
        <p>
          Hello! My name is Matthew Shuman. Thank you for taking some time out
          of your day to view my page. Born in California, raised in Lancaster,
          I came to Philly after Covid. I'm a lifelong cook, having done
          everything from flipping eggs at Cracker Barrel to being Sous Chef at
          a 5 Star restaurant. Looking for a new career path, I decided to
          pursue my love of computers and began researching IT courses on
          different platforms. I then found the UPenn LPS Coding Bootcamp and
          decided to take the plunge. I'm excited to see where this new path
          takes me!
        </p>
        </div>

        <pictures className="pictures">
        <img
          src="/images/love.jpg"
          height="90%"
          width="200px"
          alt="Matthew Shuman after Love Run"
        />

        <img
          src="/images/lookleft.jpg"
          height="90%"
          width="200px"
          alt="Matthew Shuman looking left"
        />

<img
          id="marathon"
          src="/images/marathon.jpg"
          height="250px"
          width="200px"
          alt="Matthew Shuman after Marathon"
        />




        </pictures>

<div className="moreman">
 
        A dedicated team member with a passion for learning, I'm looking for a
        company that will allow me to learn and grow as a developer. An avid
        runner, I have completed several half marathons and one full marathon.
        The mental toughness and dedication required to complete a marathon is
        something I bring to every aspect of my life. I'm looking forward to
        bringing that same dedication to my new career.
      </div>


    </section>
    );
}
