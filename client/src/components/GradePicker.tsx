import { useEffect, useState } from 'react';
import CircleCheckbox from "../components/CircleCheckbox";

function verticalBar(key?: number) {
  return <div key={key} className="w-[1px] h-[100%] bg-[#3F3F3F]"/>
}

interface Props {
  _key?: number;
  gradeOptions?: number[];
  namedOptions?: string[];
  type: "circles" | "cards";
  initialValueIndex: number;
  onChange: (valueIndex: number) => void;
}

export default function GradePicker({
    _key,
    gradeOptions = [1, 2, 3, 4, 5], 
    namedOptions = ["", "", "", "", ""],
    type = "circles", 
    initialValueIndex = -1,
    onChange,
  }: Props): JSX.Element {
  const [selectedGradeIndex, setSelectedGradeIndex] = useState<number>(initialValueIndex);

  useEffect(() => {
    setSelectedGradeIndex(initialValueIndex)
  }, [initialValueIndex]);
  
  function handleSelectGrade(chosenOptionIndex: number) {
    const nextGradeIndex = chosenOptionIndex == selectedGradeIndex ? -1 : chosenOptionIndex;
    setSelectedGradeIndex(nextGradeIndex);
    onChange(nextGradeIndex);
  }

  switch(type) {
    case "cards":
      return (
        <div key={_key} className="flex flex-row justify-between space-x-[0.90625rem] h-[114px] w-fit">
          {gradeOptions.map((gradeOption, i) => {
            return (
              <div key={_key ? _key+i : i} 
                onClick={() => {handleSelectGrade(i)}}
                style={{boxShadow: "3px 4px 4px 0px #170E0E"}}
                className={`
                  flex flex-col justify-center items-center
                  border-[1px] border-solid 
                  p-[20px]
                  rounded-xl
                  w-[185px] h-[114px]
                  hover:bg-[#9D85FF66] hover:border-[#A28BFE] hover:text-hover-text
                  group
                  ${selectedGradeIndex !== -1 && gradeOptions[selectedGradeIndex] === gradeOption
                      ? 'bg-primary border-[#8A0BFF] hover:bg-primary hover:border-[#8A0BFF] hover:text-white' 
                      : 'bg-[#323131] border-[#555555]'
                  }
                `}
              >
                <p className={`font-bold text-[24px] leading-9 ${gradeOptions[selectedGradeIndex] === gradeOption ? 'text-white' : 'text-[#ACACAC]'} group-hover:text-hover-text`}>{i+1}</p>
                <p className={`font-normal text-[16px] leading-6 ${gradeOptions[selectedGradeIndex] === gradeOption ? 'text-white' : 'text-[#ACACAC]'} group-hover:text-hover-text`}>{namedOptions[i]}</p>
              </div>
            );
          })}
        </div>
      );
    case "circles":
    default:
      return (
        <div key={_key} className="flex flex-row justify-between space-x-[0.90625rem] h-[65px] w-fit">
          {gradeOptions.map((gradeOption, i) => {
            return (
              <>
                <div key={_key ? _key+i : i} className="flex flex-col space-y-2">
                  <p className="font-semibold">{gradeOption}</p>
                  <CircleCheckbox 
                    value={i}
                    name={`feedback choice ${i}`}
                    checked={gradeOptions[selectedGradeIndex] === gradeOption} 
                    onChange={handleSelectGrade} 
                    />
                </div>
                {i < gradeOptions.length -1 && verticalBar(gradeOptions.length + i)}
              </>
            );
          })}
        </div>
      );
  }
}
