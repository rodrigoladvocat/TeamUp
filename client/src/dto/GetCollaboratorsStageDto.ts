

export interface GetCollaboratorsStageDto {
  userId: number;
  name: string;
  email: string;
  role: string;
  imgUrl: string;
  stage: "Não iniciado" | "Em andamento" | "Concluída";
} 
