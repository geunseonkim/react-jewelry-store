import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div>
      <img className="item-img" src={item?.img} />
      <div>
        <h6>{item?.choice === true ? "Conscious choice" : ""}</h6>
      </div>
      <div>
        <h4>{item?.title}</h4>
      </div>
      <div>
        <p>${item?.price}ZD</p>
      </div>
      <div>
        <p>{item?.new === true ? "New arrival" : ""}</p>
      </div>
    </div>
  );
};

export default ProductCard;
