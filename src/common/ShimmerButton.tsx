import Link from 'next/link'
import React from 'react'



function ShimmerButton({ btnText }: any) {
    return (
        <div data-aos="slide-up" className="relative rounded-full px-4 py-2 text-sm leading-6 ring-1 ring-[#4E15BF]/10 hover:ring-[#4E15BF]/20 border border-[#4E15BF] shimmer-bg text-white font-medium transition-colors">
            <Link href="https://www.upwork.com/freelancers/~01341fed9cb414c4ac" className="relative z-10 text-white">
                {btnText} <span aria-hidden="true">&rarr;</span>
            </Link>
        </div>

    )
}

export default ShimmerButton