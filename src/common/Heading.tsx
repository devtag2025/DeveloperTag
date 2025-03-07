
interface HeadingProps {
    btnText: string;
    headOne: string;
    headTwo: string;
    headThree: string;
}
export default function Heading({ btnText, headOne, headTwo, headThree }: HeadingProps) {
    return (
        <div className="flex flex-col items-center text-center">
            {/* Small Tag */}
            <div data-aos="fade-up" className="relative flex items-center justify-between rounded-full px-4 py-2 text-sm leading-6 ring-1 ring-[#4E15BF]/10 hover:ring-[#4E15BF]/20 animate-shimmer border border-[#4E15BF] bg-[linear-gradient(110deg,#002b36,45%,#00bcd4,55%,#002b36)] bg-[length:200%_100%] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 gap-3 text-white">
                {/* SVG Icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4  !text-white" // Added "!text-[#18cb96]" to force override
                >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>

                {/* Heading */}
                <h1 className=" !text-white">{btnText}</h1> {/* Added "!text-[#18cb96]" */}
            </div>



            {/* Large Heading */}
            <h1 data-aos="fade-up" className="my-8 text-4xl text-center text-black font-semibold">
                {headOne} <span style={{ color: "#4E15BF" }}>{headTwo}</span> {headThree}
            </h1>


        </div>
    );
}
