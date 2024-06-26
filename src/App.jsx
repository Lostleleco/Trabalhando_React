import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import UserList from './components/UserList';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Simulando uma requisição para obter dados dos usuários
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://dummyjson.com/users');
        if (response.ok) {
          const data = await response.json();
          setUsers(data.users.slice(0, 4)); // Pegando apenas os primeiros 4 usuários
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
      <Header />
      <main className="container mx-auto px-4 py-8">
        <UserList users={users} />
      </main>
    </div>
  );
};

export default App;
