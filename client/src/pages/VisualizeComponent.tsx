import { TooltipProvider, TooltipTrigger, TooltipContent, Tooltip } from "@radix-ui/react-tooltip";
import {InfoIcon} from 'lucide-react'; // buscar icones do lucide pode ser bem útil
import GradeManagerPage  from "./manager/GradesManagerPage/GradesManagerPage";

interface Props {}

function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {/* Estiliza e/ou adiciona HTML daqui dentro pra ficar de acordo com figma */}
            {/* <Button variant="outline" className="">Hover</Button> */}
            <InfoIcon className="stroke-primary"></InfoIcon>
        </TooltipTrigger>
        <TooltipContent>
          {/* Estiliza e/ou adiciona HTML daqui dentro pra ficar de acordo com figma */}
          <p className="bg-white text-primary rounded-sm px-2 py-1 mb-3">Biblioteca de UI adicionada</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default function VisualizeComponent({}: Props): JSX.Element {

  return (
    // <div className="snap-center self-center items-center origin-center place-self-center justify-self-center">
    //   {/* Coloque o componente aqui para visualizar */}
    // </div>
    <div></div>
  );
};
