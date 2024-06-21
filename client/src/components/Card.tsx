import React from 'react';

interface CardProps {
  imageSrc: string;
  name: string;
  role: string;
  email: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, name, role, email }) => {
  return (
    <div className="font-poppins w-[203px] h-[213px] rounded-[16px] shadow-lg bg-green">
      <div className="h-[127px] w-[127px] mx-auto">
        <img src={imageSrc} alt={name} className="h-full object-cover rounded-full" />
      </div>
      <div className="text-center mt-2">
        <div className="flex-1 mb-2">
            <div className="text-16 max-w-md">{name}</div>
            <div className="text-purple-text text-14 text-base">{role}</div>
        </div>
        <p className="text-14">{email}</p>
      </div>
    </div>
  );
}

export default Card;
