"use client";

import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Heading from "@/common/Heading";
import pic from "../../../public/test.png";
import ProfileCard from "./TeamCard";

interface TeamMember {
    id: number;
    name: string;
    title: string;
    linkedIn: string;
    img: any;
}

function Team() {
    const teamData: TeamMember[] = [
        { id: 1, name: "Daniyal Sohail", title: "MERN STACK DEV", linkedIn: "https://www.linkedin.com/in/daniyalsohail169/", img: pic },
        { id: 2, name: "Daniyal Sohail", title: "MERN STACK DEV", linkedIn: "https://www.linkedin.com/in/daniyalsohail169/", img: pic },
        { id: 3, name: "Daniyal Sohail", title: "MERN STACK DEV", linkedIn: "https://www.linkedin.com/in/daniyalsohail169/", img: pic },
        { id: 4, name: "Daniyal Sohail", title: "MERN STACK DEV", linkedIn: "https://www.linkedin.com/in/daniyalsohail169/", img: pic },
        { id: 5, name: "Daniyal Sohail", title: "MERN STACK DEV", linkedIn: "https://www.linkedin.com/in/daniyalsohail169/", img: pic },
        { id: 6, name: "Daniyal Sohail", title: "MERN STACK DEV", linkedIn: "https://www.linkedin.com/in/daniyalsohail169/", img: pic },
    ];




    return (
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12">
            <Heading btnText="Our Team" headOne="Meet Our" headTwo="Dynamic" headThree="Team" />

            <div className="w-full max-w-6xl mx-auto p-4 ">
                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    slidesPerView={1}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    speed={1000}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1050: { slidesPerView: 3 },
                    }}


                >
                    {teamData.map((data, index) => (
                        <SwiperSlide key={index} className="flex justify-center">
                            <ProfileCard name={data.name} title={data.title} imageUrl={data.img} linkedInUrl={data.linkedIn} />
                        </SwiperSlide>
                    ))}
                </Swiper>


            </div>
        </div>
    );
}

export default Team;