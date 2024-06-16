import { Menu } from "../components/Menu";
import { useMenu } from "../context/MenuContext";

const About = () => {
    const { setMenu } = useMenu();
    setMenu(3);
  return (
    <div className="w-full">
      <Menu></Menu>
    </div>
  );
};

export default About;