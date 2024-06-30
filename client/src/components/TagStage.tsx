
const stageToColorMap: { [stage: string]: string } = {
  "Carregando" : "bg-gray-600",
  "Não iniciado": "bg-gray-600",
  "Em andamento": "bg-yellow-800",
  "Em revisão": "bg-turquoise-blue-700",
  "Concluída": "bg-green-700",
  "Entregue": "bg-blue-700",
};

interface Props {
  stage: "Carregando" | "Não iniciado" | "Em andamento" | "Em revisão" | "Concluída" | "Entregue";
}

export default function TagStage({stage}: Props): JSX.Element {

  const color = stageToColorMap[stage];

  return (
    <div className={`${color} p-[12px] text-[14px] font-normal leading-[18px] rounded-md max-w-fit`}>
      {stage}
    </div>
  );
};
