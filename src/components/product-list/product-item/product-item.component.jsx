import React from "react";

export default function ProductItemComponent({ item }) {
  const {
    id,
    productName,
    productPrice,
    qty,
    leftInStock,
    productImage,
  } = item;
  return (
    <div className="product-item-wrapper w-100">
      <a
        href="#"
        className="list-group-item list-group-item-action flex-column align-items-start"
      >
        <div className="d-flex w-10">
          <img
            style={{ width: "80px", height: "80px" }}
            src={require(`../../../images/${productImage}`)}
            className="product-img img-fluid border-4 mr-2 rounded-sm mt-1"
            alt=""
          />
          <div className="product-details col">
            <div className="d-flex flex-wrap">
              <p className="mr-3">#{id}</p>
              <p>
                {productName.substring(0, 1).toUpperCase() +
                  productName.substring(1).toLowerCase()}
              </p>
            </div>
            <div className="d-flex justify-content-between flex-wrap mt-2 w-100">
              <h6>${productPrice}</h6>
              <h6 className="mb-1 float-right">
                <span className="border p-1">
                  <strong>Orders: </strong> {qty}{" "}
                </span>{" "}
                <span className="border p-1">
                  <strong>In Stock:</strong> {leftInStock}
                </span>
              </h6>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
