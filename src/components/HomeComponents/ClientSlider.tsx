"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

// Image sources (Ensure they are inside the public/assets folder)
const images = [
    { src: "/assets/client/img.png" },
    { src: "/assets/client/img2.png" },
    { src: "/assets/client/img3.png" },
    { src: "/assets/client/img4.png" },
    { src: "/assets/client/img5.png" },
    { src: "/assets/client/img6.png" },
    { src: "/assets/client/img7.png" },
];

const ClientsSlider = () => {
    return (
        <div className="clients w-full py-6 mt-8">
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
                    640: { slidesPerView: 3 },
                    768: { slidesPerView: 3 },
                    1050: { slidesPerView: 4 },
                }}
            >
                {images.map((item, index) => (
                    <SwiperSlide key={index} className="flex justify-center">
                        <Link href={item.src} target="_blank" className="clientBox flex justify-center">
                            <div className="w-[250px] aspect-[3/2] relative">
                                <Image
                                    src={item.src}
                                    alt={`Client ${index}`}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ClientsSlider;
