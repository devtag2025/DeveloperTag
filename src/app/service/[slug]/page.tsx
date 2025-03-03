import { ChooseTeam } from '@/components/ServicesComponent/ChooseTeam'
import ServiceBox from '@/components/ServicesComponent/ServiceBox'
import ServiceHero from '@/components/ServicesComponent/ServiceHero'
import WhyChoose from '@/components/ServicesComponent/WhyChoose'
import React from 'react'

function page() {
    return (
        <main className="min-h-screen antialiased bg-black/[0.96] bg-grid-white/[0.02]">
            <ServiceHero />
            <WhyChoose />
            <ServiceBox />
            <ChooseTeam />
        </main>
    )
}

export default page