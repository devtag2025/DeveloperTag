"use client";

import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Heading from "@/common/Heading";
import pic from "../../../public/test.png";
import { portfolioData } from "@/db/PortfolioData";
import { PortfolioCard } from "../PortfolioCard";

function MorePortfolio() {

    return (
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12">
            <Heading btnText="EXPLORE MORE" headOne="More" headTwo="Projects" headThree="" />

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
                    {portfolioData.map((project, index) => (
                        project.item.previewImage && (
                            <SwiperSlide key={index} className="flex justify-center">
                                <PortfolioCard
                                    key={index}
                                    title={project.item.title}
                                    tagline={project.item.tagLine}
                                    imageUrl={project.item.previewImage}
                                />
                            </SwiperSlide>
                        )
                    ))}
                </Swiper>


            </div>
        </div>
    );
}

export default MorePortfolio;