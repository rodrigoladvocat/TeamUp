import Card from "../components/Card";
import img1 from "../assets/img1.svg";

interface Props {}

export default function VisualizeComponent({}: Props): JSX.Element {

  return (
    <div className="snap-center self-center items-center origin-center place-self-center justify-self-center">
      <Card imageSrc={img1} email="alguem@gmail.com" name="Alguém da Silva" role="Software Developer"></Card>

    </div>
  );
};
