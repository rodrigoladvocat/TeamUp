
function getStyleAndTextFromGrade(grade: number): [string, string] {

  if (grade <= 2.0) {
    return ["bg-red-700", "Precisa melhorar"];
  } else if (grade <= 3.0) {
    return ["bg-yellow-800", "Fez o básico"];
  } else if (grade <= 4.0) {
    return ["bg-blue-700", "Muito bom"];
  } else {
    return ["bg-green-700", "Excepcional"];
  }

}

interface Props {
  grade: number;
}

export default function TagGrade({grade}: Props): JSX.Element {

  const [style, text] = getStyleAndTextFromGrade(grade);

  return (
    <div className={`${style} p-[12px] text-[14px] font-normal leading-[18px] rounded-md max-w-fit`}>
      {text}
    </div>
  );
};
