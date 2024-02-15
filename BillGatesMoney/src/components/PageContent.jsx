import { useState } from "react";

import data from "../data";
import Product from "./Product";

function PageContent() {
  return (
    <div className="product-grid">
      {data.map((productData) => (
        <Product
          key={productData.id}
          id={productData.id}
          title={productData.title}
          price={productData.price}
          image={productData.image}
          count={productData.count}
        />
      ))}
    </div>
  );
}

export default PageContent;
