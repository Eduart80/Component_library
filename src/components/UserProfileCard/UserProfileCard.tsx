import React from 'react';
import type {User} from '../../types/index'



export const UserProfileCard: React.FC<User> =({
      id,
      name,
      email,
      role,
      avatarUrl
    }) =>{
      const cardStyle = {
        background: '#242424',
        color: '#f6f6f6ff',
        width: '100%',
        height: '100vh'
      }
    return (
      <div className={`p-4 border-l-4 ${id}`}>
        <div className='card p-4 border-l-4 text-center' style={{background: cardStyle.background}}>
          <div className="d-flex align-items-center">
            <div style={{ flex: '1', textAlign: 'center' }}>
              <img src={avatarUrl} alt='Jake_Sully' className='avatar' style={{width:'110px', height:'110px', borderRadius:'100px'}} />
            </div>
            <div style={{flex:'2',paddingLeft:'1rem', textAlign:'center'}}>
              <p style={{color: cardStyle.color}}>{name}</p>
              <p style={{color: cardStyle.color}}>{email}</p>
              <p style={{color: cardStyle.color}}>{role}</p>
            </div>
          </div>
          <div style={{textAlign:'center', marginTop:'1rem'}}>
          <button className='btn btn-primary' style={{width:'80%'}} onClick={() => alert('User Jake is open for discussion 😂')} >
                    Edit Profile
          </button>
          </div>
        </div>
      </div>
    );
};
