"use client";
import React, { useState, useRef, useEffect } from 'react';
import { X, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import gsap from 'gsap';
import { submitServiceRequest, ServiceRequestForm } from "@/config/FormsApi";

interface ServicePopupProps {
    onClose: () => void;
    serviceTitle: string;
}

interface NotificationPopupProps {
    isOpen: boolean;
    type: 'success' | 'error';
    title: string;
    message: string;
    onClose: () => void;
}

const NotificationPopup: React.FC<NotificationPopupProps> = ({ isOpen, type, title, message, onClose }) => {
    const popupRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (isOpen && popupRef.current) {
            gsap.fromTo(popupRef.current,
                { opacity: 0, scale: 0.9 },
                { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.7)" }
            );
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const Icon = type === 'success' ? CheckCircle : XCircle;
    const iconColor = type === 'success' ? 'text-green-600' : 'text-red-600';
    const borderColor = type === 'success' ? 'border-green-200' : 'border-red-200';

    return (
        <div className="fixed inset-0 bg-black/40 z-[10000] flex items-center justify-center p-4">
            <div
                ref={popupRef}
                className={`bg-white text-gray-800 rounded-2xl w-full max-w-md p-6 shadow-2xl border ${borderColor}`}
                style={{ opacity: 0, transform: 'scale(0.9)' }}
            >
                <div className="flex items-center mb-4">
                    <Icon className={`h-6 w-6 ${iconColor} mr-3`} />
                    <h3 className="text-xl font-bold">{title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{message}</p>
                <button
                    onClick={onClose}
                    className="w-full bg-[#13a87c] hover:bg-[#0f8a6b] text-white font-medium py-2.5 px-4 rounded-xl transition-colors duration-300"
                >
                    Got it
                </button>
            </div>
        </div>
    );
};

const ServicePopup: React.FC<ServicePopupProps> = ({ onClose, serviceTitle }) => {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: serviceTitle,
        description: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [notification, setNotification] = useState<{
        isOpen: boolean;
        type: 'success' | 'error';
        title: string;
        message: string;
    }>({ isOpen: false, type: 'success', title: '', message: '' });

    const popupOverlayRef = useRef<HTMLDivElement | null>(null);
    const popupContentRef = useRef<HTMLDivElement | null>(null);
    const formRef = useRef<HTMLDivElement | null>(null);

    const closePopup = (): void => {
        const tl = gsap.timeline({
            onComplete: () => {
                setIsOpen(false);
                onClose();
            }
        });

        if (popupContentRef.current) {
            tl.to(popupContentRef.current, {
                scale: 0.96,
                opacity: 0,
                duration: 0.25,
                ease: "power2.out"
            });
        }

        if (popupOverlayRef.current) {
            tl.to(popupOverlayRef.current, {
                opacity: 0,
                duration: 0.25,
                ease: "power2.out"
            }, "-=0.15");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const showNotification = (type: 'success' | 'error', title: string, message: string) => {
        setNotification({ isOpen: true, type, title, message });
    };

    const closeNotification = () => {
        setNotification(prev => ({ ...prev, isOpen: false }));
        if (notification.type === 'success') {
            setTimeout(() => closePopup(), 250);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const serviceData: ServiceRequestForm = {
                name: formData.name,
                email: formData.email,
                serviceType: formData.service,
                description: formData.description
            };
            const response = await submitServiceRequest(serviceData);

            if (response?.success) {
                showNotification(
                    'success',
                    'Service Request Sent!',
                    "Thank you for your service inquiry! I'll send you a detailed proposal within 24-48 hours."
                );
            } else {
                showNotification('error', 'Submission Failed', response?.message || 'Please try again.');
            }
        } catch (error: unknown) {
            const errorMessage = (error as { message?: string })?.message || 'An unexpected error occurred. Please try again.';
            showNotification('error', 'Submission Failed', errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        setIsOpen(true);
    }, []);

    useEffect(() => {
        if (isOpen && popupOverlayRef.current && popupContentRef.current && formRef.current) {
            const tl = gsap.timeline();
            tl.fromTo(popupOverlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.25, ease: "power2.out" });
            tl.fromTo(popupContentRef.current, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.35, ease: "power3.out" }, "-=0.05");
            tl.fromTo(formRef.current, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }, "-=0.1");
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <>
            <div
                ref={popupOverlayRef}
                className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[9999] flex items-center justify-center p-4"
                onClick={closePopup}
                style={{ opacity: 0 }}
            >
                <div
                    ref={popupContentRef}
                    className="relative bg-white text-gray-900 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl border border-gray-200"
                    onClick={(e): void => e.stopPropagation()}
                    style={{ opacity: 0 }}
                >
                    {/* Close Button */}
                    <button
                        onClick={closePopup}
                        className="absolute top-3 right-3 inline-flex items-center justify-center h-9 w-9 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition-colors"
                        disabled={isSubmitting}
                    >
                        <X size={18} />
                    </button>

                    {/* Header */}
                    <div className="px-6 pt-6 pb-4">
                        <div className="inline-flex items-center px-3 py-1.5 rounded-full border border-[#13a87c]/40 bg-[#13a87c]/10 text-[#13a87c] text-xs font-medium">
                            Service Request
                        </div>
                        <h2 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight">Request {serviceTitle}</h2>
                        <p className="mt-2 text-sm text-gray-600">Let&apos;s discuss your project and bring your ideas to life.</p>
                    </div>

                    {/* Form */}
                    <div ref={formRef} className="px-6 pb-6">
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1.5">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        disabled={isSubmitting}
                                        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#13a87c]/40 focus:border-[#13a87c] text-gray-900 placeholder:text-gray-400 disabled:opacity-50 outline-none"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1.5">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        disabled={isSubmitting}
                                        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#13a87c]/40 focus:border-[#13a87c] text-gray-900 placeholder:text-gray-400 disabled:opacity-50 outline-none"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="service" className="block text-xs font-medium text-gray-700 mb-1.5">
                                        Service Needed
                                    </label>
                                    <input
                                        type="text"
                                        id="service"
                                        name="service"
                                        required
                                        value={formData.service}
                                        onChange={handleChange}
                                        disabled={isSubmitting}
                                        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#13a87c]/40 focus:border-[#13a87c] text-gray-900 placeholder:text-gray-400 disabled:opacity-50 outline-none"
                                        placeholder="Service name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="description" className="block text-xs font-medium text-gray-700 mb-1.5">
                                        Project Description
                                    </label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        required
                                        value={formData.description}
                                        onChange={handleChange}
                                        disabled={isSubmitting}
                                        rows={6}
                                        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#13a87c]/40 focus:border-[#13a87c] text-gray-900 placeholder:text-gray-400 disabled:opacity-50 outline-none resize-none"
                                        placeholder="Tell me about your project requirements..."
                                    />
                                </div>
                            </div>

                            <div className="md:col-span-2 pt-2">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-[#13a87c] hover:bg-[#0f8a6b] text-white font-medium py-3 px-4 rounded-xl transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="animate-spin h-5 w-5 mr-2" />
                                            Submitting...
                                        </>
                                    ) : (
                                        'Submit Request'
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <NotificationPopup
                isOpen={notification.isOpen}
                type={notification.type}
                title={notification.title}
                message={notification.message}
                onClose={closeNotification}
            />
        </>
    );
};

export default ServicePopup;
