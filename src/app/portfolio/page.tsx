import PortfolioHero from '@/components/PortfolioComponents/PortfolioHero'
import PortfolioShowcase from '@/components/PortfolioComponents/PortfolioShowcase'
import React from 'react'


function page() {
    return (
        <main className="min-h-screen antialiased  bg-grid-white/[0.02]">
            <PortfolioHero />
            <PortfolioShowcase />
            {/* <PortfolioSection /> */}
        </main>

    )
}

export default page