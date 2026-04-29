"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSInitializer = () => {
    const pathname = usePathname();

    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: "ease-out-cubic",
            once: true,
            offset: 50,
        });
    }, []);

    // Re-collect all [data-aos] elements after every client-side navigation.
    // Without this, newly mounted page components are hidden by AOS CSS
    // (opacity:0) but never get the aos-animate class because AOS.init()
    // only ran once and didn't see them.
    useEffect(() => {
        AOS.refreshHard();
    }, [pathname]);

    return null;
};

export default AOSInitializer;
