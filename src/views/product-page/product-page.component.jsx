import React, { useState, useEffect } from "react";
import ProductListComponent from "../../components/product-list/product-list.component";
import SortByComponent from "../../components/sort-by/sort-by.component";
import SearchBarComponent from "../../components/search-bar/search-bar.component";
import { products } from "../../models/product-data";

import "./product-page.styles.scss";

export default function ProductPageComponent() {
  const [inputVal, setInputVal] = useState("");
  const [sortVal, setSortVal] = useState("");
  const [productsList, setProducts] = useState([]);

  useEffect(() => {
    setProducts(products);
  }, []);

  const handleInputValue = (val) => {
    setInputVal(val);
    let filteredProducts = [
      ...products.filter((item) =>
        item.productName.toLowerCase().includes(val.toLowerCase())
      ),
    ];
    setProducts(filteredProducts);
  };

  const handleSortValue = (val) => {
    setSortVal(val);
    let sortedProducts = [...products];
    if (val === "product-name") {
      sortedProducts.sort(function (a, b) {
        var textA = a.productName.toUpperCase();
        var textB = b.productName.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });
    } else if (val === "low-to-high") {
      sortedProducts.sort(function (a, b) {
        return a.productPrice - b.productPrice;
      });
    } else if (val === "high-to-low") {
      sortedProducts.sort(function (a, b) {
        return b.productPrice - a.productPrice;
      });
    }
    setProducts(sortedProducts);
  };

  return (
    <div className="product-page">
      <div className="container">
        <div className="input-form-wrapper d-flex justify-content-between align-content-center flex-wrap w-100 mx-auto mt-4 col-md-8">
          <SearchBarComponent handleInput={handleInputValue} />
          <SortByComponent
            className="mobile-margin"
            handleSort={handleSortValue}
          />
        </div>
        <ProductListComponent productsList={productsList} />
      </div>
    </div>
  );
}
