"use client"
import { HomeService } from '@/components/HomeComponents/HomeService'
import ServiceHero from '@/components/ServiceCompoent/ServiceHero'
import React from 'react'

function page() {
    return (
        <main className="min-h-screen antialiased bg-white">
            <ServiceHero />
            <HomeService />
        </main>
    )
}

export default page
