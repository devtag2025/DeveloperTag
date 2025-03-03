import Image from 'next/image';
import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

// ✅ Define Interface for Props
interface ProfileCardProps {
    name: string;
    title: string;
    imageUrl: any;
    linkedInUrl: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, title, imageUrl, linkedInUrl }) => {
    const nameParts = name.split(' ');
    const firstName = nameParts.slice(0, -1).join(' ') || name;
    const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : '';

    return (
        <div className="flex flex-col items-center max-w-xs p-6  rounded-lg shadow-md">
            <div className="w-full mb-6">
                <Image
                    src={imageUrl || "/api/placeholder/400/400"}
                    alt={name}
                    width={500}
                    height={500}
                    className="w-full h-auto rounded-md grayscale"
                />
            </div>

            <div className="text-4xl font-bold mb-2 text-center">
                <span className="text-white">{firstName} </span>
                {lastName && <span className="text-teal-500">{lastName}</span>}
            </div>

            <div className="text-xl text-gray-300 mb-4">{title}</div>

            <div className="mt-2">
                <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-teal-500">
                    <FaLinkedin size={24} />
                </a>
            </div>
        </div>
    );
};

export default ProfileCard;
