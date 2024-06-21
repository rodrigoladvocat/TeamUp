import { useState } from 'react';
import CircleCheckbox from "../components/CircleCheckbox";

function verticalBar(key?: number) {
  return <div key={key} className="w-[1px] h-[100%] bg-[#3F3F3F]"/>
}

const gradeOptions = ["1", "2", "3", "4", "5"];

interface Props {
  onChange: (value: string) => void;
}

export default function GradePicker({onChange}: Props): JSX.Element {
  const [selectedGrade, setSelectedGrade] = useState<string>("");
  
  function handleSelectGrade(chosenOption: string) {
    const nextGrade = chosenOption == selectedGrade ? "" : chosenOption;
    setSelectedGrade(nextGrade);
    onChange(nextGrade);
  }

  return (
    <div className="flex flex-row justify-between space-x-[0.90625rem] h-[65px] w-fit">
      {gradeOptions.map((gradeOption, i) => {
        return (
          <>
            <div key={i} className="flex flex-col space-y-2">
              <p className="font-semibold">{gradeOption}</p>
              <CircleCheckbox 
                value={gradeOption}
                name={`feedback choice ${i}`}
                checked={selectedGrade === gradeOption} 
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
