"use client"
import React from 'react'
import abt from "../../../public/pic.jpg"
import Image from 'next/image';

function AboutIntro() {
    return (
        <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0" >
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto" id='about'>
                <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
                    <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                        <div className="w-full flex-col justify-center items-start gap-8 flex">
                            <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                    <h1 className="my-8 text-4xl font-bold text-white">
                                        What is  <span style={{ color: "aqua" }}>DeveloperTag?</span> an introduction
                                    </h1>
                                    <p className="text-white text-base font-light leading-relaxed lg:text-start text-center">
                                        At DeveloperTag, we’re a team of passionate developers, designers, and tech enthusiasts dedicated to building cutting-edge digital solutions. With 50+ successful collaborations, we specialize in software development, mobile apps, e-commerce platforms, and intuitive design, delivering solutions that set new industry benchmarks. Our mission is to lead in software development and consulting by constantly innovating, experimenting, and staying ahead of trends. Whether you're a startup, mid-sized business, or enterprise, we believe in partnerships that drive mutual success—helping you build, scale, and thrive in the digital world. Let’s create something amazing together!
                                    </p>
                                </div>
                            </div>
                            <div className="w-full flex-col justify-center items-start gap-6 flex">
                                <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                    <div className="w-full h-full p-3.5 rounded-xl border border-gray-500 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex" data-aos="fade-up">
                                        <h4 className="text-gray-100 text-2xl font-bold font-manrope leading-9">10+</h4>
                                        <p className="text-gray-200 text-base font-normal leading-relaxed">
                                            Year in Business
                                        </p>
                                    </div>
                                    <div className="w-full h-full p-3.5 rounded-xl border border-gray-500 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex" data-aos="fade-up">
                                        <h4 className="text-gray-100 text-2xl font-bold font-manrope leading-9">500+</h4>
                                        <p className="text-gray-200 text-base font-normal leading-relaxed">
                                            Team members
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                    <div className="w-full p-3.5 rounded-xl border border-gray-500 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex" data-aos="fade-up">
                                        <h4 className="text-gray-100 text-2xl font-bold font-manrope leading-9">600+</h4>
                                        <p className="text-gray-200 text-base font-normal leading-relaxed">
                                            International Clients
                                        </p>
                                    </div>
                                    <div className="w-full h-full p-3.5 rounded-xl border border-gray-500 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex" data-aos="fade-up">
                                        <h4 className="text-gray-100 text-2xl font-bold font-manrope leading-9">700+</h4>
                                        <p className="text-gray-200 text-base font-normal leading-relaxed">
                                            Projects Done
                                        </p>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                    <div className="w-full lg:justify-start justify-center items-start flex">
                        <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-[#010310] rounded-3xl sm:border border-gray-500 relative">
                            <Image
                                className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                                src={abt}
                                alt="About Us image"
                                data-aos="zoom-in"
                                width={500} // Adjust width as needed
                                height={500} // Adjust height as needed
                                layout="responsive" // Ensures responsiveness
                            />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutIntro;