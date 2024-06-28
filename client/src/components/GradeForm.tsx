import { useState } from 'react';
import GradePicker from './GradePicker';
import UserDisplay from './UserDisplay';


interface Props {
  profileUrl: string;
  name: string;
  role: string;
  onChange: (comment: string, grade: string) => void;
}

export default function GradeForm({profileUrl, name, role, onChange}: Props): JSX.Element {
  const [selectedGrade, setSelectedGrade] = useState<string>("");
  const [comment, setComment] = useState<string>("");

  function handleSelectGrade(grade: string) {
    setSelectedGrade(grade);
    onChange(comment, grade);
  }
  
  function handleWriteOnTextArea(newText: string) {
    setComment(newText);
    onChange(newText, selectedGrade);
  }

  
  return (
    <div className="flex flex-col min-w-fit">
      <UserDisplay profileUrl={profileUrl} name={name} role={role}>
        <GradePicker onChange={handleSelectGrade} type={'circles'}></GradePicker>
      </UserDisplay>
      
      <textarea rows={5}
        className="h-40 bg-white rounded-b-2xl text-wrap text-black p-3 font-normal"
        name={`Comment of ${name}`}
        placeholder="Escreva aqui um comentário sobre sua experiência de trabalho com este colaborador."
        onChange={(event) => {handleWriteOnTextArea(event.target.value)}}
      ></textarea>
    </div>
  );
}
