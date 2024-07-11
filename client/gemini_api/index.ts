import { GoogleGenerativeAI } from "@google/generative-ai";
import { getPrompt } from "./getPrompt";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY as string; // .env file has to be in the client folder

if (!apiKey) {
  console.error("API key is required");
}

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default async function run(prompt: number[] | null, userRole: string): Promise<string | null> {

  if (apiKey && prompt !== null) {
    const base_prompt = getPrompt(prompt, userRole);

    const result = await model.generateContent(base_prompt);
    const response = result.response;
    const text = response.text();

    console.log(text);

    return text;
  }

  return null;
}

/*
  sentimento de dono: É um sentimento de pertencimento, responsabilidade e engajamento, no qual os colaboradores se sentem investidos nos objetivos e resultados da organização.
  capacidade de aprender: Critério que diz respeito a sua habilidade de absorção de novas informações e conhecimentos
  resiliencia nas adversidades: Capacidade de se adaptar em meio às mudanças. 
  capacidade de trabalhar em grupo: Critério que diz respeito a sua habilidade de trabalhar com outras pessoas, lidando com diferentes pontos de vista e pensando no bem comum do grupo.
  organizaçao de trabalho: Critério que diz respeito a sua habilidade de estar atento com as atividades do seu trabalho em relação a como está os seus andamentos, o que já foi feito e o que ainda é necessário ser feito.
  qualidade de entregas: Critério que diz respeito a sua habilidade de realizar entregas com qualidade, sendo essencial para um bom andamento de todo projeto para somar com a equipe.
  cumprir prazos: Critério que diz respeito a sua habilidade e atenção com as datas de entrega de suas atividades. Critério importante para um bom andamento de projetos.
  fazer mais com menos: Critério que diz respeito a sua habilidade de com poucos recursos conseguir realizar grandes entregas.Este valor está muito relacionado também com a produtividade de seu trabalho.
  pensamento fora da caixa: Critério que diz respeito a sua habilidade de buscar fazer atividades do dia a dia de maneira diferente do convencional trazendo uma nova forma de se fazer e assim quem sabe surpreender com melhores resultados.
*/
