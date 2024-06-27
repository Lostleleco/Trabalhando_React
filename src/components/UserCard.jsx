import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      
      <h2 className="text-lg font-bold mb-2">{user.firstName} {user.lastName}</h2>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </div>
  );
};

export default UserCard;
