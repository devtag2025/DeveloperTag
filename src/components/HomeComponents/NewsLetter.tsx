"use client";

import Heading from "@/common/Heading";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import Link from "next/link";

export function NewsLetter() {
    const placeholders = [
        "Code smarter, not harder. What's your favorite dev tool?",
        "Debugging made easy – what's your biggest coding challenge?",
        "Optimize your workflow! Which framework do you swear by?",
        "Building the future, one line at a time. What's your next project?",
        "From bugs to breakthroughs – what's your latest dev win?",
    ];



    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitted");
    };
    return (
        <div className="h-[20rem] flex flex-col justify-center  items-center px-4 mb-6 border border-x-0 border-gray-900">

            <Heading btnText=" Join Our Newsletter" headOne="Be the " headTwo="First "
                headThree="to Know" />
            <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={handleChange}
                onSubmit={onSubmit}
            />
        </div>
    );
}
