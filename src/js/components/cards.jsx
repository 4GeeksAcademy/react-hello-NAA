import React from "react";

const Cards = ({ imgURL, title, description }) => {
    return (
      <div className="card h-100" style={{ width: "16rem" }}>
        <img
        src={imgURL}
        className="card-img-top"
        alt={title}
        style={{ height: "500px", objectFit: "cover" }}    
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <div className="mt-auto"></div>
          <a href="#" className="btn btn-primary">
            Learn More
          </a>
        </div>
      </div>
    );
  };

export default Cards;