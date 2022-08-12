import React from "react";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-14 mt-4">
      <div>
        <Image src="/wetecklogo.png" width={"150px"} height={"50px"}/>
      </div>
      <div>
        <ul className="text-textcolor flex justify-between font-textfont divide-x divide-solid divide-textcolor">
         <a href=""> <li className="px-3">Our Services</li></a>
         <a href=""> <li className="px-3">Portfolio</li></a>
         <a href=""> <li className="px-3">About us</li></a>
        </ul>
      </div>
      <div>
        <button className="background-transparent border-2 border-solid border-textcolor rounded-full p-3 text-textcolor font-textfont w-36">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Navbar;
