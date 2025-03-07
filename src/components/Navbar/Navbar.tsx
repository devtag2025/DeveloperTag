"use client"

import { useState, useEffect } from "react"
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import Image from "next/image"
import "./Navbar.css"
import Logo from "../../../public/assets/logo.png"
import Logo2 from "../../../public/assets/logo2.png"

// Navigation Links
const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    {
        name: "Services",
        href: "#",
        dropdown: true,
        items: [
            { name: "Web Development", href: "/service/web-development" },
            { name: "App Development", href: "/service/app-development" },
            { name: "UI/UX Design", href: "/service/ui-ux-design" },
            { name: "AI/ML Solutions", href: "/service/ai-development" },
        ],
    },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact-us" },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`navbar fixed w-full z-50 transition-all duration-300 ${mobileMenuOpen || scrolled ? "bg-white shadow-md" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-40">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src={scrolled || mobileMenuOpen ? Logo2 : Logo}
                            alt="Logo"
                            width={50}
                            height={50}
                            className="navlogo h-12 w-auto"
                            priority
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden sm:flex space-x-8">
                        {navigation.map((item) =>
                            item.dropdown ? (
                                <div key={item.name} className="relative group">
                                    <button
                                        className={`flex items-center px-3 py-2 font-medium transition-colors duration-200 ${scrolled || mobileMenuOpen ? "text-[#4E15BF]" : "text-white"
                                            } group-hover:text-[#4E15BF]`}
                                    >
                                        {item.name}
                                        <ChevronDownIcon className="ml-1 h-4 w-4" />
                                    </button>
                                    {/* Dropdown Menu */}
                                    <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-56 bg-white shadow-xl rounded-xl ring-1 ring-gray-300 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-1 transition-all duration-300 ease-in-out">
                                        {item.items.map((subItem) => (
                                            <Link
                                                key={subItem.name}
                                                href={subItem.href}
                                                className="block px-4 py-2 text-gray-700 font-medium hover:bg-gradient-to-r from-purple-100 to-purple-300 hover:text-[#4E15BF]  transition-all duration-200 ease-in-out transform hover:scale-105 rounded-xl"
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>

                                </div>
                            ) : (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`px-3 py-2 font-medium transition-colors duration-200 ${scrolled || mobileMenuOpen ? "text-[#4E15BF]" : "text-white"
                                        } hover:text-purple-500`}
                                >
                                    {item.name}
                                </Link>
                            )
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={`sm:hidden p-2 rounded-md ${mobileMenuOpen ? "text-[#4E15BF]" : "text-white"
                            }`}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="sm:hidden bg-white shadow-md rounded-b-lg px-4 pb-3">
                    {navigation.map((item) =>
                        item.dropdown ? (
                            <div key={item.name} className="mt-2">
                                <button className="w-full flex justify-between px-4 py-2 text-gray-800 hover:bg-gray-100">
                                    {item.name}
                                    <ChevronDownIcon className="h-5 w-5" />
                                </button>
                                <div className="pl-6">
                                    {item.items.map((subItem) => (
                                        <Link key={subItem.name} href={subItem.href} className="block py-2 text-gray-600 hover:text-purple-600">
                                            {subItem.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <Link key={item.name} href={item.href} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                {item.name}
                            </Link>
                        )
                    )}
                </div>
            )}
        </nav>
    );
}

