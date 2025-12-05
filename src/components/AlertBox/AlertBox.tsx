// components/AlertBox/AlertBox.tsx
import React from 'react';
import type { AlertBoxProps } from '../../types';
 


export const AlertBox: React.FC<AlertBoxProps> = ({
  type,
  message,
  onClose,
  children
}) => {
  const alertStyles = {
    success:{ 
      backgroundColor: '#baf0c7ff',
      borderColor: '#a9e8b8ff',
      color: '#30a94dff',
      borderRadius:'20px'
     },
    error: {
      backgroundColor: '#f8d7da',
      borderColor: '#f5c6cb',
      color: '#721c24',
      borderRadius:'20px'
    },
    warning: {
    backgroundColor: '#fff3cd',
    borderColor: '#ffeeba',
    color: '#856404',
    borderRadius:'20px'
    },
    info: {
      backgroundColor: '#d1ecf1',
      borderColor: '#bee5eb',
      color: '#0c5460',
      borderRadius:'20px'
    }
  };
 
  return (
    <div className='p-4 sticky-top border-l-4' style={alertStyles[type]}>
      <div className="d-flex justify-between" >
        <p style={{fontWeight:'bold'}}>{message}</p>
        {onClose && (
          <button
            onClick={onClose}
            style={{ 
              marginLeft: 'auto', 
              color: '#222722ff', 
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              fontSize: '1.2rem', 
               }}
            >
            X
          </button>
        )}
      </div>
      {children}
    </div>
  );
};