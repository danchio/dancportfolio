import React from 'react';
import './projects.css';

const Projects = () => {
  return (
    <div className='container'>
      <header>
        <h3>Projects</h3>
      </header>
      <body className='projects'>
        <div>
          <a href='http://pokecodeplus.herokuapp.com/'>
            <h3>Pokecode Plus</h3>
          </a>
          <p>
            Pokecode plus is a project created to offer an easily accessible app that brought users into the colorful world of pokemon using over 1,500 lines of CSS to accomplish just that. Powered by React and vanilla CSS.
          </p>
        </div>
        <div>
          <a href='https://create-and-collaborate.herokuapp.com/'>
            <h3>Create & Collab</h3>
          </a>
          <p>
            Create and Collaborate is a website for creatives to connect with other creatives. It allows users
            to follow and message other users as well as post gigs and events. Powered by MERN stack and packages like Material UI.
          </p>
        </div>
      </body>
      <footer>
        <div>
          <h5>More coming soon...</h5>
        </div>
      </footer>
    </div>
  )
}

export default Projects
