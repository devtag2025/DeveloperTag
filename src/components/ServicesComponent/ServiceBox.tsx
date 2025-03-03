"use client"

import Image from "next/image";
import { usePathname } from "next/navigation";
import { serviceBoxData } from "@/db/ServiceData";
import Link from "next/link";

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
                    className={`flex flex-col md:flex-row items-center bg-black text-white rounded-xl shadow-lg overflow-hidden my-16 ${data.id % 2 === 0 ? "md:flex-row-reverse" : ""
                        }`}
                >
                    {/* Left Side - Title & Content */}
                    <div className="md:w-1/2 p-10 flex flex-col justify-center">
                        <h1 className="text-4xl md:text-5xl  mb-6">
                            <span className="text-aqua" style={{ color: "aqua" }}>{data.title}</span>
                        </h1>
                        <p className="text-lg text-gray-300 mb-6">{data.content}</p>

                        <div className="relative rounded-full px-4 py-2 text-sm leading-6 ring-1 ring-cyan-900/10 hover:ring-gray-900/20 animate-shimmer border border-cyan-800 bg-[linear-gradient(110deg,#002b36,45%,#00bcd4,55%,#002b36)] bg-[length:200%_100%] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white inline-block w-auto max-w-fit">
                            <Link href="https://www.upwork.com/freelancers/~01341fed9cb414c4ac" className="relative z-10 text-white">
                                Enquire <span aria-hidden="true">&rarr;</span>
                            </Link>
                        </div>

                    </div>

                    {/* Right Side - Image */}
                    <div className="md:w-1/2 p-2 flex justify-center">
                        <div className="bg-gray-900 rounded-xl overflow-hidden shadow-xl w-full max-w-lg">
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
