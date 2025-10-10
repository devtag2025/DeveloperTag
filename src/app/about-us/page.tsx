import AboutHero from '@/components/AboutComponents/AboutHero'
import AboutIntro from '@/components/AboutComponents/ABoutIntro'
import { AboutJourney } from '@/components/AboutComponents/AboutJourney'
import Team from '@/components/AboutComponents/Taam'
import React from 'react'

function page() {
    return (
        <main className="min-h-screen antialiased bg-grid-white/[0.02]">
            <AboutHero />
            <AboutIntro />
            <AboutJourney />
           
            <Team />
        </main>
    )
}

export default page