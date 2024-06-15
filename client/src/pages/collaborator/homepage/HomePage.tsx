import React from 'react';
import './HomePage.css';
import img1 from '../../../assets/img1.svg';
import img2 from '../../../assets/img2.svg';
import img3 from '../../../assets/img3.svg';
import star from '../../../assets/star.svg';
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
    <div className='container'>
      <div className='sidebar'></div>
      <div className='content'>
        <div className='header'>
          <h2 className='t-color' id='title'>Página inicial</h2>
        </div>
        <div className='message-evaluation'>
          <div className='message'>
            <h3 className='t-color' id='bigger-title'>Bem-vindo de volta, Robson!</h3>
            <h4>O ciclo atual...</h4>
            <h4>Sua nota final do ciclo avaliativo...</h4>
          </div>
          <div className='evaluation'>
            <h4>Progresso de avaliações</h4>
          </div>
        </div>
        <div className='top-scores'>
          <div className='text'>
            <h3 className='t-color' id='smaller-title'>Suas maiores notas</h3>
            <span>Dados referentes ao último ciclo avaliativo realizado(...)</span>
          </div>
          <div className='scores'>
            <div className='score'>
              <img src={img1} alt="img" className='img' />
              <h3>Capacidade de aprender</h3>
              <div className='stars'>
                <img src={star} alt="Star" className='star-img' />
                <img src={star} alt="Star" className='star-img' />
                <img src={star} alt="Star" className='star-img' />
                <img src={star} alt="Star" className='star-img' />
                <img src={star} alt="Star" className='star-img' />
              </div>
            </div>
            <div className='score'>
              <img src={img2} alt="img" className='img' />
              <h3>Trabalho em equipe</h3>
              <div className='stars'>
                <img src={star} alt="img" className='img' />
                <img src={star} alt="img" className='img' />
                <img src={star} alt="img" className='img' />
                <img src={star} alt="img" className='img' />
                <img src={star} alt="img" className='img' />
              </div>
            </div>
            <div className='score'>
              <img src={img3} alt="img" className='img' />
              <h3>Organização no trabalho</h3>
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
        <div className='performance'>
          <div className='text'>
            <h3 className='t-color' id='smaller-title'>Meu desempenho</h3>
            <span>Confira seu desempenho de médias finais nos últimos ciclos</span>
          </div>
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
  );
};

export default HomePage;
