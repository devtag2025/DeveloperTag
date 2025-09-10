"use client"

import { useState, useEffect } from "react"
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import Image from "next/image"
import Logo from "../../../public/assets/logo.png"
import ContactPopup from "@/common/ContactPopup"

// Navigation Links
const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-us" },
    {
        name: "Services",
        href: "/service",
        dropdown: true,
        items: [
            { name: "Web Development", href: "/service/web-development" },
            { name: "App Development", href: "/service/app-development" },
            { name: "UI/UX Design", href: "/service/ui-ux-design" },
            { name: "AI/ML Solutions", href: "/service/ai-development" },
        ],
    },
    { name: "Portfolio", href: "/portfolio" },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [contactPopupOpen, setContactPopupOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${scrolled || mobileMenuOpen
                ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
                : "bg-transparent"
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="relative">
                                <Image
                                    src={Logo}
                                    alt="DeveloperTag"
                                    width={50}
                                    height={50}
                                    className="h-10 w-auto lg:h-12 transition-all duration-300"
                                    priority
                                />
                            </div>
                            <span className={`font-bold text-xl transition-colors duration-300 ${scrolled || mobileMenuOpen ? "text-[#13a87c]" : "text-[#13a87c]"
                                }`}>
                                DeveloperTag
                            </span>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center space-x-1">
                            {navigation.map((item) =>
                                item.dropdown ? (
                                    <div key={item.name} className="relative group">
                                        <Link href={item.href} className={`relative z-20 flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 ${scrolled || mobileMenuOpen
                                            ? "text-[#13a87c] hover:text-[#13a87c] hover:bg-gray-50"
                                            : "text-[#13a87c] hover:text-[#18CB96] hover:bg-white/10"
                                            }`}>
                                            {item.name}
                                            <ChevronDownIcon className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                                        </Link>

                                        {/* Modern Dropdown */}
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-64 opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto transition-all duration-300 transform group-hover:translate-y-1 z-10">
                                            <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                                                <div className="py-2">
                                                    {item.items.map((subItem) => (
                                                        <Link
                                                            key={subItem.name}
                                                            href={subItem.href}
                                                            className="flex items-center px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-[#13a87c]/10 hover:to-[#18CB96]/10 hover:text-[#13a87c] transition-all duration-200"
                                                        >
                                                            <div className="w-2 h-2 rounded-full bg-[#13a87c]/30 mr-3"></div>
                                                            <span className="font-medium">{subItem.name}</span>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${scrolled || mobileMenuOpen
                                            ? "text-[#13a87c] hover:text-[#13a87c] hover:bg-gray-50"
                                            : "text-[#13a87c] hover:text-[#18CB96] hover:bg-white/10"
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                )
                            )}

                            {/* Contact Button */}
                            <button
                                onClick={() => setContactPopupOpen(true)}
                                className="ml-4 px-6 py-2.5 bg-gradient-to-r from-[#13a87c] to-[#18CB96] text-white font-semibold rounded-full hover:shadow-xl hover:scale-110 hover:from-[#18CB96] hover:to-[#13a87c] transition-all duration-300 transform hover:-translate-y-0.5"
                            >
                                Contact Us
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${scrolled || mobileMenuOpen ? "text-[#13a87c]" : "text-white"
                                }`}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-100">
                        <div className="px-4 py-6 space-y-2">
                            {navigation.map((item) =>
                                item.dropdown ? (
                                    <div key={item.name} className="space-y-2">
                                        <div className="px-4 py-3 text-gray-900 font-semibold border-b border-gray-100">
                                            {item.name}
                                        </div>
                                        <div className="pl-4 space-y-1">
                                            {item.items.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    className="block px-4 py-2 text-gray-600 hover:text-[#13a87c] hover:bg-gray-50 rounded-lg transition-all duration-200"
                                                    onClick={() => setMobileMenuOpen(false)}
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
                                        className="block px-4 py-3 text-gray-700 hover:text-[#13a87c] hover:bg-gray-50 rounded-lg font-medium transition-all duration-200"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                )
                            )}

                            {/* Mobile Contact Button */}
                            <button
                                onClick={() => {
                                    setContactPopupOpen(true)
                                    setMobileMenuOpen(false)
                                }}
                                className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-[#13a87c] to-[#18CB96] text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Contact Popup */}
            <ContactPopup
                isOpen={contactPopupOpen}
                onClose={() => setContactPopupOpen(false)}
            />
        </>
    )
}