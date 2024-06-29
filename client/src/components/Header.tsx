import defaultProfileImage from "../assets/default_profile_image.png";


interface Props {
    title: string;
    subtitle?: string;
    userName: string;
    profileImage: string;
}

export default function Header({title, userName, profileImage, subtitle}: Props) {
  return (
    <header className="flex justify-between items-center mb-3">
      <h1 className="text-32 text-left text-purple-text font-bold">
        <div className="flex-1">{title}</div>
        <div className="flex-1 text-14 mt-1 text-white text-20 font-poppins font-normal">{subtitle}</div>
      </h1>
      <div className="flex items-center">
        <img
          src={profileImage}
          alt={userName}
          className="size-10 rounded-full mr-2"
          onError={(e) => {e.currentTarget.src = defaultProfileImage}}
        />
        <span>{userName}</span>
      </div>
    </header>
  );
}
