import React from "react";
import Image, { StaticImageData } from "next/image"; // ✅ Import next/image
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
    IconArrowWaveRightUp,
    IconBoxAlignRightFilled,
    IconBoxAlignTopLeft,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";
import Heading from "@/common/Heading";

const images: string[] = [
    "/assets/test1.png",
    "/assets/test1.png",
    "/assets/test1.png",
    "/assets/test1.png",
    "/assets/test1.png",
    "/assets/test1.png",
    "/assets/test1.png",
];

// ✅ Fix type of props: `img` can be a URL string or a StaticImageData object
interface SkeletonProps {
    img: StaticImageData | string;
}

// ✅ Use Next.js `<Image>` for optimized images
const Skeleton: React.FC<SkeletonProps> = ({ img }) => (
    <Image
        src={img}
        alt="Service Image"
        width={300} // Adjust as needed
        height={200} // Adjust as needed
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
        layout="responsive" // Ensures responsiveness
    />
);

export function HomeService() {
    return (
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12">
            <Heading btnText="Services" headOne="Our service" headTwo="in the" headThree="spotlight" />

            <BentoGrid className="max-w-4xl mx-auto my-8">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={<Skeleton img={images[i]} />}
                        icon={item.icon}
                        className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                    />
                ))}
            </BentoGrid>
        </div>
    );
}

const items = [
    {
        title: "Ethereum",
        description: "Blockchain Development",
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Unreal Engine",
        description: "Games And Metaverse Development",
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Web3.O",
        description: "Web Design & Development.",
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Figma",
        description: "UI/UX Designing.",
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "TestNG",
        description: "Software Testing Services.",
        icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Docker",
        description: "Dev Ops.",
        icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Flutter",
        description: "Mobile App Development.",
        icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
];
