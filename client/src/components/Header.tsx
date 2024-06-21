interface HeaderProps {
    title: string;
    userName: string;
    profileImage: string;
}

function Header(props: HeaderProps) {
  return (
    <header className="flex justify-between items-center mb-6">
            <h1 className="text-32 text-purple-text font-bold">
              {props.title}
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