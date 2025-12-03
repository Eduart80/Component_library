import React from 'react';
import type {User} from '../../types/index'



export const UserProfileCard: React.FC<User> =({
      id,
      name,
      email,
      role,
      avatarUrl,
      children
    }) =>{
    return (
      <div className={`p-4 border-l-4 ${id}`}>
        <div className="flex justify-between items-center">
          <p>{name}</p>
          <p>{email}</p>
          <p>{role}</p>
        </div>
        {avatarUrl}
        {children}
      </div>
    );
};