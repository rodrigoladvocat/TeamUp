import React, { useState } from 'react';
import {
  LineChart, 
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer 
} from 'recharts';

interface AccordionProps {
  title: string;
  content: string;
}

const data = [
  {
    name: '2020.1',
    uv: 5,
    pv: 1,
    amt: 2400,
  },
  {
    name: '2020.2',
    uv: 4,
    pv: 2,
    amt: 2210,
  },
  {
    name: '2021.1',
    uv: 2,
    pv: 3,
    amt: 2290,
  },
  {
    name: '2021.2',
    uv: 3,
    pv: 4,
    amt: 2000,
  },
  {
    name: '2022.1',
    uv: 1,
    pv: 5,
    amt: 2181,
  },
  {
    name: '2022.2',
    uv: 3,
    pv: 1,
    amt: 2500,
  },

];

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-2xl w-[28rem] bg-content-background overflow-hidden transition-all duration-500" style={{ height: isOpen ? '296px' : '4.5rem' }}>
      <button
        className="h-[4.5rem] rounded-2xl w-full bg-content-background flex justify-between items-center p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-20 text-purple-text font-bold">{title}</span>
        <svg
          className={`w-6 h-6 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="">
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
              <XAxis dataKey="name" />
              <YAxis domain={[1, 1, 5]} />
              <Tooltip />
              <Legend height={1} verticalAlign="top" align="center" />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default Accordion;