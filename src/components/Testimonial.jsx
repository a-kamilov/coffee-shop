import React from "react";
import coffee_1 from "./img/T_c1.png";
import coffee_2 from "./img/T_c2.png";
import coffee_3 from "./img/T_c3.png";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <h1>Our latest news</h1>
      <div className="cards">
        <div className="card">
          <img src={coffee_1} />
          <p>rasaline</p>
          <h4>Ideal cocktails from barmen....</h4>
          <a href="#">
            Read More <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="card">
          <img src={coffee_2} />
          <p>rasaline</p>
          <h4>Ideal cocktails from barmen....</h4>
          <a href="#">
            Read More <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="card">
          <img src={coffee_3} />
          <p>rasaline</p>
          <h4>Ideal cocktails from barmen....</h4>
          <a href="#">
            Read More <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
