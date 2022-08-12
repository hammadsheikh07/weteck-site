import React from "react";

const Analytics = () => {
  return (
    <div className="text-textcolor font-textfont mt-24 text-center">
      <h1 class="text-body1 text-center">Your trust gives us strength</h1>
      <h1 class="text-head1 font-bold text-center">To Give Out Our Best</h1>
      <div className="flex">
        <div className="mt-10 mx-auto flex justify-center items-center bg-gradient-to-b from-conclr1 to-conclr2 rounded-full space-x-24 py-10 px-52">
          <div>
            <h1 className="text-head1 font-bold text-center">16K</h1>
            <h1 className="text-body1 text-center">Clients</h1>
          </div>
          <hr className="border border-solid border-textcolor h-16"></hr>
          <div>
            <h1 className="text-head1 font-bold text-center">189+</h1>
            <h1 className="text-body1 text-center">Team Members</h1>
          </div>
          <hr className="border border-solid border-textcolor h-16"></hr>
          <div>
            <h1 className="text-head1 font-bold text-center">13K</h1>
            <h1 className="text-body1 text-center">Active Work</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
