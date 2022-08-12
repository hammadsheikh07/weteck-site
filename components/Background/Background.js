import React from "react";
import Image from "next/image";
const Background = () => {
  return (
    <div className="">
      <div className="absolute w-10/12 -top-1/4 -right-72 -z-10">
        <Image
          src={require("/assets/Weteck Homepage Assets/Component 4 – 1.svg")}
        />
      </div>

      <div className="absolute w-1/2 top-full right-1/2 -z-10 mt-32">
        <Image
          src={require("/assets/Weteck Homepage Assets/Component 3 – 1.svg")}
        />
      </div>

      <div className="absolute -bottom-[1350px] -z-10  -right-96 w-1/2 -z-10'">
        <Image
          src={require("/assets/Weteck Homepage Assets/Component 5 – 1.svg")}
        />
      </div>

      <div className="absolute -bottom-[1850px]  -left-96 w-2/3 -z-10">
        <Image
          src={require("/assets/Weteck Homepage Assets/Component 6 – 1.svg")}
        />
      </div>
    </div>
  );
};

export default Background;
