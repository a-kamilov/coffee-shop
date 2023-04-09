import React from "react";
import coffee_1 from "./img/coffee_1.png";
import coffee_2 from "./img/coffee_2.png";
import coffee_3 from "./img/coffee_3.png";
import coffee_4 from "./img/coffee_4.png";

const Content = () => {
  return (
    <>
      <div className="c_1">
        <div className="cards">
          <div className="card">
            <p>Best Coffee Flavour</p>
            <img src={coffee_1} />
          </div>
          <div className="card">
            <p className="p_2">Best Coffee Flavour</p>
            <img src={coffee_2} />
          </div>
          <div className="card">
            <p className="p_3">Best Coffee Flavour</p>
            <img src={coffee_3} />
          </div>
        </div>
      </div>
      <div className="c_2">
        <div className="left">
          <img src={coffee_2} />
          <img src={coffee_1} />
        </div>
        <img className="center" src={coffee_4} />
        <div className="right">
          <h5>Our history</h5>
          <h1>Create a new story with us</h1>
          <p>
            mauris rhoncus in imperdiet placerat. vestibu emismd nisl suscirpit
            ligula volutpat, a feyguat urn maxmaus. cars massa nibhtincidunt.
            donec et nibh maximus, est eu, mattis nuce. preasent ut quam quis
            quam venen atis fringilla. morbi vastibulum id tells mmodo mattis.
            aliauam erat volutpal.
          </p>
        </div>
      </div>
    </>
  );
};

export default Content;
