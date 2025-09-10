
interface HeadingProps {
    headOne: string;
    headTwo: string;
    headThree: string;
}
export default function Heading({ headOne, headTwo, headThree }: HeadingProps) {
    return (
        <div className="flex flex-col items-center text-center">

            {/* Large Heading */}
            <h1
                data-aos="fade-up"
                className="my-8 max-w-3xl mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center text-black font-semibold"
            >
                {headOne} <span className="text-[#13a87c]">{headTwo}</span> {headThree}
            </h1>


        </div>
    );
}
