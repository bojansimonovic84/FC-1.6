import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-black/20 backdrop-blur-md p-6 rounded-lg border border-white/10 shadow-2xl ${className}`}>
      {children}
    </div>
  );
};

export default Card;