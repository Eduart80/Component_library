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
      backgroundColor: '#d4edda',
      borderColor: '#c3e6cb',
      color: '#155724',
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
      <div className="flex justify-between">
        <p>{message}</p>
        {onClose && (
          <button
            onClick={onClose}
            style={{ 
              marginLeft: '1rem', 
              color: '#222722ff', 
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              fontSize: '1.2rem',  }}
            >
            X
          </button>
        )}
      </div>
      {children}
    </div>
  );
};