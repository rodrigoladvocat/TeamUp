import { Link } from "react-router-dom";
import defaultProfileImage from "../assets/default_profile_image.png";

interface Props {
  title: string;
  subtitle?: string;
  userName: string;
  profileImage: string;
  backLink?: string;
}

export default function Header({
  title,
  userName,
  profileImage,
  subtitle,
  backLink,
}: Props) {
  // TODO: Fazer o sininho funcionando
  // TODO: Melhorar o css para ficar IGUAL o figma em todas as telas que usam o Header.
  return (
    <header className="flex justify-between items-start mb-3 max-w-[64.25rem]"> {/*setting a max width*/}
      {backLink && 
      <>
      {/* TODO: seta para voltar */}
      </>
      }
      <h1 className="text-32 text-left text-purple-text font-bold">
        <div className="flex-1">{title}</div>
        <div className="flex-1 mt-1 text-white text-20 font-poppins font-normal">
          {subtitle}
        </div>
      </h1>
      <Link to={"/profile"}>
        <div className="flex items-center">
          <img
            src={profileImage}
            alt={userName}
            className="size-10 rounded-full mr-2"
            onError={(e) => {e.currentTarget.src = defaultProfileImage;}}
          />
          <span className="text-white hover:text-primary">{userName}</span>
        </div>
      </Link>
    </header>
  );
}
