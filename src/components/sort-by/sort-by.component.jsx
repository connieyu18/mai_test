import React, { useState } from "react";
import "./sort-by.styles.scss";
export default function SortByComponent(props) {
  const [sortVal, setSortValue] = useState("");

  const onSortChange = (e) => {
    e.preventDefault();
    setSortValue(e.target.value);
    props.handleSort(e.target.value);
  };

  return (
    <form className="form-inline sort-by my-2 col-sm-12  col-md-6">
      <label htmlFor="sorting" className="mr-4">
        Sort By
      </label>
      <select
        className="form-control show-tick"
        value={sortVal}
        onChange={onSortChange}
      >
        <option value="low-to-high">Price (Lowest to Highest)</option>
        <option value="high-to-low">Price (Highest to Lowest)</option>
        <option value="product-name">Product Name</option>
      </select>
    </form>
  );
}
