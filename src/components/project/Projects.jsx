import React from "react";
import "./project.css";
import IMG1 from '../../assets/daybookn.jpg';
import IMG2 from '../../assets/tasktrekn.jpg';
import IMG3 from '../../assets/thedriven.jpg';
import IMG4 from '../../assets/simongamen.jpg';
import IMG5 from '../../assets/drumkitn.jpg';
import IMG6 from '../../assets/dicegamen.jpg';


const projects = [{
  id: 1,
  image: IMG1,
  title: 'Day Book - A React Project',
  github: 'https://github.com/Kingslayer1000/dayBookFinal',
  demo:'https://daybook-snivellus.netlify.app/'
},
{
  id: 2,
  image: IMG2,
  title: 'Task Trek - Front-end website',
  github: 'https://github.com/Kingslayer1000/taskTrek',
  demo:'https://tasktrekapp.netlify.app/'
  }, 
 {
  id: 3,
  image: IMG3,
  title: 'The Drive - HTML, CSS project',
  github: 'https://github.com/Kingslayer1000/theDrive',
   demo: 'https://kingslayer1000.github.io/theDrive/'
  },
 {
  id: 4,
  image: IMG4,
  title: 'Simon Game - Built using HTML, CSS and JS',
  github: 'https://github.com/Kingslayer1000/SimonGame',
  demo:'https://kingslayer1000.github.io/SimonGame/'
  },
 {
  id: 5,
  image: IMG5,
  title: 'Click Key Drum Stick - A fun JS Project',
  github: 'https://github.com/Kingslayer1000/Click-Key-Drum-Stick',
  demo:'https://kingslayer1000.github.io/Click-Key-Drum-Stick/'
  },
 {
  id: 6,
  image: IMG6,
  title: 'Dice Game - Fun game to play',
  github: 'https://github.com/Kingslayer1000/DiceGame',
  demo:'https://github.com/Kingslayer1000/DiceGame'
},
]
const Projects = () => {
  return (
    <section id="project">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container project_container">
        {projects.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="project_item">
          <div className="project_item-image">
          <img src={image} alt={title} />
          </div>
              <h3>{title}</h3>
          <div className="project-item-cta">
                     <a
            href={github}
            className="btn"
          >
            Github
          </a>
          <a href={demo} className="btn btn-primary" target='_blank' rel="noreferrer">
            Live Demo
          </a>
          </div> 
        </article>
          )
        })}               
      </div>
    </section>
  );
};

export default Projects;
