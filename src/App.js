import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ProductPageComponent from "./views/product-page/product-page.component";
import HeaderComponent from "./components/header/header.component";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <Route path="/products" component={ProductPageComponent} />
        {/* <Route path="/stream" component={StreamPageComponent} />
        <Route path="/orders" component={OrdersPageComponent} /> */}
      </Router>
    </div>
  );
}

export default App;
