import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../img/logo2.png";

const Header = () => {
  const [isActive, setIsActive] = useState(true)
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(()=>{
window.addEventListener('scroll', ()=>{
  window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
})
  })

  return (
    <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-10'} fixed w-full z-10 transition-all `}>
      <div className="container mx-auto flex justify-between items-center h-full">
        <Link to={"/"}>
          <div>
            <img className="w-[40px]" src={logo} alt="" />
          </div>
        </Link>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative "
        >
          <BsBag className="text-2xl " />

          <div
            className="absolute -right-2 -bottom-2 bg-red-500 text-[12px]
        w-[18px] h-[18px] text-white rounded-full 
        flex justify-center items-center"
          >
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
