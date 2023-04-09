import React from "react";
import product from "./img/product.png";
import coffeeMachine from "./img/coffee_machine.png";
import { useEffect } from "react";

const Products = () => {
  return (
    <>
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
              <span class="fa fa-star checked"></span>
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
              <span class="fa fa-star "></span>
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
              <span class="fa fa-star checked"></span>
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
      <div className="c_machine">
        <img src={coffeeMachine} />
        <div className="c_machine_data">
          <h1> machine, buy for home</h1>
          <p>
            mauris rhoncus in imperdiet placerat. vestibu emismd nisl suscirpit
            ligula volutpat, a feyguat urn maxmaus. cars massa nibhtincidunt.
            donec et nib maximus, est eu, mattis nuce. preasent ut quam quis
            quam venen atis fri ngilla. morbi vastibulum id tells mmodo mattis.
            aliauam erat volutpal.
          </p>
          <button className="default_btn">Discover now</button>
        </div>
      </div>
    </>
  );
};

export default Products;
