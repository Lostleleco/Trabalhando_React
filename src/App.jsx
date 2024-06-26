import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import UserList from './components/UserList';

const App = () => {
  const [users, setUsers] = useState([]);
  const [showAllUsers, setShowAllUsers] = useState(false); // Estado para controlar se todos os usuários são exibidos

  useEffect(() => {
    // Simulando uma requisição para obter dados dos usuários
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://dummyjson.com/users');
        if (response.ok) {
          const data = await response.json();
          setUsers(data.users); // Carrega todos os usuários inicialmente
        } else {
          throw new Error('Failed to fetch users');
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header onToggleShowUsers={() => setShowAllUsers(prevState => !prevState)} showAllUsers={showAllUsers} /> {/* Passando a função para mostrar ou esconder todos os usuários */}
      <main className="container mx-auto px-4 py-8">
        {showAllUsers && <UserList users={users} />} {/* Renderiza UserList apenas se showAllUsers for verdadeiro */}
      </main>
    </div>
  );
};

export default App;
