"use client"

import Image from "next/image";
import { usePathname } from "next/navigation";
import { serviceBoxData } from "@/db/ServiceData";

const ServiceBox = () => {
    const pathname = usePathname();
    const slug = pathname.split("/").pop() ?? "";
    const serData = serviceBoxData.find((data) => data.slug.endsWith(slug));


    if (!serData) {
        return <p className="text-white text-center">Service not found.</p>;
    }

    return (
        <div className="space-y-12">
            {serData.items.map((data) => (
                <div
                    key={data.id}
                    className={`flex flex-col md:flex-row items-center  text-black rounded-xl shadow-md overflow-hidden my-16 ${data.id % 2 === 0 ? "md:flex-row-reverse" : ""
                        }`}
                >
                    {/* Left Side - Title & Content */}
                    <div className="md:w-1/2 p-10 flex flex-col justify-center">
                        <h1 data-aos="slide-right" className="text-4xl md:text-5xl  mb-6">
                            <span className="text-aqua" style={{ color: "#13a87c" }}>{data.title}</span>
                        </h1>
                        <p data-aos="slide-right" className="text-lg text-gray-800 mb-6">{data.content}</p>

                    </div>

                    {/* Right Side - Image */}
                    <div className="md:w-1/2 p-2 flex justify-center">
                        <div data-aos="slide-left" className=" rounded-xl overflow-hidden shadow-xl w-full max-w-lg">
                            <Image
                                src={data.image}
                                alt={data.title}
                                width={600} // Increased width
                                height={500} // Increased height
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default ServiceBox;
