import React from 'react';

const Header = ({ onToggleShowUsers, showAllUsers }) => {
  return (
    <header className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Usuario Código Certo</h1>
        <button
          onClick={onToggleShowUsers} // Chama a função para alternar entre mostrar e esconder todos os usuários ao ser clicado
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {showAllUsers ? 'Fechar' : 'Abrir'}
        </button>
      </div>
    </header>
  );
};

export default Header;
