import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const goToProductDetail = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <div onClick={goToProductDetail}>
      <img className="item-img" src={item?.img} />
      <div>
        <h6>{item?.choice === true ? "Conscious choice" : ""}</h6>
      </div>
      <div>
        <h4>{item?.title}</h4>
      </div>
      <div>
        <p>${item?.price} NZD</p>
      </div>
      <div>
        <p>{item?.new === true ? "New arrival" : ""}</p>
      </div>
    </div>
  );
};

export default ProductCard;
