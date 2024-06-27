interface HeaderProps {
    title: string;
    subtitle?: string;
    userName: string;
    profileImage: string;
}

function Header(props: HeaderProps) {
  return (
    <header className="flex justify-between items-center mb-3">
            <h1 className="text-32 text-left text-purple-text font-bold">
              <div className="flex-1">{props.title}</div>
              <div className="flex-1 text-14 mt-1 text-white text-20 font-poppins font-normal">{props.subtitle}</div>
            </h1>
            <div className="flex items-center">
              <img
                src={props.profileImage}
                alt={props.userName}
                className="w-10 h-10 rounded-full mr-2"
              />
              <span>{props.userName}</span>
            </div>
          </header>
  );
}

export default Header;