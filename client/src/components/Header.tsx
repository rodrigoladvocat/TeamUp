import { Link } from "react-router-dom";
import defaultProfileImage from "../assets/default_profile_image.png";

interface Props {
  title: string;
  subtitle?: string;
  userName: string;
  profileImage: string;
  backLink?: string;
  coloredSubtitle?: boolean;
}

export default function Header({
  title,
  userName,
  profileImage,
  subtitle,
  backLink,
  coloredSubtitle,
}: Props) {

  return (
    <header className="flex justify-between items-start mb-3 max-w-[64.25rem]"> {/*setting a max width*/}
      {backLink && 
      <>
      {/* TODO: seta para voltar */}
      </>
      }
      <h1 className="text-32 text-left text-purple-text font-bold">
        <div className="flex-1">{title}</div>
        {coloredSubtitle 
        ? 
        <div className="flex flex-row mt-1 text-white text-20 font-poppins font-normal">
          {subtitle?.split("|").map((s, i)=> {
            return(
              <p className={`${i % 2 == 1 ? 'text-primary' : ''}`}>{s}&nbsp;</p>
            );
          })}
        </div>
        :
        <div className="flex-1 mt-1 text-white text-20 font-poppins font-normal">
          {subtitle}
        </div>
        }
      </h1>
      <Link to={"/profile"}>
        <div className="flex items-center">
          <img
            src={profileImage}
            alt={userName}
            className="size-[52px] rounded-full mr-2"
            onError={(e) => {e.currentTarget.src = defaultProfileImage;}}
          />
          <p className="font-normal text-20 leading-[30px] text-white hover:text-primary">{userName}</p>
        </div>
      </Link>
    </header>
  );
}
