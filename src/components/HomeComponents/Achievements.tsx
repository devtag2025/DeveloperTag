import ShimmerButton from "@/common/ShimmerButton";


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
                    We’re not just developers. We’re builders of dreams, partners in growth, and problem-solvers with a passion for tech. With 500+ projects under our belt and 100+ happy clients worldwide, we’ve spent the last decade helping businesses like yours go from concept to code—and beyond.
                    .
                </p>
                <p
                    data-aos="slide-up"
                    className="text-base sm:text-lg md:text-xl text-gray-800 mt-4 sm:mt-6 text-center md:text-left px-4"
                >
                    Whether it’s designing pixel-perfect websites, developing high-impact mobile apps, or engineering complex ERP and CRM systems, our team fuses creativity with cutting-edge tech to bring your vision to life.

                    .
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
                <div data-aos="fade-left" className="text-center">
                    <p className="text-gray-800 font-semibold mt-2 text-2xl">Ready to turn your idea into impact?
                    </p>
                </div>
                <div data-aos="fade-left" className="text-center">
                    <div className="sm:mb-6 mt-8 sm:flex sm:justify-center">
                        <ShimmerButton btnText={"Get a quote"} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievements;
