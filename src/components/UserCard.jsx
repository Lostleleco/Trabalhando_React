import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={user.avatar} alt={user.name} className="w-full h-48 object-cover object-center" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
        <p className="text-sm text-gray-600 mt-1">{user.email}</p>
        <div className="mt-3">
          <p className="text-sm text-gray-700">{user.address.city}, {user.address.country}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
