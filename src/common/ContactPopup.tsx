"use client";
import React, { useState, useRef, useEffect } from 'react';
import { X, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import gsap from 'gsap';
import { submitServiceRequest, submitQuestion, CommonForm } from "@/config/FormsApi"

// Define interfaces
interface ServiceRequestForm {
    name: string;
    email: string;
    description: string;
    serviceType: string;
}

interface ContactPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

interface FormComponentProps {
    onBack: () => void;
    formRef: React.MutableRefObject<HTMLDivElement | null>;
}

interface OptionButtonProps {
    label: string;
    onClick: () => void;
    description: string;
}

interface RenderSelectedFormProps {
    option: string;
    onBack: () => void;
    formRef: React.MutableRefObject<HTMLDivElement | null>;
}

interface NotificationPopupProps {
    isOpen: boolean;
    type: 'success' | 'error';
    title: string;
    message: string;
    onClose: () => void;
}

// Success/Error Notification Popup
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
    const iconColor = type === 'success' ? 'text-[#13a87c]' : 'text-red-500';
    const borderColor = type === 'success' ? 'border-[#13a87c]/20' : 'border-red-500/20';

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
            <div
                ref={popupRef}
                className={`bg-gray-50 text-gray-900 rounded-xl w-full max-w-md p-6 shadow-2xl border ${borderColor}`}
                style={{ opacity: 0, transform: 'scale(0.9)' }}
            >
                <div className="flex items-center mb-4">
                    <Icon className={`h-6 w-6 ${iconColor} mr-3`} />
                    <h3 className="text-xl font-bold">{title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{message}</p>
                <button
                    onClick={onClose}
                    className="w-full bg-[#13a87c] hover:bg-[#0f8a6b] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                >
                    Got it
                </button>
            </div>
        </div>
    );
};

