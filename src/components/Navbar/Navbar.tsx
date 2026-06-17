"use client"

import { useState, useEffect, useMemo, useRef } from "react"
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline"
import { ArrowUpRightIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import Image from "next/image"
import Logo from "../../../public/assets/logo.png"
import ContactPopup from "@/common/ContactPopup"
import { useServicesForNavigation } from "@/hooks/useServicesForNavigation"

// Static fallback services (used if API fails or during loading)
const staticServices = [
    { name: "Web Development", href: "/service/web-development" },
    { name: "Mobile App Development", href: "/service/app-development" },
    { name: "Desktop Software Development", href: "/service/desktop-development" },
    { name: "CRM Solutions", href: "/service/crm-solutions" },
    { name: "ERP Systems", href: "/service/erp-systems" },
    { name: "SaaS Platforms", href: "/service/saas-platforms" },
    { name: "Blockchain Applications", href: "/service/blockchain-applications" },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [contactPopupOpen, setContactPopupOpen] = useState(false)
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
    const servicesDropdownCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
    const { services: dynamicServices } = useServicesForNavigation()

    const serviceItems = useMemo(() => {
        if (dynamicServices.length > 0) return dynamicServices
        return staticServices
    }, [dynamicServices])

    const navigation = useMemo(() => [
        { name: "Home", href: "/" },
        {
            name: "Services",
            href: "/service",
            dropdown: true,
            items: serviceItems,
        },
        { name: "Case Studies", href: "/case-studies" },
        { name: "About Us", href: "/about-us" },
        { name: "Blog", href: "/blog" },
    ], [serviceItems])

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        return () => {
            if (servicesDropdownCloseTimerRef.current) clearTimeout(servicesDropdownCloseTimerRef.current)
        }
    }, [])

    return (
        <>
            {/* ─── NAVBAR SHELL ─────────────────────────────────────────────── */}
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out relative border-b bg-gradient-to-br from-[#dcf3ec] via-white to-[#f0f9f6] ${
                    scrolled || mobileMenuOpen
                        ? "border-[#13a87c]/25 shadow-md shadow-[#13a87c]/10 backdrop-blur-md"
                        : "border-[#13a87c]/20"
                }`}
            >
                <div className="absolute inset-0 bg-[size:80px_80px] bg-[linear-gradient(to_right,rgba(19,168,124,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(19,168,124,0.06)_1px,transparent_1px)] opacity-50 pointer-events-none" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="flex items-center justify-between h-16 lg:h-20 w-full">

                        {/* ── Logo ─────────────────────────────────────────── */}
                        <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
                            <Image
                                src={Logo}
                                alt="DeveloperTag"
                                width={50}
                                height={50}
                                className="h-10 w-auto lg:h-12"
                                priority
                            />
                            <span className="font-bold text-xl text-[#13a87c]">DeveloperTag</span>
                        </Link>

                        {/* ── Desktop nav pill ──────────────────────────────── */}
                        <div className="hidden lg:flex items-center">
                            <div
                                className={`flex items-center rounded-full px-2 py-1 transition-all duration-500 ${
                                    scrolled
                                        ? "bg-gradient-to-r from-[#13a87c] to-[#18CB96] shadow-md shadow-[#13a87c]/30"
                                        : "border-2 border-[#13a87c] bg-white"
                                }`}
                            >
                                {navigation.map((item) =>
                                    item.dropdown ? (
                                        <div key={item.name} className="relative">
                                            <Link
                                                href={item.href}
                                                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                                                    scrolled
                                                        ? "text-white hover:bg-white/20"
                                                        : "text-[#13a87c] hover:bg-[#13a87c]/10"
                                                }`}
                                                onMouseEnter={() => {
                                                    if (servicesDropdownCloseTimerRef.current) {
                                                        clearTimeout(servicesDropdownCloseTimerRef.current)
                                                        servicesDropdownCloseTimerRef.current = null
                                                    }
                                                    setServicesDropdownOpen(true)
                                                }}
                                                onMouseLeave={() => {
                                                    servicesDropdownCloseTimerRef.current = setTimeout(() => {
                                                        setServicesDropdownOpen(false)
                                                        servicesDropdownCloseTimerRef.current = null
                                                    }, 180)
                                                }}
                                            >
                                                {item.name}
                                                <ChevronDownIcon
                                                    className={`ml-1 h-3.5 w-3.5 transition-transform duration-200 ${
                                                        servicesDropdownOpen ? "rotate-180" : ""
                                                    }`}
                                                />
                                            </Link>

                                            {/* Invisible mouse bridge */}
                                            {servicesDropdownOpen && (
                                                <div
                                                    className="absolute top-full left-1/2 -translate-x-1/2 w-64 h-2 z-[199]"
                                                    aria-hidden
                                                    onMouseEnter={() => {
                                                        if (servicesDropdownCloseTimerRef.current) {
                                                            clearTimeout(servicesDropdownCloseTimerRef.current)
                                                            servicesDropdownCloseTimerRef.current = null
                                                        }
                                                        setServicesDropdownOpen(true)
                                                    }}
                                                />
                                            )}

                                            {/* Dropdown panel */}
                                            <div
                                                className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64 z-[200] transition-all duration-200 ease-out ${
                                                    servicesDropdownOpen
                                                        ? "opacity-100 visible translate-y-0 pointer-events-auto"
                                                        : "opacity-0 invisible -translate-y-2 pointer-events-none"
                                                }`}
                                                onMouseEnter={() => {
                                                    if (servicesDropdownCloseTimerRef.current) {
                                                        clearTimeout(servicesDropdownCloseTimerRef.current)
                                                        servicesDropdownCloseTimerRef.current = null
                                                    }
                                                    setServicesDropdownOpen(true)
                                                }}
                                                onMouseLeave={() => {
                                                    servicesDropdownCloseTimerRef.current = setTimeout(() => {
                                                        setServicesDropdownOpen(false)
                                                        servicesDropdownCloseTimerRef.current = null
                                                    }, 180)
                                                }}
                                            >
                                                <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                                                    <div className="py-2">
                                                        {item.items.map((subItem) => (
                                                            <Link
                                                                key={subItem.name}
                                                                href={subItem.href}
                                                                onClick={() => setServicesDropdownOpen(false)}
                                                                className="flex items-center px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-[#13a87c]/10 hover:to-[#18CB96]/10 hover:text-[#0f8a6b] transition-all duration-200"
                                                            >
                                                                <div className="w-2 h-2 rounded-full bg-[#13a87c]/30 mr-3 flex-shrink-0" />
                                                                <span className="font-medium text-sm">{subItem.name}</span>
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
                                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                                                scrolled
                                                    ? "text-white hover:bg-white/20"
                                                    : "text-[#13a87c] hover:bg-[#13a87c]/10"
                                            }`}
                                        >
                                            {item.name}
                                        </Link>
                                    )
                                )}
                            </div>
                        </div>

                        {/* ── CTA button ────────────────────────────────────── */}
                        <div className="hidden lg:flex items-center">
                            <button
                                onClick={() => setContactPopupOpen(true)}
                                className="flex items-center gap-2 ml-6 pl-5 pr-2 py-2 bg-gradient-to-r from-[#13a87c] to-[#18CB96] hover:from-[#0f8a6b] hover:to-[#13a87c] text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#13a87c]/30 group"
                            >
                                Contact Us
                                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/20 group-hover:bg-white/30 transition-all duration-300">
                                    <ArrowUpRightIcon className="h-3.5 w-3.5 text-white" />
                                </span>
                            </button>
                        </div>

                        {/* ── Mobile hamburger ──────────────────────────────── */}
                        <button
                            className="lg:hidden p-2 rounded-lg text-[#13a87c] transition-colors duration-300"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* ── Mobile menu ───────────────────────────────────────────── */}
                {mobileMenuOpen && (
                    <div className="lg:hidden border-t border-[#13a87c]/15 w-full relative z-10">
                        <div className="px-4 py-6 space-y-2 max-w-full overflow-hidden">
                            {navigation.map((item) =>
                                item.dropdown ? (
                                    <div key={item.name} className="space-y-2">
                                        <div className="px-4 py-3 text-[#13a87c] font-semibold border-b border-[#13a87c]/15">
                                            {item.name}
                                        </div>
                                        <div className="pl-4 space-y-1">
                                            {item.items.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    className="block px-4 py-2 text-gray-600 hover:text-[#13a87c] hover:bg-[#13a87c]/10 rounded-lg transition-all duration-200 text-sm"
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
                                        className="block px-4 py-3 text-[#13a87c] hover:bg-[#13a87c]/10 rounded-lg font-medium transition-all duration-200"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                )
                            )}

                            <button
                                onClick={() => {
                                    setContactPopupOpen(true)
                                    setMobileMenuOpen(false)
                                }}
                                className="flex items-center justify-center gap-2 w-full mt-4 pl-5 pr-4 py-3 bg-gradient-to-r from-[#13a87c] to-[#18CB96] hover:from-[#0f8a6b] hover:to-[#13a87c] text-white font-semibold rounded-full transition-all duration-300 shadow-md"
                            >
                                Contact Us
                                <ArrowUpRightIcon className="h-4 w-4" />
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