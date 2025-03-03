"use client"
import Heading from "@/common/Heading";
import { serviceWhyChoose } from "@/db/ServiceData";
import { usePathname } from "next/navigation";

export default function WhyChoose() {
    const pathname = usePathname();
    const slug = pathname.split("/").pop() ?? "";
    const serData = serviceWhyChoose.find((data) => data.slug.endsWith(slug));
    console.log(serData)


    return (
        <div className="container mx-auto px-4 md:px-8 lg:px-16 pt-12 ">
            <Heading btnText="Why Choose" headOne="Why " headTwo="Choose "
                headThree="DeveloperTag" />
            <div className="bg-black min-h-screen flex flex-wrap justify-center gap-6 p-8">
                {(serData?.items ?? []).map((data, index) => (
                    <div
                        key={index}
                        className="bg-gray-900 text-white rounded-xl shadow-xl p-6 w-80 md:w-[300px] flex flex-col gap-3"
                    >
                        <div className="bg-gray-800 p-3 rounded-md w-fit">{data.icon}</div>
                        <h3 className="text-xl font-semibold">{data.title}</h3>
                        <p className="text-gray-400">{data.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
