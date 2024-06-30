


function up(text: string) {
  return (
    <div className="flex flex-col-reverse items-center">
      <div className={`bg-white text-black text-wrap text-center p-[24px] text-[14px] font-normal font-inter leading-[18px] rounded-2xl max-w-[360px]`}>
        {text}
      </div>
      <div className={`relative bottom-[-8%] rotate-[225deg] w-[0] h-[0] border-t-transparent border-l-transparent border-r-[12px] border-b-[12px] border-white`} />
    </div>
  );
}


function right(text: string) {
  return (
    <div className="flex flex-row items-center">
      <div className={`bg-white text-black text-wrap text-center p-[24px] text-[14px] font-normal font-inter leading-[18px] rounded-2xl max-w-[360px]`}>
        {text}
      </div>
      <div className={`relative left-[-2%] rotate-[225deg] w-[0] h-[0] border-t-transparent border-l-transparent border-r-[12px] border-b-[12px] border-white`} />
    </div>
  );
}


function down(text: string) {
  return (
    <div className="flex flex-col items-center">
      <div className={`bg-white text-black text-wrap text-center p-[24px] text-[14px] font-normal font-inter leading-[18px] rounded-2xl max-w-[360px]`}>
        {text}
      </div>
      <div className={`relative bottom-[8%] rotate-[225deg] w-[0] h-[0] border-t-transparent border-l-transparent border-r-[12px] border-b-[12px] border-white`} />
    </div>
  );
}


function left(text: string) {
  return (
    <div className="flex flex-row-reverse items-center">
      <div className={`bg-white text-black text-wrap text-center p-[24px] text-[14px] font-normal font-inter leading-[18px] rounded-2xl max-w-[360px]`}>
        {text}
      </div>
      <div className={`relative right-[-2%] rotate-[45deg] w-[0] h-[0] border-t-transparent border-l-[12px] border-r-transparent border-b-[12px] border-white`} />
    </div>
  );
}


interface Props {
  text: string;
  triangleSide?: "up" | "right" | "down" | "left";
}


export default function TipSpeechBubble({text, triangleSide = "right"}: Props): JSX.Element {

  switch (triangleSide) {
    case "up":
      return up(text);
    case "down":
      return down(text);
    case "left":
      return left(text);
    case "right":
    default:
      return right(text);
  }
};
