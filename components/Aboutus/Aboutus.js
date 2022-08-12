import React from "react";
import Image from "next/image";
const Aboutus = () => {
  return (
    <div>
      <div className="px-16 text-textcolor font-textfont">
        <div className="flex items-center justify-between">
          <Image
            src={require("/assets/Weteck Homepage Assets/Scenes07.svg")}
            width={"550px"}
          />
          <div className="flex items-start  w-1/2">
            <hr className="mt-5 w-80"></hr>
            <div className="ml-3 flex flex-col">
              <h1 className="text-head2 font-bold">About us</h1>
              <div className="mt-8">
                <h1 className="text-head3 font-bold">
                  Simple! Our mission is to become the best
                </h1>
                <h1 className="text-sm mt-8 font-light">
                  WeTeck is an IT company that focuses on customized software
                  solutions for its valuable customers with the utmost
                  dedication, enthusiasm, and sincerity. We have a prime focus
                  on understanding the client’s needs and providing them with
                  our expertise for the best optimal software system. WeTeck has
                  built a well-experienced team that can provide you ultimate
                  assurance for the web, software development,quality assurance,
                  IT training, and consultancy.
                </h1>
              </div>
              <div className="flex justify-between font-textfont mt-12">
                <button className="text-sm uppercase rounded-full p-3 w-56 bg-gradient-to-b from-btnclr2 to-btnclr1">Learn more</button>
                <button className="text-sm uppercase border border-solid border-textcolor rounded-full p-3 w-56">Portfolio</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
