import React from "react";

const Card = ({ data }) => {
  return (
    <div className="card-single">
      <div className="card-image-container">
        <img src={data.image} alt={data.title} />
        <div className="card-image-overlay">
          <i className="fas fa-plus"></i>Add to Cart
        </div>
      </div>
      <div className="card-item">{data.title}</div>
      <div className="card-item">${data.price}</div>
      <div className="card-item">{data.rating}/5</div>
    </div>
  );
};

export default Card;
