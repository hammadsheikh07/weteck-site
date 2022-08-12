import React from "react";

const Portfolio = () => {
  return (
    <div className="bg-backcolor -z-30 font-textfont text-textcolor pt-40  mt-40 pb-10">
      <div className=" flex flex-col items-center justify-center">
        <h1 className="text-body1 font-light text-center">Awesome Portfolio</h1>
        <h1 className="text-head1 text-center font-bold">
          We Have A Great Portfolio To Check
        </h1>
        <div className="flex flex-row mx-auto mt-20 space-x-8">
          <div className="bg-gradient-to-b from-conclr1 to-conclr2 rounded-lg w-56 flex flex-col ">
            <div className="bg-textcolor h-28 rounded-lg"></div>
            <div className="text-center py-5">
              <h1 className="text-head3 font-bold">Web Design Project</h1>
              <h1 className="text-body1">UX/UI Design</h1>
            </div>
          </div>
          <div className="bg-gradient-to-b from-conclr1 to-conclr2 rounded-lg w-56 flex flex-col ">
            <div className="bg-textcolor h-28 rounded-lg"></div>
            <div className="text-center py-5">
              <h1 className="text-head3 font-bold">Web Design Project</h1>
              <h1 className="text-body1">UX/UI Design</h1>
            </div>
          </div>
          <div className="bg-gradient-to-b from-conclr1 to-conclr2 rounded-lg w-56 flex flex-col ">
            <div className="bg-textcolor h-28 rounded-lg"></div>
            <div className="text-center py-5">
              <h1 className="text-head3 font-bold">Web Design Project</h1>
              <h1 className="text-body1">UX/UI Design</h1>
            </div>
          </div>
          <div className="bg-gradient-to-b from-conclr1 to-conclr2 rounded-lg w-56 flex flex-col ">
            <div className="bg-textcolor h-28 rounded-lg"></div>
            <div className="text-center py-5">
              <h1 className="text-head3 font-bold">Web Design Project</h1>
              <h1 className="text-body1">UX/UI Design</h1>
            </div>
          </div>
        </div>
        <div className="flex space-x-4 mt-14">
            <button className="px-3 py-1 bg-gradient-to-b from-btnclr1 to-btnclr2 rounded-full">&#60;</button>
            <button className="px-3 py-1 bg-gradient-to-b from-btnclr1 to-btnclr2 rounded-full">&#62;</button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
