import { useState } from "react";

interface CardeDeNotaProps {
  isManager: boolean;
  grade: number;
}

//isManager true para modo de gestor (nao pode mudar nota), false para renderizar na avaliacao
//grade: -1 para quando nao for sócio para começar sem valor, caso seja sócio manda a nota que vai ter no db

export default function CardeDeNota({
  isManager,
  grade,
}: CardeDeNotaProps): JSX.Element {
  const [selected, setSelected] = useState(grade);

  const notas = [
    { nota: "1", label: "Preciso melhorar" },
    { nota: "2", label: "Razoável" },
    { nota: "3", label: "Boa" },
    { nota: "4", label: "Muito boa" },
    { nota: "5", label: "Excelente" },
  ];

  if (isManager) {
    return (
      <div className="snap-center self-center items-center origin-center place-self-center justify-self-center w-full">
        <div className="flex w-full flex-row justify-center ">
          {notas.map((item, index) => (
            <div
              className={`rounded-[12px] mr-5 basis-48 flex-row ${
                selected === index
                  ? "text-white bg-[#A28BFE] "
                  : "border-[#555] border-[1px] text-[#acacac] "
              }`}
            >
              <div className="p-5">
                <div className="text-[24px] font-bold">{item.nota}</div>
                <div className="text-[16px] text-center ">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="snap-center self-center items-center origin-center place-self-center justify-self-center w-full">
      <div className="flex w-full flex-row justify-center ">
        {notas.map((item, index) => (
          <div
            className={`rounded-[12px] cursor-pointer mr-5 basis-48 flex-row ${
              selected === index
                ? "text-white bg-[#A28BFE] "
                : "border-[#555] border-[1px] hover:border-primary text-[#acacac] hover:text-[#D5A7FF]"
            }`}
            onClick={() => setSelected(index)}
          >
            <div className="p-5">
              <div className="text-[24px] font-bold">{item.nota}</div>
              <div className="text-[16px] text-center ">{item.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
