import React from "react";
import coffee_1 from "./img/coffee_1.png";
import coffee_2 from "./img/coffee_2.png";
import coffee_3 from "./img/coffee_3.png";
import coffee_4 from "./img/coffee_4.png";

const Content_1 = () => {
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
        
      </div>
    </>
  );
};

export default Content_1;
