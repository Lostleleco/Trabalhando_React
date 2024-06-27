import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import UserList from './components/UserList';

const App = () => {
  const [users, setUsers] = useState([]);
  const [showAllUsers, setShowAllUsers] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://dummyjson.com/users');
        if (response.ok) {
          const data = await response.json();
          setUsers(data.users);
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
      <Header onToggleShowUsers={() => setShowAllUsers(prevState => !prevState)} showAllUsers={showAllUsers} />
      <main className="container mx-auto px-4 py-8">
        <div className={`transition-all duration-500 ${showAllUsers ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <UserList users={users} />
        </div>
      </main>
    </div>
  );
};

export default App;
