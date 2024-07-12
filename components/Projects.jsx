import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/pennyproject.png'
import bookImg from '../public/assets/projects/Screenshot-for-portfolio.png'
import beerImg from '../public/assets/projects/Screenshot-for-first-prjt.png'
import expImg from '../public/assets/projects/Expense Tracker.png'
import MedscanMap from "../public/assets/projects/Medscan Map screen shot.png"
import MedscanTest from "../public/assets/projects/Medscan test history screen shot.png"
import MobileImage from "../public/assets/projects/Screenshot 2023-05-12 104708.png"



const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-black">Projects</p>
        <h2 className="py-4">What I Have Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#d8d7ed] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={propertyImg}
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                E-Commerce site
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                React MongoDB Apollo Axios
              </p>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#d8d7ed] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={MobileImage}
              height={600}
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Medscan Mobile App
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                React Native, React Native Navigation, Expo Go, React Native
                Maps, React Native Paper, AWS Amplify, HTML, CSS, Formik,
                Javascript.
              </p>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#d8d7ed] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={MedscanMap}
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Medscan Map Screen
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                React, HTML, Material UI, React Leaflet, CSS, Javascript.
              </p>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#d8d7ed] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={MedscanTest}
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Medscan Test History Screen
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                React, HTML, Material UI, CSS, Javascript
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects