import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/pennyproject.png'
import bookImg from '../public/assets/projects/Screenshot-for-portfolio.png'
import beerImg from '../public/assets/projects/Screenshot-for-first-prjt.png'
import expImg from '../public/assets/projects/Expense Tracker.png'



const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-black">Projects</p>
        <h2 className="py-4">What I Have Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
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
              <Link href="https://penny-thoughts.herokuapp.com/ ">
                <p className="text-center py-3 rounded-lg bg-white text-black font-bold text-lg cursor-pointer">
                  View on Heroku
                </p>
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={bookImg}
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                The Story Keepers
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                Express MongoDB Bootstrap
              </p>
              <Link href="http://storykeepers.herokuapp.com/ ">
                <p className="text-center py-3 rounded-lg bg-white text-black font-bold text-lg cursor-pointer">
                  View on Heroku
                </p>
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={beerImg}
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Sip and Read
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                Html CSS Javascript{" "}
              </p>
              <Link href="https://kimberlyannyo.github.io/sip-and-read ">
                <p className="text-center py-3 rounded-lg bg-white text-black font-bold text-lg cursor-pointer">
                  View on Git Hub
                </p>
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={expImg}
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Udemy Expense Tracker project
              </h3>
              <p className="pb-4 pt-2 text-white text-center">React, Jsx</p>
              <Link href="https://main.d2us370xh7t5bp.amplifyapp.com/">
                <p className="text-center py-3 rounded-lg bg-white text-black font-bold text-lg cursor-pointer">
                  View on AWS Amplify
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects