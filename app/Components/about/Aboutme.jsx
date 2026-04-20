import React from "react";
import { IoMdClose } from "react-icons/io";
import {
  FaFacebookSquare,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import Divider from "../Divider";
import Image from "next/image";
const Aboutme = () => {
  return (
    <>
      <section>
        <span className="about_banner"></span>
        <div className="container-1">
          <div className="row ">
            <div className="close_button flex justify-end pt-6 text-3xl text-white fixed right-16 top-2">
              <Link href="/">
                <IoMdClose />
              </Link>
            </div>
            <h3 className="text-white opacity-50 text-center text-[15px] pt-[7%] mb-[17px] font-poppins">
              Get to know me
            </h3>
            <h2 className="text-[46px] font-bold font-poppins text-white leading-[100%] text-center mb-8">
              About Me
            </h2>
            <Divider />
            <div className="flex gap-16 pb-25 flex-col md:flex-row">
              <div className="img">
                <Image
                  width={430}
                  height={515}
                  className="max-w-[430px] max-h-[515px]"
                  src="/images/about_person.jpg"
                  alt="about_person"
                />
              </div>
              <div className="text">
                <h3 className="text-green text-2xl font-poppins font-medium mb-[15px]">
                  Who am i?
                </h3>
                <h2 className="text-[31px] font-bold font-poppins text-white tracking-[.5px] mb-4">
                  I'm Lenmuel Del Rosario, <br /> Senior Software Engineer with a strong focus on building eCommerce websites.
                </h2>
                <p className="text-[15px] font-poppins font-normal text-sencond tracking-[.5px]">
                  Based in Philippines, specializing in Shopify Plus, modern JavaScript frameworks, and AI-driven integrations. Dynamic and detail oriented self-taught Web developer with a knack for conceptualizing and developing elegant, user-friendly solutions effectively and efficiently. Possesses a track record of developing a fully functional website. Armed with an extensive understanding of both front and back-end web technologies, to help and contribute for success of my future endeavor..
                </p>
                <div className="mt-8 grid grid-cols-2 gap-8">
                  <div className="flex gap-4">
                    <label className="min-w-[50px] text-[15px] font-poppins font-normal text-white tracking-[.5px] ">
                      Name:
                    </label>
                    <h3 className="text-[15px] font-poppins font-normal text-sencond tracking-[.5px] ">
                      Lenmuel Del Rosario
                    </h3>
                  </div>
                  <div className="flex gap-4">
                    <label className="min-w-[50px] text-[15px] font-poppins font-normal text-white tracking-[.5px] ">
                      Email:
                    </label>
                    <span className="text-[15px] font-poppins font-normal text-green tracking-[.5px] ">
                      lenmueldel@outlook.com
                    </span>
                  </div>
                  {/* <div className="flex gap-4">
                    <label className="min-w-[50px] text-[15px] font-poppins font-normal text-white tracking-[.5px] ">
                      Age:
                    </label>
                    <span className="text-[15px] font-poppins font-normal text-sencond tracking-[.5px] ">
                      29 years
                    </span>
                  </div> */}
                  <div className="flex gap-4">
                    <label className="min-w-[50px] text-[15px] font-poppins font-normal text-white tracking-[.5px] ">
                      Form:
                    </label>
                    <span className="text-[15px] font-poppins font-normal text-sencond tracking-[.5px] ">
                      Central Luzon, Philippines
                    </span>
                  </div>
                </div>
                <div className="mt-12 flex items-center gap-25">
                  {/* <Link
                    href="/ATM Sakayet Hossain Resume.pdf"
                    download="Full Stack Developer (ATM Sakayet Hossain Resume).pdf"
                    className="bg-green text-white font-poppins px-10 py-2 rounded-2xl cursor-pointer"
                  >
                    Download CV
                  </Link> */}
                  <div className="flex gap-3">
                    {/* <Link
                      href="https://www.facebook.com/ATMSakayetHossain"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebookSquare className="text-white text-2xl hover:scale-[1.1] duration-[.3s]" />
                    </Link> */}
                    <Link
                      href="https://www.linkedin.com/in/lenmueldelrosario"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="text-white text-2xl hover:scale-[1.1] duration-[.3s]" />
                    </Link>
                    <Link
                      href="https://github.com/po1206"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="text-white text-2xl hover:scale-[1.1] duration-[.3s]" />
                    </Link>
                    {/* <Link
                      href="https://www.instagram.com/ATMSakayetHossain/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="text-white text-2xl hover:scale-[1.1] duration-[.3s]" />
                    </Link>
                    <Link
                      href="https://www.youtube.com/@ATM-Sakayet-Hossain"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaYoutube className="text-white text-2xl hover:scale-[1.1] duration-[.3s]" />
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutme;
