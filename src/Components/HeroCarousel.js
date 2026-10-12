import React from "react";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const HeroImages = [
  { src: hero1, alt: "Hero Image 1" },
  { src: hero2, alt: "Hero Image 2" },
  { src: hero3, alt: "Hero Image 3" },
  { src: hero4, alt: "Hero Image 4" },
];

const HeroCarousel = () => {
  return (
    <div>
      <div
        id="carouselExampleRide"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div div className="carousel-inner">
          {HeroImages.map((images, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={images.src}
                className="d-block w-100"
                alt={images.alt}
                style={{ height: "500px", objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="prev"
          style={{width: "6%"}}
        >
          <span
            className="carousel-control-prev-icon bg-secondary"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="next"
          style={{width: "6%"}}
        >
          <span
            className="carousel-control-next-icon bg-secondary"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default HeroCarousel;
