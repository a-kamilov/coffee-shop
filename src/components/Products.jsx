import React from "react";
import product from "./img/product.png";

const Products = () => {
  return (
    <div className="products">
      <h5>Popular Product</h5>
      <h1>Coffee popular Product</h1>
      <div className="cards">
        <div className="card">
          <img src={product} />
          <div className="rating">
            <p>Coffee</p>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
          </div>
          <h2>brazil coffee gred</h2>
          <h4>
            Price - <price>$320.00/</price>$358
          </h4>
          <button className="default_btn">
            <i class="fa fa-shopping-bag" aria-hidden="true"></i>Add to cart
          </button>
        </div>
        <div className="card">
          <img src={product} />
          <div className="rating">
            <p>Coffee</p>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
          </div>
          <h2>brazil coffee gred</h2>
          <h4>
            Price - <price>$320.00/</price>$358
          </h4>
          <button className="default_btn">
            <i class="fa fa-shopping-bag" aria-hidden="true"></i>Add to cart
          </button>
        </div>
        <div className="card">
          <img src={product} />
          <div className="rating">
            <p>Coffee</p>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
          </div>
          <h2>brazil coffee gred</h2>
          <h4>
            Price - <price>$320.00/</price>$358
          </h4>
          <button className="default_btn">
            <i class="fa fa-shopping-bag" aria-hidden="true"></i>Add to cart
          </button>
        </div>
      </div>
      <button className="default_btn">View all product</button>
    </div>
  );
};

export default Products;
