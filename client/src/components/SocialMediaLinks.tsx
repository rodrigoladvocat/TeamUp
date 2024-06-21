import socialMediaIcons from "../assets/social_media_icons";

interface Props {
  beLink?: string;
  facebookLink?: string;
  instagramLink?: string;
  tiktokLink?: string;
  linkedinLink?: string;
}

export default function SocialMediaLinks({ 
    beLink, 
    facebookLink,
    instagramLink,
    tiktokLink,
    linkedinLink,
  }: Props): JSX.Element {

  const links = new Map<string, string | undefined>();
  links.set("be", beLink);
  links.set("facebook", facebookLink);
  links.set("instagram", instagramLink);
  links.set("tiktok", tiktokLink);
  links.set("linkedin", linkedinLink);

  return(
    <div className="flex flex-row space-x-[5px]">
      {Object.entries(socialMediaIcons).map(([socialMediaName, icon], index) => {
        const link = links.get(socialMediaName);
        const cursor = link ? "cursor-pointer" : "cursor-not-allowed";
        const bgColor = link ? "bg-primary" : "bg-dark-zebra";
        return(
          <a key={index} 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`${cursor} size-6 rounded-full ${bgColor} flex items-center justify-center`}
          >
            {icon}
          </a>
        );
      })}
    </div>
  );
}
