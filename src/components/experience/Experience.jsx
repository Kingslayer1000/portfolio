import React from "react";
import "./experience.css";
import css3 from '../../assets/css3.png'
import html from '../../assets/html-5.png'
import js from '../../assets/javascript.png'
import react from '../../assets/react.png'
import bs from '../../assets/bootstrap.png'
import node from '../../assets/node.jpg'
import dsa from '../../assets/dsan.jpg'
import cpp from '../../assets/cppn.jpg'
import oop from '../../assets/oopn.png'
import dbms from '../../assets/dbmsn.png'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Front-end Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <img src={html} className="experience_details-icon" alt="html"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={css3} className="experience_details-icon" alt="css"/>
              <div>
               
                <h4>CSS3</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={js} className="experience_details-icon" alt="js"/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={react} className="experience_details-icon" alt="react"/>
              <div>                
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={bs} className="experience_details-icon" alt="bs"/>
              <div>           
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={node} className="experience_details-icon" alt="node"/>
              <div>
               
                <h4>Node.js</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          
          <h3>Programming and CS Fundamentals</h3>
          <div className="experience_content">
            <article className="experience_details">
              <img src={cpp} className="experience_details-icon" alt="postgresql"/>
              <div>
               
                <h4>C++</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={dsa} className="experience_details-icon" alt="dsa"/>
              <div>
                <h4>DSA</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={oop} className="experience_details-icon" alt="rails"/>
              <div>
             
                <h4>OOPS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={dbms} className="experience_details-icon" alt="python"/>
              <div>
                <h4>DBMS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;