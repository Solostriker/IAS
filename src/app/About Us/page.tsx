import Image from "next/image";
import "../globals.css";
import { phosphate } from "../fonts";
import {Navbar, Footer} from "../components";

export default function About() {
  return (
    <>
        <Navbar
          aboutCol="text-lightBlue underline underline-offset-8"
          faqCol="text-black"
        />
      <div className="flex flex-col items-center mb-32">
        <div className="bg-[#5FC3E4] px-16 py-16 mb-12 text-white">
          <h1 className={`${phosphate.variable} font-sans text-6xl mb-5`}>
            MISSION STATEMENT
          </h1>
          <p className="text-lg">
            insert text here
          </p>
        </div>
        <div className="px-16">
          <h1
            className={`${phosphate.variable} font-sans text-6xl text-center mb-20`}
          >
            MEET THE TEAM
          </h1>
          <div className="grid grid-cols-3 gap-[10rem]">
            <div className="font-bold text-center">
              <h1>Sunkalp Chandra</h1>
              <h1 className="text-[#5FC3E4]">Founder/CEO</h1>
            </div>
            <div className="font-bold text-center">
              <h1>Medhansh Puri</h1>
              <h1 className="text-[#5FC3E4]">Founder/CEO</h1>
            </div>
            <div className="font-bold text-center">
              <h1>insert name here</h1>
              <h1 className="text-[#5FC3E4]">Head of Advertising</h1>
            </div>
            <div className="font-bold text-center">
              <h1>insert name here</h1>
              <h1 className="text-[#5FC3E4]">CTO</h1>
            </div>
            <div className="font-bold text-center">
              <h1>insert name here</h1>
              <h1 className="text-[#5FC3E4]">Head of Outreach</h1>
            </div>
            <div className="font-bold text-center">
              <h1>insert name here</h1>
              <h1 className="text-[#5FC3E4]">Head of Seminar</h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
