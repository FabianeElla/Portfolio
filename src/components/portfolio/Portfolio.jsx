import React, { useRef } from "react";
import CreatePortfolio from "./CreatePortfolio";
import carousel from "../../data/carousel";
import arrow from "../../img/carousel/caret-right-fill.svg";

function Portfolio() {
  const carouselScroll = useRef(null);

  function handleLeftClick(e) {
    e.preventDefault();
    console.log(carouselScroll.current);
    carouselScroll.current.scrollLeft -= carouselScroll.current.offsetWidth;
  }

  function handleRightClick(e) {
    e.preventDefault();
    carouselScroll.current.scrollLeft += carouselScroll.current.offsetWidth;
  }

  function createCarousel(item) {
    return (
      <CreatePortfolio
        key={item.id}
        url={item.url}
        img={item.img}
        alt={item.alt}
        title={item.title}
        details={item.details}
        github={item.github}
      />
    );
  }

  return (
    <section id="portfolio-link" className="portfolio-container">
      <h3>Portfolio</h3>
      <p>Explorando meu Universo de Desenvolvimento: Seis Meses de Projetos com React, JavaScript, HTML, CSS e Bootstrap</p>

      <div className="carousel" ref={carouselScroll}>
        {carousel.map(createCarousel)}
      </div>
      <button className="arrow-left" onClick={handleLeftClick}>
        <img src={arrow} alt="Flecha para direita" />
      </button>
      <button className="arrow-right" onClick={handleRightClick}>
        <img src={arrow} alt="Flecha para esquerda" />
      </button>
    </section>
  );
}

export default Portfolio;
