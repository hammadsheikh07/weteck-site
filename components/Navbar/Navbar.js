import React from "react";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-14 mt-4">
      <div>
        <Image src="/WeteckLogo.png" width={"150px"} height={"50px"} />
      </div>
      <div>
        <ul className="text-textcolor flex justify-between font-textfont items-center  space-x-4">
          <a href="">
            {" "}
            <li className="">Our Services</li>
          </a>
          <hr className="border border-solid border-textcolor h-6"></hr>
          <a href="">
            {" "}
            <li className="">Portfolio</li>
          </a>
          <hr className="border border-solid border-textcolor h-6"></hr>
          <a href="">
            {" "}
            <li className="">About us</li>
          </a>
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
