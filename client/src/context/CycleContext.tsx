import { createContext, useCallback, useEffect, useState } from "react";
import { AxiosError, AxiosResponse } from "axios";
import { ErrorResponseDto } from "../dto/ErrorResponseDto";
import { api } from "../services/apiService";
import { GetLatestCycleResponseDto } from "@/dto/GetLatestCycleResponseDto";
import { GetOthersEvalByUserCycleIdsDto } from "@/dto/GetOthersEvalByUserCycleIdsDto";
import { GetSelffEvalByUserCycleIdsDto } from "@/dto/GetSelfEvalByUserCycleIdsDto";
import { stage } from "@/utils/stageType";

////////////////////////////////////////////////////////////////////////////////

function parseDate(dateString: string, fromFormat: string, toFormat: string): string {
  const dateObj = new Date(dateString);
  if (isNaN(dateObj.getTime())) {
    console.error('Invalid date string:', dateString);
    return '';
  }
  const formatter = new Intl.DateTimeFormat(undefined, { year: 'numeric', month: '2-digit', day: '2-digit' });
  return formatter.format(dateObj);
}

function parseTime(dateString: string): string {
  const dateObj = new Date(dateString);
  if (isNaN(dateObj.getTime())) {
    console.error('Invalid date string:', dateString);
    return '';
  }
  const hours = dateObj.getHours().toString().padStart(2, '0');
  const minutes = dateObj.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

////////////////////////////////////////////////////////////////////////////////

interface ParsedCycleInfo {
  startDate: string; // Format: DD/MM/YYYY
  endDate: string; // Format: DD/MM/YYYY
  endTime: string; // Format: HH:mm
}
interface SelfEvalInfo extends GetSelffEvalByUserCycleIdsDto {
  selfEvalStage: stage;
  selfLastUpdated: string; // Format: DD/MM/YYYY
}
interface OthersEvalInfo {
  evaluatedUserId: number[];
  othersEvalStage: stage[];
  othersLastUpdated: string[]; // Format: DD/MM/YYYY
  grade: number[];
  comment: string[];
}
interface CycleContextModel extends ParsedCycleInfo {
  _cycle: GetLatestCycleResponseDto | null;
  selfEvalInfo: SelfEvalInfo,
  othersEvalInfo: OthersEvalInfo,
  updateLatestCycle: (forceUpdate?: boolean) => Promise<void>;
  updateSelfEvalInfo: (userId: number, forceUpdate?: boolean) => Promise<void>;
  updateOthersEvalInfo: (userId: number, forceUpdate?: boolean) => Promise<void>;
  callAllUpdates: (userId: number, forceUpdate?: boolean) => Promise<void>;
}

export const CycleContext = createContext({} as CycleContextModel);

interface Props {
  children: React.ReactNode;
}

const defaultParsedCycleInfo: ParsedCycleInfo = {startDate: "", endDate: "", endTime: ""};
const defaultAutoEvalInfo: SelfEvalInfo = {
  selfEvalStage: "Carregando", 
  selfLastUpdated: "",
  id: -1,
  userId: -1,
  cycleId: -1,
  ownershipMentalityGrade: -1,
  ownershipMentalityComment: "",
  learningAgilityGrade: -1,
  learningAgilityComment: "",
  resilienceAdversityGrade: -1,
  resilienceAdversityComment: "",
  teamworkGrade: -1,
  teamworkComment: "",
  outOfTheBoxThinkingBehavioralGrade: -1,
  outOfTheBoxThinkingBehavioralComment: "",
  deliveringQualityGrade: -1,
  deliveringQualityComment: "",
  meetingDeadlinesGrade: -1,
  meetingDeadlinesComment: "",
  doingMoreWithLessGrade: -1,
  doingMoreWithLessComment: "",
  outOfTheBoxThinkingExecutionGrade: -1,
  outOfTheBoxThinkingExecutionComment: "",
  lastUpdated: "",
  isFinalized: false,
  // user: undefined,
  // cycle: undefined
};
const defaultOthersEvalInfo: OthersEvalInfo = {
  evaluatedUserId: [], 
  othersEvalStage: [], 
  othersLastUpdated: [],
  comment: [],
  grade: [],
};

////////////////////////////////////////////////////////////////////////////////

export const CycleProvider: React.FC<Props> = ({ children }) => {
  const [ _cycle, setCycle ] = useState<GetLatestCycleResponseDto | null>(null);
  const [ parsedCycleInfo, setParsedCycleInfo ] = useState<ParsedCycleInfo>(defaultParsedCycleInfo);
  const [ selfEvalInfo, setAutoEvalInfo ] = useState<SelfEvalInfo>(defaultAutoEvalInfo);
  const [ othersEvalInfo, setOthersEvalInfo ] = useState<OthersEvalInfo>(defaultOthersEvalInfo);

  useEffect(() => {

    const cycleData: GetLatestCycleResponseDto = JSON.parse(localStorage.getItem('@Cycle.Data') || "{}");
    if (cycleData.id) {
      const parsedData: ParsedCycleInfo = {
        startDate: parseDate(cycleData.initialDate, 'YYYY-MM-DD', 'DD/MM/YYYY'),
        endDate: parseDate(cycleData.finalDate, 'YYYY-MM-DD', 'DD/MM/YYYY'),
        endTime: parseTime(cycleData.finalDate),
      };
      
      setCycle(cycleData);
      setParsedCycleInfo(parsedData);
    }
    
    const autoEvalData: SelfEvalInfo = JSON.parse(localStorage.getItem('@AutoEval.Data') || "{}");
    if (autoEvalData.selfEvalStage) {
      setAutoEvalInfo(autoEvalData);
    }

    const othersEvalData: OthersEvalInfo = JSON.parse(localStorage.getItem('@OthersEval.Data') || "{}");
    if (othersEvalData.othersEvalStage) {
      setOthersEvalInfo(othersEvalData);
    }

  }, []);

  const UpdateLatestCycle = useCallback(async (forceUpdate = false) => {

    // If cycle is already defined, then do not update
    if (_cycle && !forceUpdate) {
      return;
    }
    
    await api.get(
      "/cycle/latest"
    ).then((res: AxiosResponse<GetLatestCycleResponseDto>) => {
      const parsedData: ParsedCycleInfo = {
        startDate: parseDate(res.data.initialDate, 'YYYY-MM-DD', 'DD/MM/YYYY'),
        endDate: parseDate(res.data.finalDate, 'YYYY-MM-DD', 'DD/MM/YYYY'),
        endTime: parseTime(res.data.finalDate),
      };

      localStorage.setItem('@Cycle.Data', JSON.stringify(res.data));

      setCycle(res.data);
      setParsedCycleInfo(parsedData);
    }).catch((e: AxiosError<ErrorResponseDto>) => {
      console.log(e);
      throw e;
    });
  }, []);
  
  
  const UpdateSelfEvalInfo = useCallback(async (userId: number, forceUpdate = false) => {

    // If autoEvalInfo.selfLastUpdated is already defined, then do not update
    if (selfEvalInfo.selfLastUpdated !== "" && !forceUpdate) {
      return;
    }
    
    await api.get(
      "/self-evaluation/latest-cycle/" + userId
    ).then((res: AxiosResponse<GetSelffEvalByUserCycleIdsDto>) => {
      
      const parsedData: SelfEvalInfo = {
        selfEvalStage: "Não iniciado",
        selfLastUpdated: "",
        ...res.data,
      }

      if (res.data) {
        parsedData.selfEvalStage = res.data.isFinalized ? "Entregue" : "Em andamento";
        parsedData.selfLastUpdated = parseDate(res.data.lastUpdated, 'YYYY-MM-DD', 'DD/MM/YYYY');
      }

      localStorage.setItem('@AutoEval.Data', JSON.stringify(parsedData));

      setAutoEvalInfo(parsedData);
    }).catch((e: AxiosError<ErrorResponseDto>) => {
      console.log(e);
      throw e;
    });
  }, []);


  const UpdateOthersEvalInfo = useCallback(async (userId: number, forceUpdate = false) => {

    // If othersEvalInfo.othersLastUpdated is already defined, then do not update
    if (othersEvalInfo.othersLastUpdated.length > 0 && !forceUpdate) {
      return;
    }
    
    await api.get(
      "/others-evaluation/latest-cycle/" + userId
    ).then((res: AxiosResponse<GetOthersEvalByUserCycleIdsDto[]>) => {

      const parsedData: OthersEvalInfo = {
        evaluatedUserId: [],
        othersEvalStage: [],
        othersLastUpdated: [],
        comment: [],
        grade: [],
      };

      if (res.data.length > 0) {
        parsedData.evaluatedUserId = res.data.map((row) => row.evaluatedUserId);
        parsedData.othersEvalStage = res.data.map((row) => row.isFinalized ? "Entregue" : "Em andamento");
        parsedData.othersLastUpdated = res.data.map((row) => row.lastUpdated);
        parsedData.comment = res.data.map((row) => row.comment);
        parsedData.grade = res.data.map((row) => row.grade);
      }

      localStorage.setItem('@OthersEval.Data', JSON.stringify(res.data));

      setOthersEvalInfo(parsedData);
    }).catch((e: AxiosError<ErrorResponseDto>) => {
      console.log(e);
      throw e;
    });
  }, []);


  const CallAllUpdates = async (userId: number, forceUpdate = false) => {
    await UpdateLatestCycle();
    await UpdateSelfEvalInfo(userId, forceUpdate);
    await UpdateOthersEvalInfo(userId, forceUpdate);
  }


  return (
    <CycleContext.Provider value={{
      _cycle: _cycle,
      ...parsedCycleInfo,
      selfEvalInfo,
      othersEvalInfo,
      updateLatestCycle: UpdateLatestCycle,
      updateSelfEvalInfo: UpdateSelfEvalInfo,
      updateOthersEvalInfo: UpdateOthersEvalInfo,
      callAllUpdates: CallAllUpdates
    }}>
      {children}
    </CycleContext.Provider>
  );
}
