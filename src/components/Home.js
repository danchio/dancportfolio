import React from 'react';
import me from '../images/me.jpg';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import { Link } from 'react-router-dom';
import './home.css';
import Projects from './Projects'

const Home = () => {
  return (
    <>
      <body>
        <div className='container'>
          <div className='fullName'>
            <div className='first'>DANIEL</div>
            <div className='last'>CHIONG</div>
            <div className='suffix'>JR.</div>
          </div>
          <div className='position'>
            <h3>Web Developer</h3>
          </div>
          <body className='aboutMe'>
            <div >
              <img src={me} alt='dannyc.jpg' />
            </div>
            <div  className='description'>
              <p>
                Hello! My name is Daniel Chiong Jr and I'm a web developer based in Miami, FL. 
              </p>
              <p>
                In the 2nd half of 2020, I atteneded Wyncode Academy. This kickstarted my passion for all things programming. Completing 350+ hours of classes and written upwards of 8000 lines of code and Im only getting started.
              </p>
              <p>
                I've spent many years working in the hospitality industry and  I've managed a plethora of teams. From that I've gained valuable work ethic. I'm now harnessing that ethic and applying it to my new career in web development and beyond. 
              </p>
              <a href='https://github.com/danchio'><img className='descriptionImg' src={github} alt='githubLogo.png' /></a>
              <a href='https://www.linkedin.com/in/daniel-chiong-jr-27aa071b5/'><img className='descriptionImg'  src={linkedin} alt='linkedinLogo.png' /></a> 
            </div>
          </body>
        </div>
        <Projects />
      </body>
    </>
  )
}

export default Home;
