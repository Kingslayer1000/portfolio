import React from "react";
import "./about.css";
import Me from "../../assets/me-2n.jpg";
import { FaAward, FaCertificate, FaFolder} from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Hello I'm</h5>
        <h2>Neel Sharma</h2>
        {/* <h5 className="text-light"> Programmer and front-end developer</h5><br></br> */}
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={Me} alt="About me" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>CSE Undergraduate</h5>
              <small>NIT Raipur</small>
            </article>
            <article className="about_card">
              <FaCertificate className="about_icon" />
              <h5>Programming Enthusiast</h5>
              <small>1200+ problems</small>
            </article>
            <article className="about_card">
              <FaFolder className="about_icon" />
              <h5>Front-end Developer</h5>
              <small>10+ projects</small>
            </article>
          </div>
          <p>As a B.Tech student pursuing Computer Science and Engineering at NIT Raipur, I am committed to leveraging my skills and knowledge to contribute to the field of technology.
            <br />
            <br />
            Looking ahead, I am excited to explore opportunities to apply my skills in a professional setting, and I am open to new challenges and experiences that will help me grow as a developer.
            <br />
            <br />
            I am also a passionate sports lover and I love watching Formula 1, Football, Cricket and Golf.
          </p>
          <a href="#project" className="btn btn-primary"> See my projects</a>
        </div>
      </div>
    </section>
  );
};

export default About;