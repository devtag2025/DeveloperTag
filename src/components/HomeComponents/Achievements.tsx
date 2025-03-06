import Heading from "@/common/Heading";
import Link from "next/link";

const Achievements = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 px-6 lg:px-20 py-16 ">
            {/* Left Section */}
            <div className="lg:w-1/2 text-center lg:text-left">
                <h1
                    data-aos="slide-right"
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black text-center md:text-left px-4"
                >
                    DeveloperTag’s <span style={{ color: "#4E15BF" }}>achievements</span> overtime
                </h1>

                <p
                    data-aos="slide-up"
                    className="text-base sm:text-lg md:text-xl text-gray-800 mt-4 sm:mt-6 text-center md:text-left px-4"
                >
                    We take pride in empowering businesses worldwide with innovative solutions.
                    Devsinc brings an unwavering commitment to excellence, backed by a global presence.
                </p>



            </div>

            {/* Right Section - Achievements */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-8 lg:w-1/2">
                <div data-aos="fade-left" className="text-center">
                    <h1 className="text-5xl font-bold text-[#4E15BF]">3,000+</h1>
                    <p className="text-gray-800 font-semibold mt-4 text-2xl">Successful Projects</p>
                </div>
                <div data-aos="fade-left" className="text-center">
                    <h1 className="text-5xl font-bold text-[#4E15BF]">23+</h1>
                    <p className="text-gray-800 font-semibold mt-2 text-2xl">Countries Supported</p>
                </div>
                <div data-aos="fade-left" className="text-center">
                    <h1 className="text-5xl font-bold text-[#4E15BF]">236+</h1>
                    <p className="text-gray-800 font-semibold mt-2 text-2xl">Active Clients</p>
                </div>
                <div data-aos="fade-left" className="text-center">
                    <h1 className="text-5xl font-bold text-[#4E15BF]">15+</h1>
                    <p className="text-gray-800 font-semibold mt-2 text-2xl">Years of Enablement Experience</p>
                </div>
            </div>
        </div>
    );
};

export default Achievements;
