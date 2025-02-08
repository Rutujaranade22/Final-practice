import React from "react";

export function ProductInfo({ title, price, rating }) {
  return (
    <>
      <h2 className="product-title">{title}</h2>
      <p className="product-rating">⭐ {rating} / 5</p>
      <p className="product-price">₹{price}</p>
    </>
  );
}
