"use client";
import { useState, useEffect } from "react";

import "@fortawesome/fontawesome-free/css/all.min.css";
type NavbarPropsType = {
  aboutCol?: any;
  faqCol?: any;
  children?: any;
};
type QuestionPropsType = {
  text?: any;
  answer?: any;
};
export const Question = (props: QuestionPropsType) => {
  const [but, setBut] = useState([
    `transition duration-[500ms] fas fa-arrow-down`,
    `hidden`,
  ]);
  const iconStyle = `float-right text-black inline ${but[0]}`;
  const questionStyle = `text-[1.5rem] font-['Outfit'] font-semibold border-b-[1px] border-silver w-[60%] questionScreen:w-full ml-[20%] questionScreen:ml-[0%] mt-[2%] p-4 mb-[2%]`;
  const answerStyle = `font-normal text-[1rem] ${but[1]} mt-[5%]`;
  return (
    <>
      <div>
        <div className={questionStyle}>
          {props.text}{" "}
          <i
            className={iconStyle}
            onClick={() => {
              if (
                but[0] === "transition duration-[500ms] fas fa-arrow-down" ||
                but[0] === "fas fa-arrow-down"
              ) {
                setBut([
                  `transition duration-[500ms] rotate-180 fas fa-arrow-down`,
                  `transition-all duration-[500ms] block`,
                ]);
              } else {
                setBut([
                  `transition duration-[500ms] fas fa-arrow-down`,
                  `transition-all duration-[500ms] hidden`,
                ]);
              }
            }}
          ></i>
          <div className={answerStyle}>{props.answer}</div>
        </div>
      </div>
    </>
  );
};
export const Footer = () => {
  return (
    <>
      <script src="https://unpkg.com/browse/ionicons@4.2.4/dist/fonts/"></script>
      <footer className="bg-blackGood h-[300px]">
        <p className="text-white text-[15px] w-[60%] px-5 pb-5 pt-8 ml-[20%] text-center border-silverBord border-b-[2px]">
          Contact us with any questions you have! We hope you have a good day
          and would like to see you at the competition!
        </p>
        <img
          src="https://media.discordapp.net/attachments/834855883623235605/1262206388365693061/mecweb.png?ex=6695c0cd&is=66946f4d&hm=ec1aa4a9fe441b42ce409d1711771ff7e018fbdaa94a60e2ed32eeb039707e9b&=&format=webp&quality=lossless&width=1359&height=770"
          className="w-[120px] ml-[45%]"
          alt="MecIcon"
        />
        <p>
          <img
            src="https://media.discordapp.net/attachments/834855883623235605/1262213374377332828/image.png?ex=6695c74f&is=669475cf&hm=95b1556ca8e5931b5ef737ae9795c040bf534a6c74b7d3e5182f7e78c27d7fd1&=&format=webp&quality=lossless&width=814&height=519"
            className="h-[30px] inline ml-[44%] "
            alt="Join us on youtube "
          />
          <img
            src="https://media.discordapp.net/attachments/834855883623235605/1262213223755677746/image.png?ex=6695c72b&is=669475ab&hm=1b314ac20ba86db9d8c548ca1379b138769759748ed4659916badfb54e0e00b8&=&format=webp&quality=lossless&width=633&height=554"
            className="h-[30px] inline"
            alt="Join us on instagram "
          />
          <img
            src="https://media.discordapp.net/attachments/834855883623235605/1262213158622330952/image.png?ex=6695c71b&is=6694759b&hm=59fad40b8a8fb3bcafd8513c78f251f16e1a9daf2034bedfa75a5d83f3acae2f&=&format=webp&quality=lossless&width=655&height=506"
            className="h-[30px] inline"
            alt="Join us on discord "
          />
          <img
            src="https://media.discordapp.net/attachments/834855883623235605/1262213097230434375/image.png?ex=6695c70d&is=6694758d&hm=6744f8ba2d91f3511d7e6c5d9a8d8904ebe4a99441d6758dfb75f108dfe559df&=&format=webp&quality=lossless&width=642&height=536"
            className="h-[30px] inline"
            alt="Join us on twitter "
          />
        </p>
      </footer>
    </>
  );
};

