import GradePicker from "@/components/GradePicker";
import { useState } from "react";

interface Props {
  index: number;
  title: string;
  subtitle: string;
  tip: string;
  gradeInitialOption: number;
  onGradeChange: (valueIndex: number) => void;
}

function EqualizationFormPart({
  index,
  title,
  gradeInitialOption,
  onGradeChange,
}: Props) {
  const gradeOptions = [1, 2, 3, 4, 5];
  const namedOptions = [
    "Precisa Melhorar",
    "Razoável",
    "Boa",
    "Muito Boa",
    "Excelente",
  ];

  return (
    <div className="flex flex-col px-[32px] pt-6 items-center">
      <div className=" bg-[#0f0f0f] w-full h-[89px] rounded-xl mb-6 p-3 overflow-x-auto overflow-y-hidden">
        <div className="flex flex-row items-center justify-between pr-6">
          <h1 className="font-bold text-[20px] leading-[30px] text-white ml-3">
            {index}. {title}
          </h1>
          <GradePicker
            type={"circles"}
            onChange={onGradeChange}
            gradeOptions={gradeOptions}
            namedOptions={namedOptions}
            initialValueIndex={gradeOptions.indexOf(gradeInitialOption)}
          />
        </div>
      </div>
    </div>
  );
}

const EqualizationTab = () => {
  function onGradeChange(index: number, value: number): void {
    const newGrades = [...behaviourGrades];
    newGrades[index] = value + 1;
    setBehaviourGrades(newGrades);
  }

  const [behaviourGrades, setBehaviourGrades] = useState<number[]>(
    Array(5).fill(-1)
  );

  const comportamentalFormInfo = {
    titles: [
      "Sentimento de dono",
      "Resiliência nas adversidades",
      "Organização no trabalho",
      "Capacidade de aprender",
      "Trabalho em equipe",
    ],
    tips: [
      "É um sentimento de pertencimento, responsabilidade e engajamento, no qual os colaboradores se sentem investidos nos objetivos e resultados da organização.",
      "Capacidade de se adaptar em meio as mudanças.",
      "Critério que diz respeito a sua habilidade de estar atento com as atividades do seu trabalho em relação a como está os seus andamentos, o que já foi feito e o que ainda é necessário ser feito.",
      "Critério que diz respeito a sua habilidade de absorção de novas informações e conhecimentos.",
      "Critério que diz respeito a sua habilidade de trabalhar com outras pessoas, lidando com diferentes pontos de vista e pensando no bem comum do grupo.",
    ],
  };

  const executionalFormInfo = {
    titles: [
      "Entregar com qualidade",
      "Atender aos prazos",
      "Fazer mais com menos",
      "Pensar fora da caixa",
    ],
    tips: [
      "Critério que diz respeito a sua habilidade de realizar entregas com qualidade, sendo essencial para um bom andamento de todo projeto para somar com a equipe.",
      "Critério que diz respeito a sua habilidade e atenção com as datas de entrega de suas atividades. Critério importante para um bom andamento de projetos.",
      "Critério que diz respeito a sua habilidade de com poucos recursos conseguir realizar grandes entregas. Este valor está muito relacionado também com a produtividade de seu trabalho.",
      "Critério que diz respeito a sua habilidade de buscar fazer atividades do dia a dia de maneira diferente do convencional trazendo uma nova forma de se fazer e assim quem sabe surpreender com melhores resultados.",
    ],
  };

  return (
    <>
      <div className="px-[32px] pb-7 text-left">
        Após realizar a análise da visão geral do desempenho dos colaboradores,
        insira uma nota e um comentário final para compor a avaliação dos
        mesmos.
      </div>
      <div className="text-primary font-bold text-[24px] text-left px-[32px]">
        Critérios comportamentais
      </div>
      {comportamentalFormInfo.titles.map((title, index) => (
        <EqualizationFormPart
          key={index}
          index={index + 1}
          title={title}
          subtitle={"Como você avaliaria sua performance nesse critério?"}
          tip={comportamentalFormInfo.tips[index]}
          gradeInitialOption={-1}
          onGradeChange={(value) => onGradeChange(index, value)}
        />
      ))}
      <div className="text-primary font-bold text-[24px] text-left px-[32px]">
        Critérios comportamentais
      </div>
      {executionalFormInfo.titles.map((title, index) => (
        <EqualizationFormPart
          key={index}
          index={index + 6}
          title={title}
          subtitle={"Como você avaliaria sua performance nesse critério?"}
          tip={comportamentalFormInfo.tips[index]}
          gradeInitialOption={behaviourGrades[index]}
          onGradeChange={(value) => onGradeChange(index, value)}
        />
      ))}
    </>
  );
};

export default EqualizationTab;
