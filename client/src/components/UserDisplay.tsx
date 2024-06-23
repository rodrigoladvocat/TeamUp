import defaultProfileImage from "../assets/default_profile_image.png";
import { useState } from "react";

interface Props {
  children?: React.ReactNode;
  profileUrl: string;
  name: string;
  role: string;
}


export default function UserDisplay({children, profileUrl, name, role}:Props) {
  const [image, setImage] = useState<string>(profileUrl);

  return(
    <div className="h-[89px] min-w-fit flex flex-row justify-center items-center space-x-[4.625rem] bg-black p-3 rounded-t-2xl">
      <img className="max-w-16" 
        src={image} 
        alt="Profile picture"
        onError={() => {setImage(defaultProfileImage)}}
      />

      <p className="font-bold text-nowrap text-[20px]">{name}</p>

      <p className="font-medium text-nowrap">{role}</p>

      {children}
    </div>
  );
}
