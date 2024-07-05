import React from "react";
import defaultProfileImage from "../assets/default_profile_image.png";

interface CardProps {
  imageSrc: string;
  name: string;
  role: string;
  email: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, name, role, email }) => {
  return (
    <div className="flex flex-col w-full p-5 mt-2">
      <div className="flex h-[7.9rem] w-[7.9rem] mx-auto">
        <img src={imageSrc} 
          alt={name} 
          className='object-cover rounded-full'
          onError={(e) => {
            e.currentTarget.src = defaultProfileImage;
          }}
        />
      </div>
      <div className="font-poppins flex-1 text-center mt-8">
        <p className="text-20 max-w-md font-bold text-white text-nowrap overflow-x-scroll no-scrollbar">{name}</p>
        <p className="text-purple-text text-16 font-medium text-base my-2">
          {role}
        </p>
        <p className="text-16 font-medium text-white">{email}</p>
      </div>
    </div>
  );
};

export default Card;
