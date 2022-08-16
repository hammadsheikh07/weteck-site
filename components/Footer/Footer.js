import React from "react";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
const Footer = () => {
  return (
    <div className="bg-backcolor font-textfont text-textcolor mt-40 pt-28 flex flex-col pb-10 ">
      <div className="mx-auto flex flex-col">
        <div className="flex justify-between space-x-44">
          <div>
            <div className="bg-textcolor w-8 h-8 rounded-full p-1">
              <Image src="/google.png" height={"50px"} width={"50px"} />
            </div>
            <div className="w-52 text-body2 mt-4">
              <p>
                Proin ac quam et lectus vestibulum blandit. Nunc maximus nibh at
                placerat tincidunt. Nam sem lacus, ornare non ante sed,
                ultricies fringilla massa.
              </p>
            </div>
          </div>
          <div>
            <p className="text-body1 font-bold">Company</p>
            <div className="flex space-x-24">
              <div>
                <ul className="text-body2 mt-7 flex flex-col">
                  <li>
                    <a>About us</a>
                  </li>
                  <li>
                    <a>Contact us</a>
                  </li>
                  <li>
                    <a>Careers</a>
                  </li>
                  <li>
                    <a>Support</a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="text-body2 mt-7 flex flex-col">
                  <li>
                    <a>FAQ</a>
                  </li>
                  <li>
                    <a>Terms</a>
                  </li>
                  <li>
                    <a>Privacy</a>
                  </li>
                  <li>
                    <a>Blog</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <p className="text-body1 font-bold">Contact</p>
            <div className="text-body2 mt-7">
              <p>Phone: +1 605 722 2032</p>
              <p>Email: example@mail.com</p>
              <p>Address: Charlotte, North Carolina, United States</p>
            </div>
          </div>
        </div>
        <div>
          <hr className="my-6 border border-solid border-textcolor "></hr>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="pr-2">
              <SocialIcon
                url="https://facebook.com "
                bgColor="#037BDB"
                fgColor="#FFFFFF"
                style={{ height: 30, width: 30 }}
              />
            </span>
            <span className="pr-2">
              <SocialIcon
                url="https://twitter.com "
                bgColor="#037BDB"
                fgColor="#FFFFFF"
                style={{ height: 30, width: 30 }}
              />
            </span>
            <span className="pr-2">
              <SocialIcon
                url="https://instagram.com "
                bgColor="#037BDB"
                fgColor="#FFFFFF"
                style={{ height: 30, width: 30 }}
              />
            </span>
            <span className="pr-2">
              <SocialIcon
                url="https://youtube.com "
                bgColor="#037BDB"
                fgColor="#FFFFFF"
                style={{ height: 30, width: 30 }}
              />
            </span>
          </div>
          <div className="text-body1"><p>© 2022 — All Rights Reserved</p></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
