import React from "react";
import { Swiper, useSwiper, SwiperSlide } from "swiper/react";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";
import './Residencies.css'
function Residencies() {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container relative">
        <div className="r-head flex flex-col relative">
          <span className="orangeText text-4xl mb-4">Best Choices</span>
          <span className="primaryText text-2xl">Popular Residencies</span>
        </div>
        <Swiper className="relative" {...sliderSettings}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="r-card flex flex-col justify-start m-auto w-[75%] gap-1 mt-12 text-wrap hover:scale-[1.025] hover:cursor-pointer hover:transition-all hover:duration-200">
                <img src={card.image} width={270} alt="" />
                <span className=" text-2xl r-price font-semibold">
                  <span className="orangeText">$</span>
                  <span className="text-gray-500">{card.price}</span>
                </span>
                <span className="primaryText text-xl">{card.name}</span>
                <span className="secondaryText text-xs">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Residencies;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="r-buttons flex gap-2 mt-5">
      <button
        className="bg-zinc-300 p-2 rounded-sm cursor-pointer"
        onClick={() => swiper.slidePrev()}
      >
        &lt;
      </button>
      <button
        className="bg-zinc-300 p-2 rounded-sm cursor-pointer"
        onClick={() => swiper.slideNext()}
      >
        &gt;
      </button>
    </div>
  );
};
