import { ChooseTeam } from '@/components/ServicesSubComponent/ChooseTeam'
import ServiceBox from '@/components/ServicesSubComponent/ServiceBox'
import ServiceSubHero from '@/components/ServicesSubComponent/ServiceSubHero'
import WhyChoose from '@/components/ServicesSubComponent/WhyChoose'
import React from 'react'

function page() {
    return (
        <main className="min-h-screen antialiased bg-grid-white/[0.02]">
            <ServiceSubHero />
            <WhyChoose />
            <ServiceBox />
            <ChooseTeam />
        </main>
    )
}

export default page