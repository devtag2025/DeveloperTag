
import MorePortfolio from '@/components/PortfolioComponents/PortfolioSubComponent/MorePortfolio'
import PortfolioSubHero from '@/components/PortfolioComponents/PortfolioSubComponent/PortfolioSubComponent'
import PortfolioSubSection from '@/components/PortfolioComponents/PortfolioSubComponent/PortfolioSubSection'
import React from 'react'

function page() {
    return (
        <main className="min-h-screen antialiased  bg-grid-white/[0.02]">
            <PortfolioSubHero />
            <PortfolioSubSection />
            <MorePortfolio />
        </main>
    )
}

export default page