import defaultProfileImage from "../assets/default_profile_image.png";
import { useState } from "react";

interface Props {
  children?: React.ReactNode;
  profileUrl: string;
  name: string;
  role: string;
  comment: string;
}


export default function UserDisplay({children, profileUrl, name, role, comment}:Props) {
  const [image, setImage] = useState<string>(profileUrl);

  return(
    <div>
        <div className="h-[89px] w-[60.313rem] flex flex-row items-center justify-between bg-[#0F0F0F] p-3 rounded-t-2xl">
          <div className="flex flex-row items-center space-x-4">
            <div className="pl-3">
              <img className="h-16 w-16 object-cover" 
                src={image} 
                alt="Profile picture"
                onError={() => {setImage(defaultProfileImage)}}
              />
            </div>
            
            <p className="text-ellipsis overflow-hidden whitespace-nowrap font-bold text-[20px] pl-20">{name}</p>
            
            <p className="text-ellipsis overflow-hidden whitespace-nowrap font-medium max-w-[336px] text-16 pl-10">{role}</p>
          </div>
        
          {children}
        </div>
        <textarea
            id="disabledTextarea"
            className="mt-0 block w-[60.313rem] h-[11.25rem] px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-[#FFFFFF] cursor-not-allowed"
            placeholder={comment}
            disabled
            style={{ borderRadius: '0 0 0.5rem 0.5rem' }}
        ></textarea>
    </div>
    
  );
}
