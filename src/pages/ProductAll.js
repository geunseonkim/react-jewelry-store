import React from "react";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    let url = `http://localhost:4000/products?q=${searchQuery}`;
    // let url =
    //   "https://my-json-server.typicode.com/geunseonkim/react-jewelry-store/products";
    const response = await fetch(url);
    const data = await response.json();
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, [query]);
  return (
    <div>
      <div className="products-container">
        {productList.length !== 0 ? (
          productList.map((item) => (
            <div key={item} className="products-wrapper">
              <ProductCard item={item} />
            </div>
          ))
        ) : (
          <p className="products-search-noResult">
            Oops! We couldn't find what you're looking for.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductAll;
