"use client"
import React from 'react'

import { HeroParallax } from '../ui/hero-parallax'

export const products = [
    { title: "Moonbeam", link: "https://gomoonbeam.com", thumbnail: "/one.png" },
    { title: "Cursor", link: "https://cursor.so", thumbnail: "/o.png" },
    { title: "Rogue", link: "https://userogue.com", thumbnail: "/three.png" },
    { title: "Editorially", link: "https://editorially.org", thumbnail: "/four.png" },
    { title: "Editrix AI", link: "https://editrix.ai", thumbnail: "/five.png" },
    { title: "Pixel Perfect", link: "https://app.pixelperfect.quest", thumbnail: "/siz.png" },
    { title: "Algochurn", link: "https://algochurn.com", thumbnail: "/sev.png" },
    { title: "Aceternity UI", link: "https://ui.aceternity.com", thumbnail: "/eig.png" },
    { title: "Tailwind Master Kit", link: "https://tailwindmasterkit.com", thumbnail: "/nine.png" },
    { title: "SmartBridge", link: "https://smartbridgetech.com", thumbnail: "/ten.png" },
    { title: "Renderwork Studio", link: "https://renderwork.studio", thumbnail: "/elev.png" },
    { title: "Creme Digital", link: "https://cremedigital.com", thumbnail: "/twel.png" },
];

function PortfolioHero() {
    return (
        <div className="h-auto min-h-screen flex flex-col justify-center items-center rounded-md overflow-hidden relative mx-auto py-10 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 md:px-8 bg-black/[0.96] bg-grid-white/[0.05]">
            <HeroParallax products={products} />
        </div>
    );
}

export default PortfolioHero;