export const Navbar = (props: NavbarPropsType) => {
  const [ulStyle, setDropStyle] = useState(`hidden`);
  const faqStyle = `block py-2 px-3 ${props.faqCol} rounded mt-2 hover:bg-gray-100 md:hover:bg-transparent transition duration-[500ms] md:hover:text-lightBlue md:p-0   dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700`;
  const aboutStyle = `block py-2 px-3 ${props.aboutCol} rounded mt-2 hover:bg-gray-100 md:hover:bg-transparent transition duration-[500ms] md:hover:text-lightBlue md:p-0   dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700`;
  return (
    <>
      <nav className="bg-white font-['Outfit'] fixed w-full z-20 top-0 start-0 text-[23px] opacity-80">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://media.discordapp.net/attachments/834855883623235605/1262149280454541312/wEqE3sbksPlmgAAAABJRU5ErkJggg.png?ex=6696345e&is=6694e2de&hm=c6fad1097c4435e849587d79456447c8c92f0960034a1a65a18df95695faad1f&=&format=webp&quality=lossless&width=1810&height=1038"
              className="h-[70px]"
              alt="Flowbite Logo"
            />
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <a href="https://www.remove.bg/" target="_blank">
              <button
                type="button"
                className="text-white bg-lightBlue transition duration-[500ms] text-[100%] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full px-6 py-1 text-center "
              >
                Register
              </button>
            </a>
            <p
              data-collapse-toggle="navbar-sticky"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden transition duration-[500ms] hover:bg-lightBlue focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-blue-500 dark:hover:bg-lightBlue dark:focus:ring-blue-700"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={() => {
                ulStyle === `hidden`
                  ? setDropStyle(
                      `text-[20px] md:hidden mt-2 ml-[5%] w-[90%] float-left bg-white`
                    )
                  : setDropStyle(`hidden`);
              }}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </p>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
              <li>
                <a href="/about" className={aboutStyle} aria-current="page">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://attend.ieee.org/r2sac-2020/wp-content/uploads/sites/175/2020/01/MicroMouse_Rules_2020.pdf"
                  className="block py-2 px-3 text-gray-900 rounded mt-2 hover:bg-gray-100 md:hover:bg-transparent transition duration-[500ms] md:hover:text-lightBlue md:p-0   dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Rules
                </a>
              </li>
              <li>
                <a href="/faq" className={faqStyle}>
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
        <ul className={ulStyle}>
          <a href="/about">
            <li className="bg-greyGood py-4 pl-8 mb-4 rounded-full transition duration-[700ms] hover:bg-silverBord hover:text-white">
              About Us{" "}
              <i className="fas fa-arrow-up rotate-45 float-right mr-[50px]"></i>
            </li>
          </a>
          <a
            href="https://attend.ieee.org/r2sac-2020/wp-content/uploads/sites/175/2020/01/MicroMouse_Rules_2020.pdf"
            target="_blank"
          >
            <li className="bg-greyGood py-4 pl-8 mb-4 rounded-full transition duration-[700ms] hover:bg-silverBord hover:text-white">
              Rules{" "}
              <i className="fas fa-arrow-up rotate-45 float-right mr-[50px]"></i>
            </li>
          </a>

          <a href="/faq">
            <li className="bg-greyGood py-4 pl-8 mb-4 rounded-full transition duration-[700ms] hover:bg-silverBord hover:text-white">
              FAQ{" "}
              <i className="fas fa-arrow-up rotate-45 float-right mr-[50px]"></i>
            </li>
          </a>
        </ul>
      </nav>

      <div className="h-[100px]"></div>
    </>
  );
};
