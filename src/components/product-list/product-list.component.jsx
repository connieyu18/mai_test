import React from "react";

import ProductItemComponent from "./product-item/product-item.component";

export default function ProductListComponent({ productsList }) {
  return (
    <div className="product-list list-group mt-5 mx-auto col-md-7">
      <a href="#" className="list-group-item list-group-item-action bg-light">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">Products We Offer</h5>
          <p>
            <strong>
              Total: {productsList.length > 0 ? productsList.length : 0}
            </strong>
          </p>
        </div>
      </a>
      {productsList.length > 0
        ? productsList.map((item) => (
            <ProductItemComponent key={item.id} item={item} />
          ))
        : "No Products Available"}
    </div>
  );
}
