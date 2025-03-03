"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";


export function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className="flex mx-16 bg-white">
            <div
                className={cn(
                    "fixed top-10  mx-16 z-50 flex justify-center items-center space-x-6",
                    className
                )}
            >
                {/* Logo */}

                <Menu setActive={setActive}>

                    <Link href={"/"}>
                        <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
                    </Link>

                    <MenuItem setActive={setActive} active={active} item="Service">
                        <div className="flex flex-col space-y-4 text-sm text-center">
                            <HoveredLink href="/service/web-development">Web Development</HoveredLink>
                            <HoveredLink href="/service/app-development">App Development</HoveredLink>
                            <HoveredLink href="/service/ui-ux-design">UI/UX</HoveredLink>
                            <HoveredLink href="/service/ai-development">AI/ML</HoveredLink>
                        </div>
                    </MenuItem>

                    <Link href={"/about-us"}>
                        <MenuItem setActive={setActive} active={active} item="About Us"></MenuItem>
                    </Link>
                    <Link href={"/portfolio"}>
                        <MenuItem setActive={setActive} active={active} item="Portfolio"></MenuItem>
                    </Link>


                    <Link href={"/contact-us"}>
                        <MenuItem setActive={setActive} active={active} item="Contact"></MenuItem>
                    </Link>
                </Menu>
            </div>
        </div>

    );
}
