import React from "react";
import Image from "next/image";
const Introduction = () => {
  return (
    <div className="px-14 flex justify-between items-center flex-col sm:flex-row ">
      <div className="text-textcolor font-textfont text-left">
        <h1 className="text-head2 font-bold">
          We Believe in Providing The Best
        </h1>
        <h1 className="text-head1 font-bold">Customer Service</h1>
        <h1 className="text-head2 font-bold">
          In Addition To High-Quality Softwares
        </h1>
        <div className="w-64 mt-6">
          <h1 className="text-body1 font-bold">
            We build a teamwork relationship with our customers to understand
            their vision and utilize our best expertise to make it a successful
            reality
          </h1>
          <div className="mt-6 flex items-center justify-between">
            <button className="flex w-48 items-center justify-center uppercase rounded-full bg-gradient-to-r from-btnclr2 to-btnclr1 p-2 text-xs">
              <Image src="/cal.png" width={"24px"} height={"24px"} />
              Book an Appointment
            </button>
            <div className="bg-secbtnclr rounded-full flex justify-center items-center w-10 h-10 pt-1">
              <button className="">
                <Image src={"/play.png"} width={"20px"} height={"20px"} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image
          className="mt-20"
          src={require("/assets/Weteck Homepage Assets/Scenes01.svg")}
          width={"600px"}
        />
      </div>
    </div>
  );
};

export default Introduction;
