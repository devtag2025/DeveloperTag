"use client"
import AllServices from '@/components/ServiceCompoent/AllServices'
import ServiceHero from '@/components/ServiceCompoent/ServiceHero'
import { WhatWeValue } from '@/components/ServiceCompoent/WhatWeValue'
import React from 'react'

function page() {
    return (
        <main className="min-h-screen antialiased bg-grid-white/[0.02]">
            <ServiceHero />
            <WhatWeValue />
            <AllServices />
        </main>
    )
}

export default page