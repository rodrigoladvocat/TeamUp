import defaultProfileImage from "../assets/default_profile_image.png";

export function circleIcon (imgUrl: string) {

  return (
    <img src={imgUrl}
      alt="src"
      onError={(e) => { e.currentTarget.src = defaultProfileImage; }}
      className="w-10 h-10 rounded-full"
    />
  );
}

interface Props {
  pictures: string[];
}

export default function ProfilePictureSequence({pictures}: Props) {

  return (
    <div className="flex-1 flex flex-row justify-center">
      {pictures.map((picture, index) => {
        return (
          <div key={index} style={{ marginLeft: index !== 0 ? '-8px' : '0' }}>
            {circleIcon(picture)}
          </div>
        )
      })}
    </div>
  )
}
