import React from "react";

import Image from "next/image";
const Services = () => {
  return (
    <div className="font-textfont text-textcolor">
      <div className="mt-20 flex flex-col">
        <h1 className="text-body1 font-light text-center">
          We are here to provide
        </h1>
        <h1 className="text-head2 text-center font-bold">
          Experts Services To Change Business
        </h1>
        <div className="mx-auto flex flex-wrap mt-10 w-5/6 justify-around">
          <div className="mt-10 flex items-center w-100 bg-gradient-to-b from-conclr1 to-conclr2 justify-between py-8 rounded-xl">
            <Image
              src={require("/assets/Weteck Homepage Assets/Component 8 – 1.svg")}
              width={"300px"}
            />
            <div>
              <h1 className="text-head3 font-bold">Software Development</h1>
              <h1 className="text-body1">
                WeTeck helps its customers to build an economical and optimized
                software system.{" "}
                <span className="text-learnmore">Learn More</span>
              </h1>
            </div>
          </div>
          <div className="mt-10 flex items-center w-100 bg-gradient-to-b from-conclr1 to-conclr2 justify-between py-8 rounded-xl">
            <Image
              src={require("/assets/Weteck Homepage Assets/undraw_usability_testing_re_uu1g.svg")}
              width={"300px"}
            />
            <div>
              <h1 className="text-head3 font-bold">Quality Assurance</h1>
              <h1 className="text-body1">
                Our qualified quality assurance teams and software testers
                thoroughly test the system.{" "}
                <span className="text-learnmore">Learn More</span>
              </h1>
            </div>
          </div>
          <div className="mt-10 flex items-center w-100 bg-gradient-to-b from-conclr1 to-conclr2 justify-between py-8 rounded-xl">
            <Image
              src={require("/assets/Weteck Homepage Assets/undraw_pair_programming_re_or4x.svg")}
              width={"300px"}
            />
            <div>
              <h1 className="text-head3 font-bold">IT Consultancy</h1>
              <h1 className="text-body1">
                We offer IT consultation sessions that can help you to
                digitalize your business or institution. <br></br>
                <span className="text-learnmore">Learn More</span>
              </h1>
            </div>
          </div>
          <div className="mt-10 flex items-center w-100 bg-gradient-to-b from-conclr1 to-conclr2 justify-between py-8 rounded-xl">
            <Image
              src={require("/assets/Weteck Homepage Assets/undraw_online_popularity_re_nm0s.svg")}
              width={"300px"}
            />
            <div>
              <h1 className="text-head3 font-bold">User Friendly Design</h1>
              <h1 className="text-body1">
                WeTeck has a well-qualified team of designers that ensures the
                responsiveness of the system.{" "}
                <span className="text-learnmore">Learn More</span>
              </h1>
            </div>
          </div>
          <div className="mt-10 flex items-center w-100 bg-gradient-to-b from-conclr1 to-conclr2 justify-between py-8 rounded-xl">
            <Image
              src={require("/assets/Weteck Homepage Assets/undraw_visionary_technology_re_jfp7.svg")}
              width={"300px"}
            />
            <div>
              <h1 className="text-head3 font-bold">Professional Trainings</h1>
              <h1 className="text-body1">
                We offer professional IT training in a productive environment
                that helps its students to learn. <br></br>
                <span className="text-learnmore">Learn More</span>
              </h1>
            </div>
          </div>
          <div className="mt-10 flex items-center w-100 bg-gradient-to-b from-conclr1 to-conclr2 justify-between py-8 rounded-xl">
            <Image
              src={require("/assets/Weteck Homepage Assets/undraw_building_websites_i78t.svg")}
              width={"300px"}
            />
            <div>
              <h1 className="text-head3 font-bold">Interships</h1>
              <h1 className="text-body1">
                WeTeck also offers many internships on different technology
                stacks. We allow our students to implement.{" "}
                <span className="text-learnmore">Learn More</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
