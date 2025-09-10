import Button from "@/common/Button";
import { cn } from "@/lib/utils";
import { Spotlight } from "../ui/spotlight-new";

const HeroSection = () => {
    return (
        <section className="relative w-full bg-white">

            <div className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 ">
                <div
                    className={cn(
                        "absolute inset-0 w-full h-full top-0",
                        "bg-[size:80px_80px]",
                        "bg-[linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)]",
                        "opacity-60 z-[1]"
                    )}
                />

                {/* Spotlight positioned absolutely */}
                <div className="absolute inset-0 z-[2] pointer-events-none">
                    <Spotlight />
                </div>
                <div className="max-w-7xl mx-auto">
                    {/* Main content container */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mt-12">

                        {/* Left side content */}
                        <div className="space-y-6 text-center lg:text-left">
                            {/* Title badge */}
                            <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#13a87c] bg-[#13a87c]/5">
                                <span className="text-sm font-medium text-[#13a87c]">
                                    Welcome To DeveloperTag
                                </span>
                            </div>

                            {/* Headline */}
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                Where innovative ideas meet{" "}
                                <span className="text-[#13a87c]">Expert Development</span>
                            </h1>

                            {/* Description */}
                            <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                                Transforming innovative ideas into cutting-edge digital solutions that drive business growth and success.
                            </p>

                            {/* CTA button */}
                            <div className="flex justify-center lg:justify-start pt-4">
                                <Button mailto="daniyalsohaildev@gmail.com" withArrow variant="light">
                                    Let&apos;s Start
                                </Button>
                            </div>
                        </div>

                        {/* Right side video */}
                        <div className="relative">
                            <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
                                {/* Video container */}
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-auto object-cover"
                                        style={{ aspectRatio: '16/10' }}
                                    >
                                        <source src="/assets/bg.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>

                                    {/* Video overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
                                </div>

                                {/* Decorative elements */}
                                <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#13a87c]/10 rounded-full blur-xl" />
                                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#18CB96]/10 rounded-full blur-2xl" />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default HeroSection;