// Initial popup that shows the three options
const ContactPopup: React.FC<ContactPopupProps> = ({ isOpen, onClose }) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [notification, setNotification] = useState<{
        isOpen: boolean;
        type: 'success' | 'error';
        title: string;
        message: string;
    }>({ isOpen: false, type: 'success', title: '', message: '' });

    // Correctly typed refs
    const popupOverlayRef = useRef<HTMLDivElement | null>(null);
    const popupContentRef = useRef<HTMLDivElement | null>(null);

    // Create refs for each form component
    const serviceFormRef = useRef<HTMLDivElement | null>(null);
    const meetingFormRef = useRef<HTMLDivElement | null>(null);
    const questionFormRef = useRef<HTMLDivElement | null>(null);

    const closePopup = (): void => {
        const tl = gsap.timeline({
            onComplete: () => {
                onClose();
                setTimeout(() => setSelectedOption(null), 300);
            }
        });

        if (popupContentRef.current) {
            tl.to(popupContentRef.current, {
                scale: 0.9,
                opacity: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        }

        if (popupOverlayRef.current) {
            tl.to(popupOverlayRef.current, {
                opacity: 0,
                duration: 0.3,
                ease: "power2.out"
            }, "-=0.2");
        }
    };

    const selectOption = (option: string): void => {
        setSelectedOption(option);
    };

    const getFormRef = (option: string): React.MutableRefObject<HTMLDivElement | null> => {
        switch (option) {
            case 'service':
                return serviceFormRef;
            case 'meeting':
                return meetingFormRef;
            case 'question':
                return questionFormRef;
            default:
                return serviceFormRef;
        }
    };

    const showNotification = (type: 'success' | 'error', title: string, message: string) => {
        setNotification({ isOpen: true, type, title, message });
    };

    const closeNotification = () => {
        setNotification(prev => ({ ...prev, isOpen: false }));
        if (notification.type === 'success') {
            setTimeout(() => closePopup(), 300);
        }
    };

    useEffect(() => {
        if (isOpen && popupOverlayRef.current && popupContentRef.current) {
            const tl = gsap.timeline();

            tl.fromTo(popupOverlayRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 0.3, ease: "power2.out" }
            );

            tl.fromTo(popupContentRef.current,
                { scale: 0.9, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" },
                "-=0.1"
            );
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <>
            <div
                ref={popupOverlayRef}
                className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-[999] flex items-center justify-center p-4"
                onClick={closePopup}
                style={{ opacity: 0 }}
            >
                <div
                    ref={popupContentRef}
                    className="bg-gray-50 text-gray-900 rounded-xl w-full max-w-md overflow-hidden shadow-2xl"
                    onClick={(e): void => e.stopPropagation()}
                    style={{ opacity: 0, transform: 'scale(0.9)' }}
                >
                    <div className="flex justify-end p-4">
                        <button
                            onClick={closePopup}
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {selectedOption ? (
                        <RenderSelectedForm
                            option={selectedOption}
                            onBack={(): void => setSelectedOption(null)}
                            formRef={getFormRef(selectedOption)}
                            showNotification={showNotification}
                        />
                    ) : (
                        <div className="px-6 pb-8">
                            <h2 className="text-2xl font-bold text-center mb-6">How can I help you?</h2>

                            <div className="space-y-4">
                                <OptionButton
                                    label="Service Request"
                                    onClick={(): void => selectOption('service')}
                                    description="Get a quote for your project"
                                />

                                <OptionButton
                                    label="Schedule a 1-on-1 Meeting"
                                    onClick={(): void => selectOption('meeting')}
                                    description="Book a time to discuss your needs"
                                />

                                <OptionButton
                                    label="Ask a Question"
                                    onClick={(): void => selectOption('question')}
                                    description="Get answers to your queries"
                                />
                            </div>
                        </div>
                    )}
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

// Individual option button with GSAP hover effect
const OptionButton: React.FC<OptionButtonProps> = ({ label, onClick, description }) => {
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        const button = buttonRef.current;
        if (!button) return;

        const handleMouseEnter = (): void => {
            gsap.to(button, {
                scale: 1.03,
                backgroundColor: '#f0fdf4',
                duration: 0.2,
                ease: "power2.out"
            });
        };

        const handleMouseLeave = (): void => {
            gsap.to(button, {
                scale: 1,
                backgroundColor: '#f9fafb',
                duration: 0.2,
                ease: "power2.out"
            });
        };

        const handleMouseDown = (): void => {
            gsap.to(button, {
                scale: 0.98,
                duration: 0.1,
                ease: "power2.out"
            });
        };

        const handleMouseUp = (): void => {
            gsap.to(button, {
                scale: 1.03,
                duration: 0.1,
                ease: "power2.out"
            });
        };

        button.addEventListener('mouseenter', handleMouseEnter);
        button.addEventListener('mouseleave', handleMouseLeave);
        button.addEventListener('mousedown', handleMouseDown);
        button.addEventListener('mouseup', handleMouseUp);

        return () => {
            button.removeEventListener('mouseenter', handleMouseEnter);
            button.removeEventListener('mouseleave', handleMouseLeave);
            button.removeEventListener('mousedown', handleMouseDown);
            button.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <button
            ref={buttonRef}
            className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 text-left transition-all duration-300"
            onClick={onClick}
        >
            <div className="flex flex-col">
                <span className="font-medium text-gray-900 text-lg">{label}</span>
                <span className="text-gray-600 text-sm mt-1">{description}</span>
            </div>
        </button>
    );
};

// Render the appropriate form based on the selected option
const RenderSelectedForm: React.FC<RenderSelectedFormProps & { showNotification: (type: 'success' | 'error', title: string, message: string) => void }> = ({ option, onBack, formRef, showNotification }) => {
    useEffect(() => {
        if (formRef.current) {
            gsap.fromTo(formRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
            );
        }
    }, [formRef, option]);

    switch (option) {
        case 'service':
            return <ServiceRequestForm onBack={onBack} formRef={formRef} showNotification={showNotification} />;
        case 'meeting':
            return <ScheduleMeetingComponent onBack={onBack} formRef={formRef} />;
        case 'question':
            return <AskQuestionForm onBack={onBack} formRef={formRef} showNotification={showNotification} />;
        default:
            return null;
    }
};

// Service Request Form
const ServiceRequestForm: React.FC<FormComponentProps & { showNotification: (type: 'success' | 'error', title: string, message: string) => void }> = ({ onBack, formRef, showNotification }) => {
    const services = [
        'Web Development',
        'App Development',
        'Video Editing',
        'AI Solutions',
        'UI/UX Design',
        'SEO Optimization',
        'Content Writing',
        'Social Media Management',
        'Graphic Design',
        'Video Production',
        'Digital Marketing'
    ];

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        serviceType: services[0],
        description: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const contactData: ServiceRequestForm = {
                name: formData.name,
                email: formData.email,
                serviceType: formData.serviceType,
                description: formData.description
            };

            const response = await submitServiceRequest(contactData);

            if (response.success) {
                showNotification(
                    'success',
                    'Service Request Sent!',
                    'Thank you for your service inquiry! We\'ll send you a detailed proposal within 1-2 hours.'
                );
            } else {
                showNotification('error', 'Submission Failed', response.message || 'Please try again.');
            }
        } catch (error: unknown) {
            const errorMessage = (error as { message?: string })?.message || 'An unexpected error occurred. Please try again.';
            showNotification('error', 'Submission Failed', errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div ref={formRef} className="px-6 pb-8" style={{ opacity: 0 }}>
            <div className="flex items-center mb-6">
                <button
                    onClick={onBack}
                    className="text-gray-400 hover:text-gray-600 mr-3 transition-colors"
                    type="button"
                    disabled={isSubmitting}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                </button>
                <h2 className="text-2xl font-bold">Request a Service</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
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
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-[#13a87c] focus:border-[#13a87c] text-gray-900 disabled:opacity-50"
                        placeholder="John Doe"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
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
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-[#13a87c] focus:border-[#13a87c] text-gray-900 disabled:opacity-50"
                        placeholder="john@example.com"
                    />
                </div>

                <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                        Service Needed
                    </label>
                    <select
                        id="service"
                        name="serviceType"
                        required
                        value={formData.serviceType}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-[#13a87c] focus:border-[#13a87c] text-gray-900 disabled:opacity-50"
                    >
                        {services.map(service => (
                            <option key={service} value={service}>{service}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                        Project Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        required
                        value={formData.description}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        rows={4}
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-[#13a87c] focus:border-[#13a87c] text-gray-900 resize-none disabled:opacity-50"
                        placeholder="Tell us about your project requirements..."
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#13a87c] hover:bg-[#0f8a6b] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="animate-spin h-4 w-4 mr-2" />
                            Submitting...
                        </>
                    ) : (
                        'Submit Request'
                    )}
                </button>
            </form>
        </div>
    );
};

// Schedule Meeting Component
const ScheduleMeetingComponent: React.FC<FormComponentProps> = ({ onBack, formRef }) => {
    const openCalendly = () => {
        window.open('https://calendly.com/developertag', '_blank');
    };

    return (
        <div ref={formRef} className="px-6 pb-8" style={{ opacity: 0 }}>
            <div className="flex items-center mb-6">
                <button
                    onClick={onBack}
                    className="text-gray-400 hover:text-gray-600 mr-3 transition-colors"
                    type="button"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                </button>
                <h2 className="text-2xl font-bold">Schedule a Meeting</h2>
            </div>

            <p className="text-gray-600 mb-6">
                Book a 1-on-1 consultation to discuss your project needs in detail.
            </p>

            <button
                onClick={openCalendly}
                className="w-full bg-gradient-to-r from-[#13a87c] to-[#18CB96] hover:from-[#0f8a6b] hover:to-[#13a87c] text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
                View My Calendar
            </button>

            <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="text-lg font-medium mb-2">What to expect</h3>
                <ul className="text-gray-600 space-y-2">
                    <li className="flex items-start">
                        <span className="text-[#13a87c] mr-2">•</span>
                        <span>30-minute consultation via Google Meet or Zoom</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-[#13a87c] mr-2">•</span>
                        <span>Discussion about your project requirements</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-[#13a87c] mr-2">•</span>
                        <span>Recommendations and potential solutions</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-[#13a87c] mr-2">•</span>
                        <span>Q&A session to address any concerns</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

// Ask Question Form
const AskQuestionForm: React.FC<FormComponentProps & { showNotification: (type: 'success' | 'error', title: string, message: string) => void }> = ({ onBack, formRef, showNotification }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        question: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const contactData: CommonForm = {
                name: formData.name,
                email: formData.email,
                description: formData.question
            };

            const response = await submitQuestion(contactData);

            if (response.success) {
                showNotification(
                    'success',
                    'Question Submitted!',
                    'Thank you for your question! I\'ll get back to you within 24 hours with a detailed answer.'
                );
            } else {
                showNotification('error', 'Submission Failed', response.message || 'Please try again.');
            }
        } catch (error: unknown) {
            const errorMessage = (error as { message?: string })?.message || 'An unexpected error occurred. Please try again.';
            showNotification('error', 'Submission Failed', errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div ref={formRef} className="px-6 pb-8" style={{ opacity: 0 }}>
            <div className="flex items-center mb-6">
                <button
                    onClick={onBack}
                    className="text-gray-400 hover:text-gray-600 mr-3 transition-colors"
                    type="button"
                    disabled={isSubmitting}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                </button>
                <h2 className="text-2xl font-bold">Ask a Question</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="question-name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                    </label>
                    <input
                        type="text"
                        id="question-name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-[#13a87c] focus:border-[#13a87c] text-gray-900 disabled:opacity-50"
                        placeholder="John Doe"
                    />
                </div>

                <div>
                    <label htmlFor="question-email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="question-email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-[#13a87c] focus:border-[#13a87c] text-gray-900 disabled:opacity-50"
                        placeholder="john@example.com"
                    />
                </div>

                <div>
                    <label htmlFor="question-text" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Question
                    </label>
                    <textarea
                        id="question-text"
                        name="question"
                        required
                        value={formData.question}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        rows={5}
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-[#13a87c] focus:border-[#13a87c] text-gray-900 resize-none disabled:opacity-50"
                        placeholder="What would you like to know?"
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#13a87c] hover:bg-[#0f8a6b] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="animate-spin h-4 w-4 mr-2" />
                            Submitting...
                        </>
                    ) : (
                        'Submit Question'
                    )}
                </button>
            </form>
        </div>
    );
};

export default ContactPopup;