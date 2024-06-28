import Card from "@/components/Card";
import GradePicker from "@/components/GradePicker";
import Header from "@/components/Header";
import ProfilePictureSequence from "@/components/ProfilePictureSequence";
import Tabs from "@/components/Tabs";
import TagGrade from "@/components/TagGrade";
import TagStage from "@/components/TagStage";
import TipSpeechBubble from "@/components/TipSpeechBubble";

interface Props {}

export default function VisualizeComponent({}: Props): JSX.Element {

  return (
    <div className="snap-center self-center items-center origin-center place-self-center justify-self-center">
      {/* Coloque o componente aqui para visualizar */}

      <GradePicker type={"circles"}
        onChange={(v) => {console.log(v)}}
        gradeOptions={["1", "2", "3", "4", "5"]}
      />
      <GradePicker type={"cards"}
        onChange={(v) => {console.log(v)}}
        gradeOptions={["Precisa Melhorar", "Razoável", "Boa", "Muito Boa", "Excelente"]}
      />
      
      <div className="flex flex-col space-y-8">
        <Tabs tabs={["Critérios comportamentais", "Critérios de execução"]} onChange={(i) => {console.log(i)}}/>
        <Tabs tabs={["Autoavaliação", "Avaliação 360º", "Avaliação final"]} onChange={(i) => {console.log(i)}}/>
        <Tabs type="ghost" tabs={["Critérios comportamentais", "Critérios de execução"]} onChange={(i) => {console.log(i)}}/>
        {/* <Tabs tabs={["Análise", "Histórico"]} onChange={(i) => {console.log(i)}}/> */}
      
        <div></div>

        <div className="flex flex-row space-x-20">
          <div className="flex flex-col space-y-6">
            <TagGrade grade={5}></TagGrade>
            <TagGrade grade={4}></TagGrade>
            <TagGrade grade={3}></TagGrade>
            <TagGrade grade={2}></TagGrade>
          </div>
          <div className="flex flex-col space-y-6">
            <TagStage stage={"Não iniciado"}></TagStage>
            <TagStage stage={"Em andamento"}></TagStage>
            <TagStage stage={"Em revisão"}></TagStage>
            <TagStage stage={"Concluída"}></TagStage>
            <TagStage stage={"Entregue"}></TagStage>
          </div>
          <div className="flex flex-col space-y-6">
            <TipSpeechBubble triangleSide={"left"} text={"Critério que diz respeito a sua habilidade de buscar fazer atividades do dia a dia de maneira diferente do convencional trazendo uma nova forma de se fazer e assim quem sabe surpreender com melhores resultados."}></TipSpeechBubble>
            <TipSpeechBubble text={"A sua nota final da avaliação referente ao ciclo de avaliação 2021.1 já está no portal e você pode encontrá-la na página “Notas”."}></TipSpeechBubble>
            <TipSpeechBubble triangleSide={"down"} text={"O ciclo avaliativo terminou, vá até a aba de avaliações para avaliar os colaboradores."}></TipSpeechBubble>
            <TipSpeechBubble triangleSide={"up"} text={"lorem ipsum looooong text lorem ipsum looooong text lorem ipsum looooong text lorem ipsum looooong text lorem ipsum looooong text "}></TipSpeechBubble>
          </div>
        </div>

        <ProfilePictureSequence pictures={[""]}></ProfilePictureSequence>
        <Header title={"asdasd"} userName={"asdasdas"} profileImage={""}></Header>
        <Card imageSrc={"asd"} name={"Fulano"} role={"Dev"} email={"fulano@gmail.com"} ></Card>
      </div>
    </div>
  );
};
