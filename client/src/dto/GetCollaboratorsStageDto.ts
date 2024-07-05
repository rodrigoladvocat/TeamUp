

export interface GetCollaboratorsStageDto {
  id: number;
  name: string;
  email: string;
  role: string;
  imgUrl: string;
  stage: "Não iniciado" | "Em andamento" | "Concluída";
} 
