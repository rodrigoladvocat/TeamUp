import { useState } from 'react';
import GradePicker from './GradePicker';
import UserDisplay from './UserDisplay';


interface Props {
  _key?: number;
  userDisplayKey?: number;
  gradePickerKey?: number;
  textAreaKey?: number;
  profileUrl: string;
  name: string;
  role: string;
  onChange: (comment: string, grade: number) => void;
}

export default function GradeForm({_key, userDisplayKey, gradePickerKey, textAreaKey, profileUrl, name, role, onChange}: Props): JSX.Element {
  const [selectedGradeIndex, setSelectedGrade] = useState<number>(-1);
  const [comment, setComment] = useState<string>("");

  const options = [1, 2, 3, 4, 5];

  function handleSelectGrade(gradeIndex: number) {
    setSelectedGrade(options[gradeIndex]);
    onChange(comment, options[gradeIndex]);
  }
  
  function handleWriteOnTextArea(newText: string) {
    setComment(newText);
    onChange(newText, selectedGradeIndex);
  }

  
  return (
    <div key={_key} className="flex flex-col min-w-fit">
      <UserDisplay key={userDisplayKey} profileUrl={profileUrl} name={name} role={role}>
        <GradePicker key={gradePickerKey} onChange={handleSelectGrade} type={'circles'} initialValueIndex={-1}></GradePicker>
      </UserDisplay>
      
      <textarea rows={5} key={textAreaKey}
        className="h-40 bg-white rounded-b-2xl text-wrap text-black p-3 font-normal resize-none"
        name={`Comment of ${name}`}
        placeholder="Escreva aqui um comentário sobre sua experiência de trabalho com este colaborador."
        onChange={(event) => {handleWriteOnTextArea(event.target.value)}}
      ></textarea>
    </div>
  );
}
