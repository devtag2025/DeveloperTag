"use client";

import { useState } from "react";
import Heading from "@/common/Heading";
import { CheckCircle, Mail, Sparkles, TrendingUp, Code, Lightbulb } from "lucide-react";

export function NewsLetter() {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address");
            return;
        }

        setIsLoading(true);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            setIsSubscribed(true);
            setEmail("");
        } catch {
            setError("Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const resetForm = () => {
        setIsSubscribed(false);
        setEmail("");
        setError("");
    };

    if (isSubscribed) {
        return (
            <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white border-y border-gray-200">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-[size:60px_60px] bg-[linear-gradient(to_right,rgba(19,168,124,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(19,168,124,0.03)_1px,transparent_1px)]"></div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                    <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 bg-gradient-to-r from-[#13a87c] to-[#18CB96] rounded-full flex items-center justify-center">
                            <CheckCircle className="w-10 h-10 text-white" />
                        </div>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Welcome to the Community!
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Thank you for subscribing! You&apos;ll receive our latest insights, tips, and updates directly in your inbox.
                    </p>

                    <button
                        onClick={resetForm}
                        className="px-6 py-3 bg-gradient-to-r from-[#13a87c] to-[#18CB96] text-white font-semibold rounded-lg hover:from-[#0f8a6b] hover:to-[#13a87c] transition-all duration-300 transform hover:scale-105"
                    >
                        Subscribe Another Email
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white border-y border-gray-200">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[size:60px_60px] bg-[linear-gradient(to_right,rgba(19,168,124,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(19,168,124,0.03)_1px,transparent_1px)]"></div>

            {/* Floating Icons */}
            <div className="absolute top-20 left-10 text-[#13a87c]/20">
                <Code className="w-8 h-8" />
            </div>
            <div className="absolute top-32 right-16 text-[#13a87c]/20">
                <Lightbulb className="w-6 h-6" />
            </div>
            <div className="absolute bottom-20 left-20 text-[#13a87c]/20">
                <TrendingUp className="w-7 h-7" />
            </div>
            <div className="absolute bottom-32 right-12 text-[#13a87c]/20">
                <Sparkles className="w-5 h-5" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Header */}
                <div className="text-center mb-12">
                    <Heading
                        headOne="Stay Ahead with "
                        headTwo="Expert "
                        headThree="Insights"
                    />
                    <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
                        Get exclusive access to industry trends, coding tips, project insights, and the latest in web development delivered straight to your inbox.
                    </p>
                </div>

                {/* Newsletter Form */}
                <div className="max-w-lg mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email address"
                                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#13a87c] focus:ring-0 transition-colors duration-300 bg-white/80 backdrop-blur-sm"
                                required
                                disabled={isLoading}
                            />
                        </div>

                        {error && (
                            <p className="text-red-500 text-sm text-center">{error}</p>
                        )}

                        <button
                            type="submit"
                            disabled={isLoading || !email}
                            className="w-full py-4 bg-gradient-to-r from-[#13a87c] to-[#18CB96] text-white font-semibold rounded-xl hover:from-[#0f8a6b] hover:to-[#13a87c] transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                        >
                            {isLoading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    <span>Subscribing...</span>
                                </>
                            ) : (
                                <span>Subscribe to Newsletter</span>
                            )}
                        </button>
                    </form>

                    {/* Trust Indicators */}
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-500 mb-4">
                            Join 10,000+ developers already subscribed
                        </p>
                        <div className="flex items-center justify-center space-x-6 text-xs text-gray-400">
                            <div className="flex items-center space-x-1">
                                <CheckCircle className="w-4 h-4 text-[#13a87c]" />
                                <span>No spam</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <CheckCircle className="w-4 h-4 text-[#13a87c]" />
                                <span>Unsubscribe anytime</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <CheckCircle className="w-4 h-4 text-[#13a87c]" />
                                <span>Weekly updates</span>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}