import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Site de réservation d'hôtels en HTML et CSS",
    github: "https://github.com/ChristopheMas/Projet1-Openclassrooms-HTML-CSS",
    demo: "https://christophemas.github.io/Projet1-Openclassrooms-HTML-CSS/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Site de restaurants en HTML et CSS avec animations",
    github: "https://github.com/ChristopheMas/Projet2-Openclassrooms-HTML-CSS",
    demo: "https://christophemas.github.io/Projet2-Openclassrooms-HTML-CSS/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Site Marchand en JavaScript",
    github:
      "https://github.com/ChristopheMas/Projet4-Openclassrooms-Javascript",
    demo: "",
  },
  {
    id: 4,
    image: IMG4,
    title: "Site Web de Cinéma en React JS",
    github: "https://github.com/ChristopheMas/Projet-personnel-React",
    demo: "",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Mes Projets</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
