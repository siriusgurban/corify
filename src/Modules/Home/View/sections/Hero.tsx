// Images
import { Link } from "react-router-dom";

// Images

// React icons
import { SlSpeedometer } from "react-icons/sl";

import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { sliderData } from "../../../../db/carsDb";

const Hero = () => {
  return (
    <section className="heroSection">
      <div className="row">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {sliderData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="hero">
                <div className="heroImg">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="heroInfo">
                  <p className="slideInfo">{item.edition}</p>
                  <h2 className="slideTitle">{item.name}</h2>
                  <p className="slideDetails">
                    {item.pack} <span>{item.packSeries}</span>
                  </p>
                  <p className="price">
                    {item.monthlyPrice} AZN <span>/</span> <span>Month</span>
                  </p>
                  <p className="priceDetails">
                    0 AZN first payment paid by Bmw up to {item.monthlyPrice}{" "}
                    AZN.
                  </p>
                  <p className="priceDetails">Taxes, title and fees extra. </p>
                  <div className="btns">
                    <Link className="primaryBtn" to="#">
                      LEARN MORE
                    </Link>
                    <Link className="secondaryBtn" to="#">
                      <SlSpeedometer /> TEST DRIVE
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
