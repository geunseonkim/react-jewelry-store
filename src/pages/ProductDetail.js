import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState(null);
  const [qty, setQty] = useState(1);
  const getProductDetail = async () => {
    let url = `http://localhost:4000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductDetail(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <div className="productDetail-container">
      <div>
        <img className="productDetail-img" src={productDetail?.img} />
      </div>

      <div className="productDetail-wrapper">
        <h1>{productDetail?.title}</h1>
        <p>
          {new Intl.NumberFormat("en-NZ", {
            style: "currency",
            currency: "NZD",
          }).format(productDetail?.price * qty)}{" "}
          NZD
        </p>
        <p>Tax included. Shipping calculated at checkout.</p>

        <div className="productDetail-size">
          <p>Size or Material</p>
          {productDetail?.size.map((item) => (
            <button className="productDetail-size-btn">{item}</button>
          ))}
        </div>

        <div className="productDetail-qty">
          <p>Quantity</p>
          <div className="productDetail-qty-btn">
            <p onClick={() => setQty((prev) => (prev > 1 ? prev - 1 : 1))}>–</p>
            <p>{qty}</p>
            <p onClick={() => setQty((prev) => prev + 1)}>+</p>
          </div>
        </div>

        <button className="productDetail-addToCart-btn">Add to cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
