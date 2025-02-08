import React from "react";
import ProductCard from "./ProductCard";

export default function App() {
  return (
    <div className="app-container">
      <ProductCard
        title="Wireless Headphones"
        price="1499"
        imageUrl="https://via.placeholder.com/150"
        rating="4.5"
      />
 <ProductCard
        title="Smartwatch"
        price="2499"
        imageUrl="https://via.placeholder.com/150"
        rating="4.7"
      />
      
      <ProductCard
        title="Bluetooth Speaker"
        price="1999"
        imageUrl="https://via.placeholder.com/150"
        rating="4.3"
      />

    </div>
  );
}
