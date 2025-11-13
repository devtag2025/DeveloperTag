"use client"

interface WhyChooseProps {
    service?: {
        whyChooseSection?: {
            title?: string;
            items?: Array<{
                title: string;
                content: string;
            }>;
        };
    };
}

export default function WhyChoose({ service }: WhyChooseProps) {
    // Use service data if available
    const items = service?.whyChooseSection?.items || [];

    if (!items || items.length === 0) {
        return null;
    }

    return (
        <section className="relative w-full bg-gradient-to-b from-white via-green-50/30 to-blue-50/30 py-20">
            <div className="w-full px-4 sm:px-6 lg:px-28">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#13a87c] bg-[#13a87c]/5 mb-6">
                        <span className="text-sm font-semibold text-[#13a87c]">
                            Why Choose Us
                        </span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                        Why Choose{" "}
                        <span className="text-[#13a87c]">Our Services</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Discover the advantages that set us apart
                    </p>
                </div>

                {/* Grid of Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {items.map((item, index) => (
                        <div
                        key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#13a87c]/20"
                        >
                            {/* Decorative gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#13a87c]/5 to-[#18CB96]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            
                            {/* Content */}
                            <div className="relative z-10">
                                {/* Icon/Number */}
                                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#13a87c] to-[#18CB96] flex items-center justify-center mb-6 shadow-lg">
                                    <span className="text-2xl font-bold text-white">
                                        {index + 1}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#13a87c] transition-colors">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 leading-relaxed">
                                    {item.content}
                                </p>
                            </div>

                            {/* Bottom accent line */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#13a87c] to-[#18CB96] rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </div>
                ))}
            </div>
        </div>
        </section>
    );
}
