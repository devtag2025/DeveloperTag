import Heading from "@/common/Heading";
import Link from "next/link";

const Achievements = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 px-6 lg:px-20 py-16 ">
            {/* Left Section */}
            <div className="lg:w-1/2 text-center lg:text-left">
                <h1 className="text-5xl font-extrabold text-white">
                    DeveloperTag’s <span style={{ color: "aqua" }}>achievements</span> overtime
                </h1>
                <p className="text-white mt-6">
                    We take pride in empowering businesses worldwide with innovative solutions.
                    Devsinc brings an unwavering commitment to excellence, backed by a global presence.
                </p>


            </div>

            {/* Right Section - Achievements */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-8 lg:w-1/2">
                <div className="text-center">
                    <h1 className="text-5xl font-extrabold text-cyan-500">3,000+</h1>
                    <p className="text-white font-semibold mt-4 text-2xl">Successful Projects</p>
                </div>
                <div className="text-center">
                    <h1 className="text-5xl font-extrabold text-cyan-500">23+</h1>
                    <p className="text-white font-semibold mt-2 text-2xl">Countries Supported</p>
                </div>
                <div className="text-center">
                    <h1 className="text-5xl font-extrabold text-cyan-500">236+</h1>
                    <p className="text-white font-semibold mt-2 text-2xl">Active Clients</p>
                </div>
                <div className="text-center">
                    <h1 className="text-5xl font-extrabold text-cyan-500">15+</h1>
                    <p className="text-white font-semibold mt-2 text-2xl">Years of Enablement Experience</p>
                </div>
            </div>
        </div>
    );
};

export default Achievements;
