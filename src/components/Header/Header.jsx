import React, { useState } from "react";
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from "react-outside-click-handler";
const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)

  const getMenuStyles = () => {
    if(document.documentElement.clientWidth <= 768){
      return {right: !menuOpened && "-100%"}
    }
  }
  return (
    <section className="h-wrapper bg-[color:var(--black)]">
      <div className="h-container  innerWidth flex p-[20px] text-[color:var(--secondary)] justify-between relative">
        <img src="./logo.png" alt="logo" width={100} />
        <OutsideClickHandler
        onOutsideClick={()=> setMenuOpened(false)}>
        <div className="h-menu duration-300 ease-in bg-white flex p-6 rounded-md absolute right-16 top-16 z-10  text-black flex-col hover:cursor-pointer gap-5 items-center md:text-inherit md:bg-inherit md:right-0 md:top-0 md:flex-row md:p-5 "
        style={getMenuStyles(menuOpened)}>
          <a href="">Residencies</a>
          <a href="">Our Values</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <button className="button">
            <a href="">Contact</a>
          </button>
        </div>
        </OutsideClickHandler>
        <div className="menu-icon block md:hidden " onClick={()=> setMenuOpened((prev)=> !prev)}>
          <BiMenuAltRight size={30}/>
        </div>
      </div>
    </section>
  );
};

export default Header;
