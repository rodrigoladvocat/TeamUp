import { useState } from 'react';
import GradePicker from './GradePicker';
import defaultProfileImage from "../assets/default_profile_image.png";


interface Props {
  profileUrl: string;
  name: string;
  role: string;
  onChange: (comment: string, grade: string) => void;
}

export default function GradeForm({profileUrl, name, role, onChange}: Props): JSX.Element {
  const [selectedGrade, setSelectedGrade] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [image, setImage] = useState<string>(profileUrl);

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
      <div className="h-[89px] min-w-fit flex flex-row justify-center items-center space-x-[4.625rem] bg-black p-3 rounded-t-2xl">
        <img className="max-w-16" 
          src={image} 
          alt="Profile picture"
          onError={() => {setImage(defaultProfileImage)}}
        />

        <p className="font-bold text-nowrap text-[20px]">{name}</p>

        <p className="font-medium text-nowrap">{role}</p>

        <GradePicker onChange={handleSelectGrade}></GradePicker>
      </div>
      
      <textarea rows={5}
        className="h-40 bg-white rounded-b-2xl text-wrap text-black p-3 font-normal"
        name={`Comment of ${name}`}
        placeholder="Escreva aqui um comentário sobre sua experiência de trabalho com este colaborador."
        onChange={(event) => {handleWriteOnTextArea(event.target.value)}}
      ></textarea>
    </div>
  );
}
