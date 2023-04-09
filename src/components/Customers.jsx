import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import john from "./img/john.png";
import brett from "./img/brett.png";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";

export default function App() {
  return (
    <>
      <div className="our_customers">
        <h1>Says our customers</h1>
        <Swiper
          slidesPerView={1}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            769: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
          }}
          scrollbar={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slide_data">
              <div className="person">
                <img src={john} />
                <h2>John Smith</h2>
                <p>Product Designer</p>
              </div>
              <div className="comment">
                <p>
                  Education WP is a special build for effective education &
                  Learning Management System site. Education WP is the next
                  generation & one of the best education WordPress themes which
                  all the strength of eLearning WP..
                </p>
                <div className="rating">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide_data">
              <div className="person">
                <img src={brett} />
                <h2>John Smith</h2>
                <p>Product Designer</p>
              </div>
              <div className="comment">
                <p>
                  Education WP is a special build for effective education &
                  Learning Management System site. Education WP is the next
                  generation & one of the best education WordPress themes which
                  all the strength of eLearning WP..
                </p>
                <div className="rating">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide_data">
              <div className="person">
                <img src={john} />
                <h2>John Smith</h2>
                <p>Product Designer</p>
              </div>
              <div className="comment">
                <p>
                  Education WP is a special build for effective education &
                  Learning Management System site. Education WP is the next
                  generation & one of the best education WordPress themes which
                  all the strength of eLearning WP..
                </p>
                <div className="rating">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide_data">
              <div className="person">
                <img src={brett} />
                <h2>John Smith</h2>
                <p>Product Designer</p>
              </div>
              <div className="comment">
                <p>
                  Education WP is a special build for effective education &
                  Learning Management System site. Education WP is the next
                  generation & one of the best education WordPress themes which
                  all the strength of eLearning WP..
                </p>
                <div className="rating">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide_data">
              <div className="person">
                <img src={john} />
                <h2>John Smith</h2>
                <p>Product Designer</p>
              </div>
              <div className="comment">
                <p>
                  Education WP is a special build for effective education &
                  Learning Management System site. Education WP is the next
                  generation & one of the best education WordPress themes which
                  all the strength of eLearning WP..
                </p>
                <div className="rating">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide_data">
              <div className="person">
                <img src={brett} />
                <h2>John Smith</h2>
                <p>Product Designer</p>
              </div>
              <div className="comment">
                <p>
                  Education WP is a special build for effective education &
                  Learning Management System site. Education WP is the next
                  generation & one of the best education WordPress themes which
                  all the strength of eLearning WP..
                </p>
                <div className="rating">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
