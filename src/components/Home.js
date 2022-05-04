import React from "react";
import Products from "./Products";
const Home = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        class="carousel slide home-slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://4kwallpapers.com/images/walls/thumbs_2t/3273.jpg"
              class="d-block w-100 img-slider"
              alt="Iphone"
              height="500"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://bizweb.dktcdn.net/100/397/400/themes/781687/assets/slider_2.jpg?1618376566470"
              class="d-block w-100 img-slider"
              alt="..."
              height="500"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://cdn.tgdd.vn/Files/2018/06/12/1094829/dien-thoai-iphone-la-cua-nuoc-nao--21-760x367.jpg"
              class="d-block w-100 img-slider"
              alt="..."
              height="500"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://media.vogue.co.uk/photos/61ec13d02f730059c18d92c3/16:9/w_896,h_504,c_limit/00_promo.jpg"
              class="d-block w-100 img-slider"
              alt="..."
              height="500"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-target="#carouselExampleIndicators"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-target="#carouselExampleIndicators"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </button>
        <Products />
      </div>
    </>
  );
};

export default Home;
