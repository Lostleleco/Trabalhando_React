import React from 'react';

const Header = ({ onToggleShowUsers, showAllUsers }) => {
  return (
    <header className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Código Certo Users</h1>
        <button
          onClick={onToggleShowUsers}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
        >
          {showAllUsers ? 'Fechar' : 'Abrir'}
        </button>
      </div>
    </header>
  );
};

export default Header;
