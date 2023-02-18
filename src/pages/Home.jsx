import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import AOS from "aos";

import me from "../assets/me.webp";
import meArrow from "../assets/me-arrow.png";
//import bubbles
import cssBubble from "../assets/bubbles/css-bubble.png";
import figmaBubble from "../assets/bubbles/figma-bubble.webp";
import htmlBubble from "../assets/bubbles/html-bubble.webp";
import mongoBubble from "../assets/bubbles/mongo.webp";
import nodeBubble from "../assets/bubbles/node-bubble.webp";
import photoshopBubble from "../assets/bubbles/photoshop-bubble.webp";
import reactBubble from "../assets/bubbles/react-bubble.webp";
import jsBubble from "../assets/bubbles/js-bubble.webp";
import firebaseBubble from "../assets/bubbles/firebase-bubble.webp";
import expressBubble from "../assets/bubbles/express-bubble.webp";
import resume from "../assets/Mikhail Loskutov WebDevelper Resume (3).pdf";
import downloadIcon from "../assets/download-button.png";
import mailIcon from "../assets/mail.png";

//mockup projects
import dash from "../assets/projects/dash.png";
import gop from "../assets/projects/gop.png";
import lebarre from "../assets/projects/lebarre.png";

function Home() {
  const { scrollYProgress, scrollXProgress } = useScroll();

  //Mouse coordinates state

  //AOS(animate on scroll) innitialization
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="flex h-fit w-screen flex-col justify-center border-solid">
        <Navbar />
        <div
          className=" mb-4 flex  h-fit w-full flex-wrap pb-4 lg:h-[calc(100vh-9rem)] lg:flex-nowrap "
          data-aos="fade-up"
        >
          <div
            className="flex h-screen w-full  flex-col items-center justify-end rounded-xl bg-gradient-to-br from-cyan-300 to-blue-400 shadow-xl  lg:h-full lg:w-3/5"
            data-aos="fade-up"
          >
            {/* container for introduction with buttons */}
            <div className="flex h-1/2 w-3/4 items-center md:w-4/5 lg:w-1/2 ">
              {/* introduction container */}
              <div>
                <h1 className="font-montseratt text-5xl font-extrabold">
                  Hello! My name is Misha!
                </h1>
                <h2 className="font-montseratt text-3xl font-extrabold">
                  Developer. Designer.
                </h2>
                {/* buttons "hire me" and "projects" container */}
                <div className="mt-7 flex h-1/4 w-full flex-col items-center justify-start md:flex-row">
                  <a href="mailto:mishaloskutov@gmail.com">
                    <button className="mr-2 rounded-xl bg-red-500 px-24 py-6 font-semibold text-cyan-50 transition-all hover:bg-red-300 hover:text-black md:px-9 md:py-3">
                      Email
                    </button>
                  </a>
                  <a href="https://github.com/michaellosdev">
                    <button className="mt-4 rounded-xl px-24 py-6 font-semibold text-cyan-50 transition-all hover:bg-gray-200 hover:text-black md:mt-0 md:px-9 md:py-3">
                      Projects
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="m-8 flex h-24 w-11/12 justify-self-end rounded-xl bg-gradient-to-br from-gray-50 to-gray-300 py-2 text-center font-bold shadow-2xl">
              <div className="flex w-1/3 flex-col justify-center border-r-2 border-blue-200">
                <p>Experience</p>
                <p className="font-normal">2 years</p>
              </div>
              <div className="flex w-1/3  flex-col justify-center border-r-2 border-blue-200">
                <p>Projects Completed</p>
                <p className="font-normal">26</p>
              </div>
              <div className="flex w-1/3 flex-col justify-center">
                <p>Projects in Work</p>
                <p className="font-normal">4</p>
              </div>
            </div>
          </div>

          {/* me container */}
          <div className="relative mt-4 ml-0 flex h-screen  w-full flex-wrap items-start justify-center rounded-xl border-solid bg-gradient-to-br from-cyan-300 to-blue-400 p-4 shadow-xl lg:mt-0 lg:ml-4  lg:h-full lg:w-2/5">
            <h2 className="text-4xl font-normal ">Technologies i'm using:</h2>
            <div className="mb-96 flex flex-row flex-wrap  justify-center">
              {/* bubbles container */}
              <div
                className="right-10  top-96 m-4 w-1/6 drop-shadow-lg"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <img src={cssBubble} alt="css-icon" className="object-fill" />
              </div>
              <div
                className="right-56  top-48 m-4 w-1/6 drop-shadow-lg"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <img src={figmaBubble} alt="css-icon" className="object-fill" />
              </div>
              <div
                className="right-2/3 top-64 m-4 w-1/6 drop-shadow-lg"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <img src={htmlBubble} alt="css-icon" className="object-fill" />
              </div>
              <div
                className="right-3/4 top-3/4 m-4 w-1/6 drop-shadow-lg"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <img
                  src={photoshopBubble}
                  alt="css-icon"
                  className="object-fill"
                />
              </div>
              <div
                className="right-3/4  top-2/4 m-4 w-1/6 drop-shadow-lg"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <img src={reactBubble} alt="css-icon" className="object-fill" />
              </div>
              <div
                className="right-2/4  top-1/4 m-4 w-1/6 drop-shadow-lg"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <img src={mongoBubble} alt="css-icon" className="object-fill" />
              </div>
              <div
                className="right-24  top-1/3 m-4 w-1/6 drop-shadow-lg"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <img src={jsBubble} alt="css-icon" className="object-fill" />
              </div>
              <div
                className="right-12  bottom-36 m-4 w-1/6 drop-shadow-lg "
                data-aos="fade-up"
                data-aos-delay="900"
              >
                <img src={nodeBubble} alt="css-icon" className="object-fill" />
              </div>

              <div className="absolute right-[25%]   bottom-0 w-96 drop-shadow-lg md:right-1/4   ">
                <img src={me} alt="my picture" className="object-fill" />
              </div>
              {/* me arrow */}
              <div className="absolute right-0  bottom-6 w-48 drop-shadow-lg lg:bottom-12   ">
                <img src={meArrow} alt="my picture" className="object-fill" />
              </div>
            </div>
          </div>
        </div>
        {/* my projects container start*/}
        <div className="flex h-fit flex-col pt-8 lg:h-screen lg:flex-row">
          <div className="flex h-fit w-full flex-col items-center justify-center rounded-xl bg-gradient-to-br from-cyan-300 to-blue-400 px-4  py-4 shadow-xl lg:h-full">
            <h2 className="text-center text-4xl font-extrabold uppercase text-gray-800">
              Some of my recent projects
            </h2>
            <div className="flex h-4/5   w-full flex-col items-center justify-center text-2xl font-extrabold text-gray-800 lg:flex-row lg:items-stretch">
              <div className="mx-2 my-4 flex h-[75vh]  w-full flex-col items-center justify-between rounded-lg  bg-gradient-to-br from-rose-200 to-sky-300 py-12 shadow-xl lg:h-full lg:w-2/5">
                <img src={gop} alt="" className="w-7/12" />
                <div className="w-3/4 text-center">
                  <h2 className="my-2">Mobile App 'Gas or Pass'</h2>
                  <div className="mb-2 flex h-12 w-full justify-center">
                    <img src={reactBubble} alt="" className="mx-3 h-full" />
                    <img src={firebaseBubble} alt="" className="mx-3 h-full" />
                    <img src={figmaBubble} alt="" className="mx-3 h-full" />
                  </div>
                </div>
              </div>
              <div className="mx-2 my-4 flex h-[75vh]  w-full flex-col items-center justify-between rounded-lg  bg-gradient-to-br from-rose-200 to-sky-300 py-12 shadow-xl lg:h-full lg:w-2/5">
                <img src={dash} alt="" className="w-5/6" />
                <div className="w-3/4 text-center">
                  <h2 className="my-2">Admin Dashboard</h2>
                  <div className="mb-2 flex h-12 w-full justify-center">
                    <img src={reactBubble} alt="" className="mx-3 h-full" />
                    <img src={nodeBubble} alt="" className="mx-3 h-full" />
                    <img src={mongoBubble} alt="" className="mx-3 h-full" />
                    <img src={expressBubble} alt="" className="mx-3 h-full" />
                  </div>
                </div>
              </div>
              <div className="mx-2 my-4 flex h-[75vh]  w-full flex-col items-center justify-between rounded-lg  bg-gradient-to-br from-rose-200 to-sky-300 py-12 shadow-xl lg:h-full lg:w-2/5">
                <img src={lebarre} alt="" className="w-5/6" />
                <div className="w-3/4 text-center">
                  <h2 className="my-2">Lebarre Catering Website</h2>
                  <div className="mb-2 flex h-12 w-full justify-center">
                    <img src={reactBubble} alt="" className="mx-3 h-full" />
                    <img src={nodeBubble} alt="" className="mx-3 h-full" />
                    <img src={figmaBubble} alt="" className="mx-3 h-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* section 3 start */}
        <div className="flex h-fit w-full flex-col-reverse pt-8 text-center lg:h-screen lg:flex-row">
          <div className="mr-4 mt-4 flex h-fit w-full flex-col items-center justify-center rounded-xl bg-gradient-to-br from-cyan-300 to-blue-400  px-8 py-4 shadow-xl lg:mt-0 lg:h-full lg:w-3/4">
            {/* <div className="m-8 flex h-24 w-full justify-self-end rounded-xl bg-gradient-to-br from-gray-50 to-gray-300 py-2 text-center font-bold shadow-2xl">
              <div className="flex w-1/3 flex-col justify-center border-r-2 border-blue-200">
                <p>Experience</p>
                <p className="font-normal">2 years</p>
              </div>
              <div className="flex w-1/3  flex-col justify-center border-r-2 border-blue-200">
                <p>Projects Completed</p>
                <p className="font-normal">26</p>
              </div>
              <div className="flex w-1/3 flex-col justify-center">
                <p>Projects in Work</p>
                <p className="font-normal">4</p>
              </div>
            </div> */}
            <div className="font-extrabold">
              <h3 className="mb-8 text-5xl">About Me</h3>
              <p className="mb-8 text-justify text-lg font-normal">
                Self-taught Junior Full Stack Web Developer with a passion for
                coding and a natural ability to learn and adapt quickly. With a
                strong focus on front-end and back-end development, I have honed
                my skills through a combination of personal projects and online
                courses, including HTML, CSS, JavaScript, React, Node.js, and
                more. Committed to delivering high-quality, user-friendly
                websites, I have a talent for creating custom solutions that
                meet the unique needs of each client. With a positive attitude
                and a willingness to continuously learn and improve, I am
                confident in my ability to deliver projects that exceed
                expectations and drive business success
              </p>
              <h3 className="mb-8 text-5xl">Experience</h3>
              <p className="text-justify text-lg font-normal">
                <b> Freelancer Web Developer Feb 2022 - present: </b> <br /> I
                have worked as a Freelancer Web Developer. I have helped various
                businesses to achieve their goals in Digital space with my
                skills and expertise. I have Designed and Developed Websites and
                Web Apps for businesses and individuals.
                <p className="text-justify text-lg font-normal">
                  <b>
                    {" "}
                    KOMPAK Junior Web Developer (Remote) July 2020 - Dec 2021
                  </b>{" "}
                  <br />
                  Helped with development and designing websites. Setting up and
                  provide high quality live streams for Sport events.
                </p>
              </p>
              <h3 className="mb-8 mt-8 text-5xl">Education</h3>
              <p className="text-justify text-lg font-normal">
                Bachelor degree in Informational Technologies Belarusian State
                University of Informatics and Radioelectronics(BSUIR)Minsk,
                Belarus 2018
              </p>
            </div>
          </div>
          <div className="flex  lg:w-1/4 lg:flex-col">
            <div className=" flex h-[50vh] w-full flex-col items-center justify-center rounded-xl  bg-gradient-to-br from-cyan-300 to-blue-400 px-4  py-4 shadow-xl md:h-48  lg:mb-2 lg:mr-0 lg:h-[49vh] lg:w-full">
              <div className="flex h-2/3 w-full flex-col items-center justify-center lg:flex-row">
                <div className="h-1/2 w-full rounded-xl p-2 lg:h-5/6 lg:w-1/2">
                  <a href={resume} download="Mikhail_Loskutov_Resume">
                    <div className=" flex h-full w-full flex-col items-center justify-center rounded-xl  bg-gradient-to-br from-white to-gray-300 shadow-xl transition-all hover:from-slate-100 hover:to-gray-400">
                      {" "}
                      <div className="flex h-full w-full flex-col items-center justify-center ">
                        <img src={downloadIcon} alt="" className="h-1/3" />
                        <h3>Download Resume</h3>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="h-1/2 w-full rounded-xl p-2  lg:h-5/6 lg:w-1/2">
                  <a href="mailto:mishaloskutov@gmail.com">
                    <div className=" flex h-full w-full flex-col items-center justify-center rounded-xl  bg-gradient-to-br from-black to-gray-700 shadow-xl transition-all hover:from-gray-800 hover:to-gray-400">
                      {" "}
                      <div className="flex h-full w-full flex-col items-center justify-center">
                        <img src={mailIcon} alt="" className="h-1/3" />
                        <h3 className="text-white">Email me</h3>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <a href="tel:7472311232" className="h-1/3 w-full p-2  lg:h-full">
                <div className="back flex h-full w-full items-center justify-center  rounded-xl bg-gradient-to-br from-rose-200 to-sky-300 shadow-xl transition-all hover:from-gray-200 hover:to-blue-300">
                  <h3 className="text-lg lg:text-3xl">
                    Call me: +1(747)231-1232
                  </h3>
                </div>
              </a>
            </div>
            <div className="mt-0 mb-2 ml-2 hidden  h-full w-1/2 flex-col items-center justify-center rounded-xl bg-gradient-to-br from-cyan-300  to-blue-400 px-4 py-4 shadow-xl md:h-48 lg:ml-0 lg:mt-2 lg:mb-0 lg:flex lg:h-[49vh] lg:w-full"></div>
          </div>
        </div>
        {/* my projects container end*/}
        {/* <footer className="h-48"></footer> */}
      </div>
    </>
  );
}

export default Home;
