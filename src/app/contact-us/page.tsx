import { ContactForm } from '@/components/ContactComponents/ContactForm'
import ContactHero from '@/components/ContactComponents/ContactHero'
import { WorldMapDemo } from '@/components/ContactComponents/ContactMap'
import React from 'react'

function page() {
    return (
        <main className="min-h-screen antialiased  bg-grid-white/[0.02]">
            <ContactHero />

            <div className="flex flex-col lg:flex-row items-stretch gap-8 px-6 lg:px-20 py-16">
                {/* Contact Form */}
                <ContactForm />

                {/* World Map */}
                <WorldMapDemo />
            </div>
        </main>

    )
}

export default page