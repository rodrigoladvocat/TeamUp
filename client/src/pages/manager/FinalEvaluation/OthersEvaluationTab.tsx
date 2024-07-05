import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCurrentCycle } from "@/utils/getCurrentCycle";

import RoundEvaluationForm from "@/components/RoundEvaluationForm";
import { getUserOtherAvals } from "@/utils/getUserOtherAvals";
import { UserDto } from "@/dto/UserDto";
import { getCollaboratorsById } from "@/utils/getCollaboratorsById";

interface Props {
  grade: number;
  profileUrl: string;
  name: string;
  role: string;
  text: string;
}

function RoundEvalFormPart({ grade, profileUrl, name, role, text }: Props) {
  return (
    <RoundEvaluationForm
      profileUrl={profileUrl}
      name={name}
      role={role}
      grade={grade}
      text={text}
    ></RoundEvaluationForm>
  );
}

const OtherEvaluationTab = () => {
  const { id } = useParams(); // Extract the id parameter from the URL
  const collabId = Number(id);
  const [autoEval, setAutoEval] = useState<Array<any> | null>(null);
  const [additionalData, setAdditionalData] = useState<Array<any> | null>(null);

  useEffect(() => {
    const fetchAdditionalData = async (evaluatorUserId: string) => {
      const data = await getCollaboratorsById(evaluatorUserId);
      return data;
    };

    const fetchData = async () => {
      try {
        const currCycle = await getCurrentCycle();
        const autoEval = await getUserOtherAvals(collabId, currCycle.id);
        setAutoEval(autoEval);

        const additionalDataPromises = autoEval.map((item: any) =>
          fetchAdditionalData(item.evaluatorUserId)
        );

        const additionalDataArray = await Promise.all(additionalDataPromises);
        setAdditionalData(additionalDataArray);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!additionalData) {
    return null; // or some loading indicator
  }
  console.log(additionalData);
  return (
    <>
      <p className="text-left pb-8 text-16">
        Acompanhe as avaliações 360º recebidas pelo colaborador neste ciclo
        avaliativo.
      </p>
      {additionalData.map((item: UserDto, index: number) => (
        <RoundEvalFormPart
          key={item.id}
          profileUrl={item.imgUrl}
          name={item.name}
          role={item.role}
          grade={autoEval[index].grade}
          text={autoEval[index].comment}
        />
      ))}
    </>
  );
};

export default OtherEvaluationTab;
