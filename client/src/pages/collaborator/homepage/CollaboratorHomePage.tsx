import React, { useEffect } from "react";

import GroupMeeting from "@/assets/ilustrations/groupMeeting.svg";
import WorkingTogether from "@/assets/ilustrations/workingTogether.svg";
import ReadingOnTopOfPileOfBooks from "@/assets/ilustrations/readingOnTopOfPileOfBooks.svg";
import star_filled from "@/assets/star_filled.svg";
import star_empty from "@/assets/star_empty.svg";
import flag from "@/assets/flag.svg";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import ProgressBar from "@/components/ProgressBar";
import Header from "@/components/Header";
import { useAuth } from "@/hooks/AuthUser";
import { Menu } from "@/components/Menu";
import "./HomePage.css";
import { useCycle } from "@/hooks/useCycle";
import { useNavigate } from "react-router-dom";

function stars(fill: 1 | 2 | 3 | 4 | 5) {
  const starArray = new Array(5).fill(null);

  return (
    <div className="flex flex-row space-x-[10px] justify-center">
      {starArray.map((_, index) => (
        <img
          key={index}
          src={index < fill ? star_filled : star_empty}
          alt="img"
          className="img"
        />
      ))}
    </div>
  );
}

// TODO: como converter um inteiro em um ponto {uv, pv, amt} nesse array data ?
const data = [
  {
    name: "origin",
    uv: 1,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "2020.1",
    uv: 1,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "2020.2",
    uv: 2,
    pv: 1398,
    amt: 2210,
  },
  // {
  //   name: "2021.1",
  //   uv: 3,
  //   pv: 9800,
  //   amt: 2290,
  // },
  // {
  //   name: "2021.2",
  //   uv: 4,
  //   pv: 3908,
  //   amt: 2000,
  // },
  // {
  //   name: "2022.1",
  //   uv: 5,
  //   pv: 4800,
  //   amt: 2181,
  // },
  // {
  //   name: "2022.2",
  //   uv: 3,
  //   pv: 3800,
  //   amt: 2500,
  // },
  // {
  //   name: "2023.1",
  //   uv: 3,
  //   pv: 4300,
  //   amt: 2100,
  // },
  // {
  //   name: "2023.2",
  //   uv: 5,
  //   pv: 4300,
  //   amt: 2100,
  // },
  // {
  //   name: "2024.1",
  //   uv: 1,
  //   pv: 4300,
  //   amt: 2100,
  // },
  // {
  //   name: "2024.2",
  //   uv: 2.5,
  //   pv: 4300,
  //   amt: 2100,
  // },
];

const CustomDot = (props: any) => {
  const { cx, cy } = props;
  return <circle cx={cx} cy={cy} r={5} stroke="none" fill="#CCBFFF" />;
};

function calculateDaysBetween(startDate: string, endDate: string): number {

  function parseDate(dateString: string): Date {
    const [day, month, year] = dateString.split('/').map(Number);
    return new Date(year, month - 1, day); // month is 0-based in JS Date
  }

  const start = parseDate(startDate);
  const end = parseDate(endDate);

  // Calculate the difference in time
  const timeDifference = end.getTime() - start.getTime();

  // Convert time difference from milliseconds to days
  const dayDifference = timeDifference / (1000 * 3600 * 24);

  return dayDifference;
}

