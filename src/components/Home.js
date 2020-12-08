import React from 'react';
import me from '../images/me.jpg'
import './home.css'



const Home = () => {
  return (
    <div className='aboutMe'>
      <div>
        <h1>Who am I?</h1>
      </div>
      <div>
        <img src={me} alt='dannyc.jpg' />
      </div>
      <div className='description'>
        <p>
          Hello! My name is Daniel Chiong Jr and I'm a web developer based in Miami, FL. 
        </p>
        <p>
          In the 2nd half of 2020, I atteneded Wyncode Academy. This kickstarted my passion for all things programming. Completing 350+ hours of classes and written upwards of 8000 lines of code and Im only getting started.
        </p>
        <p>
          I've spent many years working in the hospitality industry and  I've managed a plethora of teams. From that I've gained valuable work ethic. I'm now harnessing that ethic and applying it to my new career in web development and beyond. 
        </p>
        <div>
          <wc-social-link network="github" handle="danchio" style="--width:32px;--height:32px"></wc-social-link>
        </div>
      </div>
    </div>
  )
}

export default Home;
