import React from 'react';
import UserCard from './UserCard';

const UserList = ({ users }) => {
  return (
    <div className="container mx-auto mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
