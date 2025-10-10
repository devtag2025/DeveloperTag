"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Code, Lock, Zap, Database, Cloud, Terminal, Key, Server, ChevronRight, Copy, Check } from 'lucide-react'
import Heading from '@/common/Heading'

export default function ApiDocs() {
    const [copiedEndpoint, setCopiedEndpoint] = useState<string | null>(null)

    const copyToClipboard = (text: string, id: string) => {
        navigator.clipboard.writeText(text)
        setCopiedEndpoint(id)
        setTimeout(() => setCopiedEndpoint(null), 2000)
    }

    const features = [
        {
            id: 1,
            icon: Zap,
            title: "Lightning Fast",
            description: "High-performance APIs with response times under 100ms"
        },
        {
            id: 2,
            icon: Lock,
            title: "Secure",
            description: "Enterprise-grade security with OAuth 2.0 and JWT authentication"
        },
        {
            id: 3,
            icon: Cloud,
            title: "Scalable",
            description: "Built to handle millions of requests with auto-scaling"
        },
        {
            id: 4,
            icon: Database,
            title: "Reliable",
            description: "99.9% uptime SLA with redundant infrastructure"
        }
    ]

    const endpoints = [
        {
            id: "portfolio",
            method: "GET",
            path: "/api/portfolio",
            description: "Retrieve all portfolio items",
            example: `curl -X GET 'https://api.developertag.com/api/portfolio' \\
  -H 'Authorization: Bearer YOUR_API_KEY'`,
            response: `{
  "success": true,
  "data": {
    "items": [
      {
        "_id": "507f1f77bcf86cd799439011",
        "title": "Project Name",
        "description": "Project description",
        "technologies": ["React", "Node.js"],
        "imageUrl": "https://...",
        "createdAt": "2025-01-15T00:00:00.000Z"
      }
    ],
    "total": 25
  }
}`
        },
        {
            id: "services",
            method: "GET",
            path: "/api/services",
            description: "Get list of available services",
            example: `curl -X GET 'https://api.developertag.com/api/services' \\
  -H 'Authorization: Bearer YOUR_API_KEY'`,
            response: `{
  "success": true,
  "data": {
    "services": [
      {
        "_id": "507f1f77bcf86cd799439012",
        "name": "Web Development",
        "description": "Custom web solutions",
        "pricing": "Starting at $5000",
        "technologies": ["React", "Next.js", "Node.js"]
      }
    ]
  }
}`
        },
        {
            id: "testimonials",
            method: "GET",
            path: "/api/testimonials",
            description: "Fetch client testimonials",
            example: `curl -X GET 'https://api.developertag.com/api/testimonials' \\
  -H 'Authorization: Bearer YOUR_API_KEY'`,
            response: `{
  "success": true,
  "data": {
    "items": [
      {
        "_id": "507f1f77bcf86cd799439013",
        "name": "John Doe",
        "title": "CEO, TechCorp",
        "content": "Outstanding service!",
        "rating": 5
      }
    ]
  }
}`
        },
        {
            id: "contact",
            method: "POST",
            path: "/api/contact",
            description: "Submit a contact form",
            example: `curl -X POST 'https://api.developertag.com/api/contact' \\
  -H 'Content-Type: application/json' \\
  -H 'Authorization: Bearer YOUR_API_KEY' \\
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "message": "I need a website",
    "service": "Web Development"
  }'`,
            response: `{
  "success": true,
  "message": "Your message has been sent successfully",
  "data": {
    "requestId": "req_abc123xyz",
    "timestamp": "2025-01-15T12:00:00.000Z"
  }
}`
        }
    ]

    const authSteps = [
        {
            id: 1,
            title: "Get Your API Key",
            description: "Contact us to receive your unique API key for authentication",
            code: "Contact: adil.rafique.pro@gmail.com"
        },
        {
            id: 2,
            title: "Include in Headers",
            description: "Add your API key to the Authorization header in all requests",
            code: "Authorization: Bearer YOUR_API_KEY"
        },
        {
            id: 3,
            title: "Make Requests",
            description: "Start making authenticated requests to our API endpoints",
            code: "curl -H 'Authorization: Bearer YOUR_API_KEY' https://api.developertag.com/api/portfolio"
        }
    ]

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-[#dcf3ec] via-white to-[#f0f9f6] py-20 md:py-28 overflow-hidden">
                <div className="absolute inset-0 bg-[size:80px_80px] bg-[linear-gradient(to_right,rgba(19,168,124,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(19,168,124,0.05)_1px,transparent_1px)] opacity-40" />
                
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center px-4 py-2 rounded-full border border-[#13a87c] bg-[#13a87c]/5 mb-6"
                    >
                        <Code className="w-4 h-4 text-[#13a87c] mr-2" />
                        <span className="text-sm font-medium text-[#13a87c]">Developer Resources</span>
                    </motion.div>
                    
                    <Heading headOne="API" headTwo="Documentation" headThree="" />
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-gray-600 max-w-3xl mx-auto mt-6"
                    >
                        Integrate DeveloperTag&apos;s services into your applications with our powerful and easy-to-use REST API
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-8"
                    >
                        <a
                            href="mailto:adil.rafique.pro@gmail.com?subject=API Access Request"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#13a87c] to-[#18CB96] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            <Key className="w-5 h-5" />
                            Request API Access
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Features */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl border-2 border-gray-200 p-6 text-center hover:border-[#13a87c] hover:shadow-xl transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#13a87c] to-[#18CB96] flex items-center justify-center mx-auto mb-4">
                                    <feature.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-sm text-gray-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Authentication */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Authentication</h2>
                        <p className="text-gray-600">Secure your API requests with token-based authentication</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {authSteps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl border-2 border-gray-200 p-6 hover:border-[#13a87c] hover:shadow-xl transition-all duration-300"
                            >
                                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#13a87c] to-[#18CB96] flex items-center justify-center mb-4">
                                    <span className="text-white font-bold">{step.id}</span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                                <p className="text-sm text-gray-600 mb-4">{step.description}</p>
                                <div className="bg-gray-900 rounded-lg p-3">
                                    <code className="text-xs text-green-400 font-mono break-all">{step.code}</code>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* API Endpoints */}
            <section className="py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">API Endpoints</h2>
                        <p className="text-gray-600">Available endpoints and usage examples</p>
                    </motion.div>

                    <div className="space-y-8">
                        {endpoints.map((endpoint, index) => (
                            <motion.div
                                key={endpoint.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-[#13a87c] hover:shadow-xl transition-all duration-300"
                            >
                                <div className="p-6 bg-gray-50 border-b border-gray-200">
                                    <div className="flex items-center gap-4 flex-wrap">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                            endpoint.method === 'GET' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                                        }`}>
                                            {endpoint.method}
                                        </span>
                                        <code className="text-gray-900 font-mono font-semibold">{endpoint.path}</code>
                                    </div>
                                    <p className="text-gray-600 mt-2">{endpoint.description}</p>
                                </div>

                                <div className="p-6">
                                    <div className="mb-6">
                                        <div className="flex items-center justify-between mb-2">
                                            <h4 className="text-sm font-semibold text-gray-900">Example Request</h4>
                                            <button
                                                onClick={() => copyToClipboard(endpoint.example, `${endpoint.id}-request`)}
                                                className="flex items-center gap-1 text-xs text-[#13a87c] hover:text-[#0f8a6b] transition-colors"
                                            >
                                                {copiedEndpoint === `${endpoint.id}-request` ? (
                                                    <>
                                                        <Check className="w-4 h-4" />
                                                        Copied!
                                                    </>
                                                ) : (
                                                    <>
                                                        <Copy className="w-4 h-4" />
                                                        Copy
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                            <pre className="text-sm text-green-400 font-mono">{endpoint.example}</pre>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <h4 className="text-sm font-semibold text-gray-900">Example Response</h4>
                                            <button
                                                onClick={() => copyToClipboard(endpoint.response, `${endpoint.id}-response`)}
                                                className="flex items-center gap-1 text-xs text-[#13a87c] hover:text-[#0f8a6b] transition-colors"
                                            >
                                                {copiedEndpoint === `${endpoint.id}-response` ? (
                                                    <>
                                                        <Check className="w-4 h-4" />
                                                        Copied!
                                                    </>
                                                ) : (
                                                    <>
                                                        <Copy className="w-4 h-4" />
                                                        Copy
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                            <pre className="text-sm text-blue-400 font-mono">{endpoint.response}</pre>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Rate Limits */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl p-8 md:p-12 border-2 border-[#13a87c]/20 shadow-xl"
                    >
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#13a87c] to-[#18CB96] flex items-center justify-center flex-shrink-0">
                                <Server className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Rate Limits & Best Practices</h3>
                                <p className="text-gray-600">Guidelines for optimal API usage</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <ChevronRight className="w-5 h-5 text-[#13a87c] flex-shrink-0 mt-0.5" />
                                <p className="text-gray-700"><strong>Free Tier:</strong> 1,000 requests per day</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <ChevronRight className="w-5 h-5 text-[#13a87c] flex-shrink-0 mt-0.5" />
                                <p className="text-gray-700"><strong>Pro Tier:</strong> 100,000 requests per day</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <ChevronRight className="w-5 h-5 text-[#13a87c] flex-shrink-0 mt-0.5" />
                                <p className="text-gray-700"><strong>Enterprise:</strong> Unlimited requests with custom SLA</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <ChevronRight className="w-5 h-5 text-[#13a87c] flex-shrink-0 mt-0.5" />
                                <p className="text-gray-700">Implement exponential backoff for rate limit errors (429 status)</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <ChevronRight className="w-5 h-5 text-[#13a87c] flex-shrink-0 mt-0.5" />
                                <p className="text-gray-700">Cache responses when possible to reduce API calls</p>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-gray-200">
                            <a
                                href="mailto:adil.rafique.pro@gmail.com?subject=API Enterprise Plan"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#13a87c] to-[#18CB96] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
                            >
                                <Terminal className="w-5 h-5" />
                                Upgrade to Enterprise
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

