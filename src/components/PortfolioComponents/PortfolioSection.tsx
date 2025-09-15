"use client"
import Heading from '@/common/Heading'
import React, { useEffect, useState } from 'react'
import { PortfolioCard } from './PortfolioCard'
import { getPortfolios, PortfolioItem, PortfolioApiResponse } from '@/config/PortfolioApi'


function PortfolioSection() {
    const [items, setItems] = useState<PortfolioItem[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    const [page, setPage] = useState<number>(1)
    const [limit] = useState<number>(9)
    const [pagination, setPagination] = useState<PortfolioApiResponse['data']['pagination'] | null>(null)

    useEffect(() => {
        let isMounted = true
        setLoading(true)
        setError(null)
        getPortfolios({ page, limit })
            .then((res) => {
                if (!isMounted) return
                setItems(res.data.items || [])
                setPagination(res.data.pagination)
            })
            .catch((e: unknown) => {
                if (!isMounted) return
                setError(e instanceof Error ? e.message : 'Failed to load portfolios')
            })
            .finally(() => {
                if (!isMounted) return
                setLoading(false)
            })
        return () => {
            isMounted = false
        }
    }, [page, limit])

    return (
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12">
            <Heading headOne="Our " headTwo="Team Work "
                headThree="and Talent" />

            {loading && (
                <div className="w-full max-w-6xl mx-auto p-2 text-center text-gray-600">Loading portfolios...</div>
            )}
            {error && (
                <div className="w-full max-w-6xl mx-auto p-2 text-center text-red-600">{error}</div>
            )}

            {!loading && !error && (
                <>
                    <div data-aos="fade-up" className="w-full max-w-6xl mx-auto p-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {items.map((project) => (
                            project.previewImage ? (
                                <PortfolioCard
                                    key={project._id}
                                    title={project.title}
                                    tagline={project.tagLine}
                                    imageUrl={project.previewImage}
                                    slug={project.slug}
                                />
                            ) : null
                        ))}
                    </div>

                    {pagination && (
                        <div className="w-full max-w-6xl mx-auto p-2 mt-8 flex items-center justify-between">
                            <button
                                className={`px-4 py-2 rounded-xl border ${pagination.hasPrevPage ? 'text-gray-900 border-gray-300 hover:bg-gray-50' : 'text-gray-400 border-gray-200 cursor-not-allowed'}`}
                                onClick={() => pagination.hasPrevPage && setPage((p) => Math.max(1, p - 1))}
                                disabled={!pagination.hasPrevPage}
                            >
                                Previous
                            </button>
                            <div className="text-gray-600">Page {pagination.page} of {pagination.totalPages}</div>
                            <button
                                className={`px-4 py-2 rounded-xl border ${pagination.hasNextPage ? 'text-gray-900 border-gray-300 hover:bg-gray-50' : 'text-gray-400 border-gray-200 cursor-not-allowed'}`}
                                onClick={() => pagination.hasNextPage && setPage((p) => p + 1)}
                                disabled={!pagination.hasNextPage}
                            >
                                Next
                            </button>
                        </div>
                    )}
                </>
            )}

        </div>
    )
}

export default PortfolioSection