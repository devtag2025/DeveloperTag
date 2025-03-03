import ContactHero from '@/components/ContactComponents/ContactHero'
import PortfolioHero from '@/components/PortfolioComponents/PortfolioHero'
import PortfolioSection from '@/components/PortfolioComponents/PortfolioSection'
import React from 'react'


function page() {
    return (
        <main className="min-h-screen antialiased bg-black/[0.96] bg-grid-white/[0.02]">
            <PortfolioHero />
            <PortfolioSection />


        </main>

    )
}

export default page