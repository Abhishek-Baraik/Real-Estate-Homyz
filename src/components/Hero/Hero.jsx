import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import './Hero.css'
import {motion} from 'framer-motion'
const Hero = () => {
  return (
    <section className="hero-wrapper text-white relative p-4 bg-[color:var(--black)]">
      <div className="hero-container innerWidth flex items-center justify-around">
        {/* left side */}
        <div className="hero-left">
          <div className="hero-title relative mb-[40px] font-semibold text-6xl leading-[4rem] z-[1]">
            <div className="orange-circle h-[4rem] w-[4rem] bg-gradient-to-l from-orange-300 to-orange-500 absolute -top-[10%] z-[-1] right-[28%] rounded-full" />
            <motion.h1 initial={{y:"2rem",opacity:0}} animate={{y:0,opacity:1}} transition={{duration:4,type:"spring"}} className="heading">
              Discover <br /> Most Suitable <br /> Property
            </motion.h1>
          </div>
          <div className="hero-desc flex flex-col leading-5 mb-[50px]">
            <span className="secondaryText">Find a variety of properties that suit you very easily</span>
            <span className="secondaryText">Forget all difficulties in finding a residence for you</span>
          </div>
          <div className="search-bar gap-4 bg-slate-50 flex items-center justify-between p-[8px] rounded-md">
            <HiLocationMarker color="var(--blue)" size={30} className="scale-[3] md:scale-[1]" />
            <input
              type="text"
              className="border-none outline-none text-black bg-slate-300" 
            />
            <button className="button search-button ">Search</button>
          </div>
          <div className="stats flex w-full justify-between mt-[55px]">
            <div className="stat flex flex-col">
              <span>
                <CountUp start={9330} end={9680} duration={5} className="countup md:text-4xl" />
                <span className='text-orange-400 text-3xl'>  +</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>
            <div className="stat flex flex-col ">
              <span>
                <CountUp start={1950} end={2500} duration={5} className="countup md:text-4xl" />
                <span className='text-orange-400 text-3xl'>  +</span> 
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>
            <div className="stat flex flex-col">
              <span>
                <CountUp end={28} duration={5} className="countup md:text-4xl"  />
                <span className='text-orange-400 text-3xl'>  +</span>
              </span>
              <span className="secondaryText">Award Winning</span>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="hero-right flex justify-center mb-10">
          <motion.div initial={{x:"5rem",opacity:0}} animate={{x:0,opacity:1}} transition={{duration:4,type:"spring"}} className="image-container md:w-[30rem] md:h-[35rem] overflow-hidden rounded-t-[15rem]  border-[8px] border-[rgba(255,255,255,0.12)]">
            <img src="./hero-image.png" className="h-full w-full object-fill" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
