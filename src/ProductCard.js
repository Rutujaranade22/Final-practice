import React from "react";
import { ProductInfo } from "./components/ProductInfo";
import Button from "./components/Button";

export default function ProductCard({ title, price, imageUrl, rating }) {
  return (
    <div className="product-card">
      <img className="product-image" src={imageUrl} alt={title} />
      <div className="product-details">
        <ProductInfo title={title} rating={rating} price={price} />
        <Button />
      </div>
    </div>
  );
}