export default function CollaboratorHomePage(): JSX.Element {
  const { user, isAuthenticated } = useAuth();
  const { _cycle, endDate, endTime, startDate, callAllUpdates, selfEvalInfo } = useCycle();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }

    if (user) { // user is always (should be) defined when isAuthenticated (true)
      callAllUpdates(user.id, true);
    }
  }, []);

  return (
    <main className="flex flex-row w-screen h-screen max-h-screen p-6 bg-gray-900 text-white">
      <aside>
        <Menu></Menu>
      </aside>

      <div className="flex flex-col w-full ml-[16px]">

        <Header 
          userName={user?.name || ""} 
          profileImage={user?.imgUrl || ""} 
          title="Página inicial"
        />
        
        <section className="flex flex-row mt-[27px]">
          <div className="flex flex-col p-4 pl-5 rounded-2xl w-[45rem] bg-content-background">
            <p className="font-bold text-28 leading-[42px] text-purple-text text-left">
              Bem vindo de volta Pedro!
            </p>
            <div className="flex items-start pt-8">
              <img src={flag} alt="flag" className="pr-3" />
              <p className="text-left font-normal text-[16px] leading-[24px]">
                O ciclo atual{" "}
                <span className="text-purple-text">fecha em {calculateDaysBetween(startDate, endDate)} dias</span>{" "}
                (Data de fechamento: {endDate})
              </p>
            </div>

            <div className="flex items-start pt-8">
              <img src={flag} alt="flag" className="pr-3" />
              <p className="text-left">
                Sua nota final do ciclo avaliativo de {_cycle?.cycleName} já está
                disponível na página Notas.
              </p>
            </div>
          </div>

          <div className="ml-auto bg-content-background pt-4 pl-4 pr-4 rounded-2xl w-[18.125rem]">
            <h2 className="text-16 mb-4">Avaliações entregues</h2>
            <div className="flex justify-center items-center">
              <div className="w-32 h-32">
                <ProgressBar />
              </div>
            </div>
            <p className="text-12">Ciclo avaliativo 2023.2</p>
          </div>
        </section>

        <section className="mt-[14px] bg-content-background p-4 rounded-2xl">
          <h2 className="text-20 text-purple-text font-bold text-left mb-0">
            Suas maiores notas
          </h2>
          <p className="text-16 text-text text-left mb-4 ">
            Dados referentes ao último ciclo avaliativo realizado (...)
          </p>
          <div className="flex flex-row justify-between px-28">
            <div className="flex flex-col items-center bg-dark-zebra p-4 rounded-xl space-y-[8px] h-[220px]">
              <div className="w-full h-[120px] flex justify-center items-center overflow-hidden">
                <img src={GroupMeeting} alt="img" className="h-full object-cover" />
              </div>
              <p className="font-normal text-16 leading-[24px]">Capacidade de aprender</p>
              {stars(5)}
            </div>
            <div className="flex flex-col items-center bg-dark-zebra p-4 rounded-xl space-y-[8px] h-[220px]">
              <div className="w-full h-[120px] flex justify-center items-center overflow-hidden">
                <img src={WorkingTogether} alt="img" className="h-full object-cover" />
              </div>
              <p className="font-normal text-16 leading-[24px]">Trabalho em equipe</p>
              {stars(5)}
            </div>
            <div className="flex flex-col items-center bg-dark-zebra p-4 rounded-xl space-y-[8px] h-[220px]">
              <div className="w-full h-[120px] flex justify-center items-center overflow-hidden">
                <img src={ReadingOnTopOfPileOfBooks} alt="img" className="h-full object-cover" />
              </div>
              <p className="font-normal text-16 leading-[24px]">Organização no trabalho</p>
              {stars(5)}
            </div>
          </div>
        </section>

        <section className="mt-[14px] bg-content-background p-4 rounded-2xl overflow-y-scroll">
          <h2 className="text-20 text-purple-text font-bold text-left">
            Meu desempenho{" "}
            <span className="text-14 text-text font-normal ml-2">
              Confira seu desempenho de médias finais no último ciclo
            </span>
          </h2>
          <div className="h-64">
            {/* Placeholder for a performance chart */}
            <div className="flex justify-center items-center h-full text-gray-500 ">
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart
                  data={data}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid stroke="#ccc" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[1, 0.5, 5]} />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="uv"
                    stroke="#8884d8"
                    fill="#A28BFE"
                    dot={<CustomDot />}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
};
