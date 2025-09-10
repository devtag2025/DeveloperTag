'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'dark' | 'light' | 'nav';
    size?: 'xs' | 'sm' | 'md' | 'lg';
    className?: string;
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
    onClick?: () => void;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    withArrow?: boolean;
    href?: string;
    mailto?: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
    rel?: string;
    animated?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'dark',
    size = 'md',
    className = '',
    rounded = 'md',
    onClick,
    disabled = false,
    type = 'button',
    withArrow = false,
    href,
    mailto,
    target,
    rel,
    animated = true,
    ...props
}) => {
    const getVariantClasses = (): string => {
        switch (variant) {
            case 'dark':
                return 'text-white bg-black border border-gray-800 hover:text-black';
            case 'light':
                return 'text-[#0F8CA0] bg-white border border-gray-200 hover:text-white';
            case 'nav':
                return 'text-white bg-[#0d6674] hover:bg-[#0F8CA0] ';
            default:
                return 'text-white bg-black border border-gray-800 hover:text-black';
        }
    };

    const getSizeClasses = (): string => {
        switch (size) {
            case 'xs':
                return 'px-3 py-1 text-xs';
            case 'sm':
                return 'px-3 py-1.5 text-sm';
            case 'md':
                return 'px-6 py-3 text-sm';
            case 'lg':
                return 'px-6 py-3 text-base';
            default:
                return 'px-4 py-2.5 text-sm';
        }
    };

    const getRoundedClasses = (): string => {
        switch (rounded) {
            case 'none':
                return 'rounded-none';
            case 'sm':
                return 'rounded-full';
            case 'md':
                return 'rounded-full';
            case 'lg':
                return 'rounded-full';
            case 'full':
                return 'rounded-full';
            default:
                return 'rounded-md';
        }
    };

    const baseClasses = `
    group relative overflow-hidden font-medium transition-all duration-300 
    ${getSizeClasses()} 
    ${getRoundedClasses()} 
    ${getVariantClasses()} 
    ${className} 
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
  `.trim();

    const buttonContent = (
        <>
            {/* Conditional Bottom-Left Fill Animation */}
            {animated && (
                <div className="absolute inset-0 bg-[#13a87c] rounded-4xl transform origin-bottom-left scale-x-0 scale-y-0 transition-transform duration-500 ease-out group-hover:scale-x-100 group-hover:scale-y-100 group-active:scale-x-100 group-active:scale-y-100 group-focus:scale-x-100 group-focus:scale-y-100"></div>
            )}

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center ">
                <span className="transition-colors duration-300">{children}</span>
                {withArrow && (
                    <ArrowRight className="w-4 h-4 ml-2 -rotate-45 transition-transform duration-200 group-hover:rotate-0" />
                )}
            </div>
        </>
    );

    // Handle mailto
    if (mailto) {
        return (
            <a
                href={`mailto:${mailto}`}
                className={baseClasses}
                {...props}
            >
                {buttonContent}
            </a>
        );
    }

    // Handle external/internal links
    if (href) {
        const isExternal = href.startsWith('http') || href.startsWith('//');

        if (isExternal) {
            return (
                <a
                    href={href}
                    target={target || '_blank'}
                    rel={rel || 'noopener noreferrer'}
                    className={baseClasses}
                    {...props}
                >
                    {buttonContent}
                </a>
            );
        }

        return (
            <Link href={href} className={baseClasses} {...props}>
                {buttonContent}
            </Link>
        );
    }

    // Regular button
    return (
        <button
            className={baseClasses}
            onClick={disabled ? undefined : onClick}
            disabled={disabled}
            type={type}
            {...props}
        >
            {buttonContent}
        </button>
    );
};

export default Button;