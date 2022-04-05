import React from "react";
import "./about.css";
import ME from "../../assets/Chris_Islande.jpeg";
import { MdSchool, MdOutlineWeb, MdComputer } from "react-icons/md";

const About = () => {
  return (
    <section id="about">
      <h5>Découvrez</h5>
      <h2>Qui Je Suis</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="photo" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <MdSchool className="about__icon" />
              <h5>Formation</h5>
              <small>1 année Openclassrooms</small>
            </article>{" "}
            <article className="about__card">
              <MdOutlineWeb className="about__icon" />
              <h5>Projets</h5>
              <small>Multiples créations de sites Web</small>
            </article>{" "}
            <article className="about__card">
              <MdComputer className="about__icon" />
              <h5>Connaissances</h5>
              <small>HTML, CSS, JavaScript, React JS...</small>
            </article>{" "}
          </div>
          <p>
            Diplômé de la formation Web de chez Openclassrooms, je poursuis ma
            reconversion professionnelle !
          </p>
          <a href="#contact" className="btn btn-primary">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
