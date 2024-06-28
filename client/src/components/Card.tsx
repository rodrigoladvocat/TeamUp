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
    <div className="font-poppins w-[256px] h-[310px] rounded-[16px] shadow-xl bg-gray overflow-hidden">
      <div className="flex flex-col w-full p-5 mt-2">
        <div className="flex-1 h-[127px] w-[127px] mx-auto">
          <img
            src={imageSrc}
            alt={name}
            className="h-full object-cover rounded-full"
            onError={(e) => {
              e.currentTarget.src = defaultProfileImage;
            }}
          />
        </div>
        <div className="flex-1 text-center mt-8">
          <div className="text-20 max-w-md font-bold text-white">{name}</div>
          <div className="text-purple-text text-16 font-medium text-base my-2">
            {role}
          </div>
          <div className="text-16 font-medium text-white">{email}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
