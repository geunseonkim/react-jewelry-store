import React from "react";
import ProductDetail from "../pages/ProductDetail";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ authenticate }) => {
  return authenticate ? <ProductDetail /> : <Navigate to="/login" />;
};

export default PrivateRoute;
