"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/utils/cn";
import { submitContact, ContactForm as ContactFormType } from "@/config/FormsApi";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";

export function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [notification, setNotification] = useState<{
        isOpen: boolean;
        type: 'success' | 'error';
        title: string;
        message: string;
    }>({ isOpen: false, type: 'success', title: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const contactData: ContactFormType = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phoneNumber: formData.phoneNumber || undefined,
                message: formData.message
            };

            const response = await submitContact(contactData);

            if (response.success) {
                setNotification({
                    isOpen: true,
                    type: 'success',
                    title: 'Message Sent!',
                    message: 'Thank you for contacting us! We\'ll get back to you within 24-48 hours.'
                });
                // Reset form
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phoneNumber: "",
                    message: ""
                });
            } else {
                setNotification({
                    isOpen: true,
                    type: 'error',
                    title: 'Submission Failed',
                    message: response.message || 'Please try again.'
                });
            }
        } catch (error: unknown) {
            const errorMessage = (error as { message?: string })?.message || 'An unexpected error occurred. Please try again.';
            setNotification({
                isOpen: true,
                type: 'error',
                title: 'Submission Failed',
                message: errorMessage
            });
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <div data-aos="fade-up" className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
            <h2 className="font-bold text-xl md:text-4xl mb-6" style={{ color: "#13a87c" }}>
                Have a question ? Reach us out
            </h2>

            <form className="" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <LabelInputContainer>
                        <Label htmlFor="firstname">First name</Label>
                        <Input 
                            id="firstname" 
                            name="firstName"
                            placeholder="John" 
                            type="text" 
                            value={formData.firstName}
                            onChange={handleChange}
                            required 
                            disabled={isSubmitting}
                        />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label htmlFor="lastname">Last name</Label>
                        <Input 
                            id="lastname" 
                            name="lastName"
                            placeholder="Doe" 
                            type="text" 
                            value={formData.lastName}
                            onChange={handleChange}
                            required 
                            disabled={isSubmitting}
                        />
                    </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                        id="email" 
                        name="email"
                        placeholder="johndoe@example.com" 
                        type="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                        disabled={isSubmitting}
                    />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                        id="phone" 
                        name="phoneNumber"
                        placeholder="+1234567890" 
                        type="tel" 
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        disabled={isSubmitting}
                    />
                </LabelInputContainer>
                <LabelInputContainer className="mb-8">
                    <Label htmlFor="message">Your Message</Label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Write your message here..."
                        className="w-full p-2 border rounded-md dark:bg-neutral-800 dark:text-white"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                    ></textarea>
                </LabelInputContainer>

                <button
                    className="bg-gradient-to-br from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    type="submit"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Sending...
                        </>
                    ) : (
                        <>
                            Send &rarr;
                        </>
                    )}
                </button>

            </form>

            {/* Notification Popup */}
            {notification.isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
                    <div className="bg-gray-50 text-gray-900 rounded-xl w-full max-w-md p-6 shadow-2xl border animate-in fade-in zoom-in duration-300">
                        <div className="flex items-center mb-4">
                            {notification.type === 'success' ? (
                                <CheckCircle className="h-6 w-6 text-[#13a87c] mr-3" />
                            ) : (
                                <XCircle className="h-6 w-6 text-red-500 mr-3" />
                            )}
                            <h3 className="text-xl font-bold">{notification.title}</h3>
                        </div>
                        <p className="text-gray-600 mb-6">{notification.message}</p>
                        <button
                            onClick={() => setNotification({ ...notification, isOpen: false })}
                            className="w-full bg-[#13a87c] hover:bg-[#0f8a6b] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                        >
                            Got it
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
