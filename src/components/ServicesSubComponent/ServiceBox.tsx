"use client"

import Image from "next/image";

interface ServiceBoxProps {
    service?: {
        serviceItems?: Array<{
            id: number;
            title: string;
            content: string;
            image: string;
        }>;
    };
}

const ServiceBox = ({ service }: ServiceBoxProps) => {
    const items = service?.serviceItems || [];

    if (items.length === 0) {
        return null;
    }

    return (
        <div className="space-y-12">
            {items.map((item) => (
                <div
                    key={item.id}
                    className={`flex flex-col md:flex-row items-center text-black rounded-xl shadow-md overflow-hidden my-16 ${
                        item.id % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                >
                    {/* Left Side - Title & Content */}
                    <div className="md:w-1/2 p-10 flex flex-col justify-center">
                        <h1 data-aos="slide-right" className="text-4xl md:text-5xl mb-6">
                            <span className="text-aqua" style={{ color: "#13a87c" }}>{item.title}</span>
                        </h1>
                        <p data-aos="slide-right" className="text-lg text-gray-800 mb-6">{item.content}</p>
                    </div>

                    {/* Right Side - Image */}
                    <div className="md:w-1/2 p-2 flex justify-center">
                        <div data-aos="slide-left" className="rounded-xl overflow-hidden shadow-xl w-full max-w-lg">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={600}
                                height={500}
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
