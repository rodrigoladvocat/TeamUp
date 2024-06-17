import { Menu } from "../components/Menu";
import { useMenu } from "../context/MenuContext";

const Home = () => {
  const { setMenu } = useMenu();
  setMenu(0);

  return (
    <div className="w-full">
      <Menu></Menu>
    </div>
  );
};

export default Home;