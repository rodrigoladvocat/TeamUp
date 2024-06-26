import React from 'react';
import '../global.css';

const SearchBar: React.FC = () => {
  return (
    <div className="relative w-full max-w-xs">
      <input 
        type="text" 
        placeholder="Buscar por colaborador" 
        className="w-full pl-6 pr-12 py-2 rounded-xl border border-purple-text focus:outline-none"
      />
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 text-gray-500" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.42-1.42l4.28 4.28-1.42 1.42-4.28-4.28zM8 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;