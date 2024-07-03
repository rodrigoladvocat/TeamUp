import defaultProfileImage from "../assets/default_profile_image.png";

interface Props {
  children?: React.ReactNode;
  profileUrl: string;
  name: string;
  role: string;
}


export default function UserDisplay({children, profileUrl, name, role}: Props) {

  return(
    <div className="h-[89px] min-w-fit flex flex-row justify-between px-8 items-center bg-black p-3 rounded-t-2xl">
      <div className="w-16 h-16 flex justify-center items-center overflow-hidden rounded-full bg-gray-200">
        <img className="w-full h-full object-cover object-top" 
          src={profileUrl} 
          alt="Profile picture"
          onError={(e) => { e.currentTarget.src = defaultProfileImage; }}
        />
      </div>

      <p className="font-bold text-nowrap text-[20px]">{name}</p>

      <p className="font-medium text-nowrap">{role}</p>

      {children}
    </div>
  );
}
