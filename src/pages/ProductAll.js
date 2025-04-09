import React from "react";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    let url = "http://localhost:4000/products";
    // let url =
    //   "https://my-json-server.typicode.com/geunseonkim/react-jewelry-store/products";
    const response = await fetch(url);
    const data = await response.json();
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <div className="products-container">
        {productList.map((item) => (
          <div key={item} className="products-wrapper">
            <ProductCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductAll;
