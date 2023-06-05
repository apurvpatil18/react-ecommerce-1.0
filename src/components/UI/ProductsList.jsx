import React from "react";
import ProductsCard from "./ProductsCard";

const ProductsList = ({ data }) => {
  if (!data || !Array.isArray(data)) {
    return null; // or return an alternative UI if desired
  }

  return (
    <>
      {data?.map((item, index) => (
        <ProductsCard item={item} key={index} />
      ))}
    </>
  );
};

export default ProductsList;
