import defaultProfileImage from "../assets/default_profile_image.png";


interface Props {
    title: string;
    userName: string;
    profileImage: string;
}

export default function Header({title, userName, profileImage}: Props) {
  return (
    <header className="flex justify-between items-center mb-6">
      <h1 className="text-32 text-purple-text font-bold">
        {title}
      </h1>
      <div className="flex items-center">
        <img
          src={profileImage}
          alt={userName}
          className="w-10 h-10 rounded-full mr-2"
          onError={(e) => {e.currentTarget.src = defaultProfileImage}}
        />
        <span>{userName}</span>
      </div>
    </header>
  );
}
