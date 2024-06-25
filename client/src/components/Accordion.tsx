import React, { useState } from 'react';
import {
  LineChart, 
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer 
} from 'recharts';

import arrow from "../assets/arrow-down-circle.svg";

// TODO: criar props para as notas
interface AccordionProps {
  title: string;
}

const data = [
  {
    // pv = autoavaliação ; uv = avaliação do gestor
    cicle: '2020.1',
    pv: 1,
    uv: 5,
  },
  {
    cicle: '2020.2',
    pv: 2,
    uv: 4,
  },
  {
    cicle: '2021.1',
    pv: 3,
    uv: 2,
  },
  {
    cicle: '2021.2',
    pv: 4,
    uv: 3,
  },
  {
    cicle: '2022.1',
    pv: 5,
    uv: 1,
  },
  {
    cicle: '2022.2',
    pv: 1,
    uv: 3,
  },
];

const Accordion: React.FC<AccordionProps> = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-2xl w-[28rem] bg-content-background overflow-hidden transition-all duration-500" style={{ height: isOpen ? '296px' : '4.5rem' }}>
      <div className="h-[4.5rem] rounded-2xl w-full bg-content-background flex flex-col">
        <div className="w-full flex justify-between items-center p-4">
          <span className="text-20 text-purple-text font-bold">{title}</span>
          <img
            src={arrow}
            onClick={() => setIsOpen(!isOpen)}
            className={`cursor-pointer w-6 h-6 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
            alt="arrow"
          />
        </div>
        <div className="w-full flex justify-center">
          <div className='w-11/12 h-px bg-gray'></div>
        </div>
      </div>
      {isOpen && (
        <div>
          <div className='pl-12 flex items-center'>
            <div className='w-9 h-0.5 bg-[#8884d8] mr-1'></div>
            <span className='text-12'>Nota da autoavaliação</span>
          </div>
          <div className='pl-12 flex items-center'>
            <div className='w-9 h-0.5 bg-[#82ca9d] mr-1'></div>
            <span className='text-12'>Nota recebida pelo gestor</span>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart
              width={500}
              height={200}
              data={data}
              margin={{
                top: 40,
                right: 30,
                left: 0,
                bottom: 5,
              }}
            >
              <CartesianGrid />
              <XAxis dataKey="cicle" />
              <YAxis domain={[1, 1, 5]} />
              <Tooltip />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={1.5} />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeWidth={1.5} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default Accordion;