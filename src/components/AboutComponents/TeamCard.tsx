import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

// ✅ Define Interface for Props
interface ProfileCardProps {
    name: string;
    title: string;
    imageUrl: StaticImageData | string; // ✅ Proper Type
    linkedInUrl: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, title, imageUrl, linkedInUrl }) => {
    const nameParts = name.split(' ');
    const firstName = nameParts.slice(0, -1).join(' ') || name;
    const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : '';

    return (
        <div data-aos="fade-in" className="flex flex-col items-center max-w-xs p-6 rounded-lg">
            <div className="w-full mb-6">
                <Image
                    src={imageUrl || "/api/placeholder/400/400"}
                    alt={name}
                    width={500}
                    height={500}
                    className="w-full h-auto rounded-md"
                />
            </div>

            <div className="text-4xl font-bold mb-2 text-center">
                <span className="text-black">{firstName} </span>
                {lastName && <span className="text-[#4E15BF]">{lastName}</span>}
            </div>

            <div className="text-xl text-gray-800 mb-4">{title}</div>

            <div className="mt-2">
                <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-[#4E15BF]">
                    <FaLinkedin size={24} />
                </a>
            </div>
        </div>
    );
};

export default ProfileCard;
