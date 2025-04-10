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
      <div className="productCard-info">
        <h6>{item?.choice === true ? "Conscious choice" : ""}</h6>
        <h4>{item?.title}</h4>
        <p>
          {new Intl.NumberFormat("en-NZ", {
            style: "currency",
            currency: "NZD",
          }).format(item?.price)}{" "}
          NZD
        </p>
        <p>{item?.new === true ? "New arrival" : ""}</p>
      </div>
    </div>
  );
};

export default ProductCard;
