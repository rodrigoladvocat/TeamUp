import React from 'react';
import './HomePage.css';
import img1 from '../../../assets/img1.svg';
import img2 from '../../../assets/img2.svg';
import img3 from '../../../assets/img3.svg';
import star from '../../../assets/star.svg';
import flag from '../../../assets/flag.svg';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '2020.1',
    uv: 1,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '2020.2',
    uv: 2,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '2021.1',
    uv: 3,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '2021.2',
    uv: 4,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '2022.1',
    uv: 5,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '2022.2',
    uv: 3,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '2023.1',
    uv: 3,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '2023.2',
    uv: 5,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '2024.1',
    uv: 1,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '2024.2',
    uv: 2.5,
    pv: 4300,
    amt: 2100,
  },
  
];

const CustomDot = (props : any) => {
  const { cx, cy } = props;
  return (
    <circle cx={cx} cy={cy} r={5} stroke="none" fill="#CCBFFF" />
  );
};


const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="flex">
        <aside></aside>

        <main className="flex-1 p-6 bg-general-background">
          <header className="flex justify-between items-center mb-6">
            <h1 className="text-32 text-purple-text font-bold">Página inicial</h1>
            <div className="flex items-center">
              <img src="/profile.jpg" alt="Profile" className="w-10 h-10 rounded-full mr-2" />
              <span>Pedro Almeida</span>
            </div>
          </header>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="col-span-2 bg-content-background p-4 rounded-2xl">
              <p className='text-28 text-purple-text font-bold text-left'>Bem vindo de volta Pedro!</p>
              <div className="flex items-start pt-8">
                <img src={flag} alt="flag" className='pr-3' />
                <p className='text-left'>
                  O ciclo atual <span className="text-purple-text">fecha em 10 dias</span> (Data de fechamento: 10/06/24)
                </p>
              </div>
              
              <div className="flex items-start pt-8">
                <img src={flag} alt="flag" className='pr-3' />
                <p className='text-left'>
                  Sua nota final do ciclo avaliativo de 2023.2 já está disponível na página Notas.
                </p>
              </div>
            </div>
            <div className="bg-content-background p-4 rounded-2xl">
              <h2 className="text-16 mb-4">Progresso de avaliações</h2>
              <div className="flex justify-center items-center">
                <div className="w-32 h-32">
                  <div className="relative pt-1">
                    <p className="text-center mt-2">75% Concluída</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <div className="bg-content-background p-4 rounded-2xl mb-4">
              <h2 className="text-20 text-purple-text font-bold text-left mb-0">Suas maiores notas</h2>
              <p className='text-16 text-text text-left mb-4 '>Dados referentes ao último ciclo avaliativo realizado (...)</p>
              <div className="grid grid-cols-3 gap-[7.5rem] pl-[50px] ">
                <div className="bg-dark-zebra p-4 rounded-xl text-center w-[14.313rem] h-[12.5rem]">
                  <div className='flex justify-center'>
                    <img src={img1} alt="img" className='img' />
                  </div>
                  <p className='text-16 p-2'>Capacidade de aprender</p>
                  <div className='stars'>
                    <img src={star} alt="img" className='img' />
                    <img src={star} alt="img" className='img' />
                    <img src={star} alt="img" className='img' />
                    <img src={star} alt="img" className='img' />
                    <img src={star} alt="img" className='img' />
                  </div>
                </div>
                <div className="bg-dark-zebra p-4 rounded-xl text-center w-[14.313rem] h-[12.5rem]">
                  <div className='flex justify-center'>
                    <img src={img2} alt="img" className='img' />
                  </div>
                  <p className='text-16 p-2'>Trabalho em equipe</p>
                  <div className='stars'>
                    <img src={star} alt="img" className='img' />
                    <img src={star} alt="img" className='img' />
                    <img src={star} alt="img" className='img' />
                    <img src={star} alt="img" className='img' />
                    <img src={star} alt="img" className='img' />
                  </div>
                </div>
                <div className="bg-dark-zebra p-4 rounded-xl text-center w-[14.313rem] h-[12.5rem] ">
                  <div className='flex justify-center'>
                    <img src={img3} alt="img" className='img' />
                  </div>
                  <p className='text-16 p-2'>Organização no trabalho</p>
                  <div className='stars'>
                    <img src={star} alt="img" className='img' />
                    <img src={star} alt="img" className='img' />
                    <img src={star} alt="img" className='img' />
                    <img src={star} alt="img" className='img' />
                    <img src={star} alt="img" className='img' />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-content-background p-4 rounded-2xl">
              <h2 className="text-20 text-purple-text font-bold text-left">Meu desempenho <span className='text-14 text-text font-normal ml-2'>Confira seu desempenho de médias finais no último ciclo</span></h2>
              <div className="h-64">
                {/* Placeholder for a performance chart */}
                <div className="flex justify-center items-center h-full text-gray-500">
                  <ResponsiveContainer width="100%" height={200}>
                    <AreaChart
                      data={data}
                      margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                      }}>
                      <CartesianGrid  stroke="#ccc"  />
                      <XAxis dataKey="name" />
                      <YAxis domain={[1, 0.5, 5]} />
                      <Tooltip />
                      <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#A28BFE" dot={<CustomDot />}/>
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;