import CircleCheckbox from "./CircleCheckbox";

interface Props {
  profileUrl: string;
  name: string;
  role: string;
  grade: number;
  text: string;
}
function verticalBar(key?: number) {
  return <div key={key} className="w-[1px] h-[100%] bg-[#3F3F3F]" />;
}

export default function GradeForm({
  profileUrl,
  name,
  role,
  grade,
  text,
}: Props): JSX.Element {
  const gradeOptions = [1, 2, 3, 4, 5];

  return (
    <div className="flex flex-col min-w-fit w-full pb-8 py-8">
      <div className="h-[89px] min-w-fit flex flex-row justify-between items-center space-x-[4.625rem] bg-black p-3 rounded-t-2xl">
        <img
          className="w-16 h-16 object-cover rounded-full"
          src={profileUrl}
          alt="Profile picture"
        />

        <p className="font-bold text-nowrap text-[20px]">{name}</p>

        <p className="font-medium text-nowrap">{role}</p>
        <div className="flex flex-row justify-between space-x-[0.90625rem] h-[65px] w-fit pr-5">
          {gradeOptions.map((gradeOption, i) => {
            return (
              <>
                <div key={i} className="flex flex-col space-y-2 ">
                  <p className="font-semibold">{gradeOption}</p>
                  <CircleCheckbox
                    value={i as Grade}
                    name={`feedback choice ${i}`}
                    checked={grade === gradeOption}
                    onChange={() => {}}
                  />
                </div>
                {i < gradeOptions.length - 1 &&
                  verticalBar(gradeOptions.length + i)}
              </>
            );
          })}
        </div>
      </div>

      <div className="h-[180px] w-full bg-white rounded-b-2xl text-wrap p-3 font-normal resize-none text-left text-black">
        {text}
      </div>
    </div>
  );
}
