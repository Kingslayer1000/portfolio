import React from "react";
import "./services.css";
import { FaCheckSquare } from "react-icons/fa";

const Services = () => {
  return (
    <section id="services">
      <h5>Academic Journey</h5>
      <h2>Education</h2>
      <div className="container services_container">
        <article className="services">
          <div className="service_head">
            <h3>B.Tech in Computer Science and Engineering</h3>
          </div>
          <ul className="service_list">
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>National Institute of Technolgy, Raipur </p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>SPI : 9.00  CPI : 8.89</p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>Batch : 2021-25</p>
            </li>
          </ul>
        </article>
        <article className="services">
          <div className="service_head">
            <h3>CBSE Class 12th</h3>
          </div>
          <ul className="service_list">
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>Colonel's Academy of Radiant Education, Bilaspur</p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>Percentage : 96.8%</p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>Session : 2020-21</p>
            </li>
          </ul>
        </article>
        <article className="services">
          <div className="service_head">
            <h3>CBSE Class 10th</h3>
          </div>
          <ul className="service_list">
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>Kendriya Vidyalaya, Bilaspur</p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>Percentage : 97.8%</p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>Session : 2018-19</p>
            </li>
          </ul>
        </article>       
      </div>
    </section>
  );
};

export default Services;
