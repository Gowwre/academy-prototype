
import React from 'react';

interface DJoyLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const DJoyLogo: React.FC<DJoyLogoProps> = ({ 
  className = '', 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'h-10',
    md: 'h-14', // Increased size
    lg: 'h-20', // Increased size
    xl: 'h-24',
    '2xl': 'h-32'
  };

  return (
    <div className={`inline-flex items-center ${className}`}>
      <img 
        src={`/academy-prototype/public/djoy-academy.jpg`}
        alt="DJoy Academy" 
        className={`${sizeClasses[size]} w-auto object-contain bg-white p-2 rounded-2xl shadow-lg transition-transform hover:scale-105`}
      />
    </div>
  );
};

export default DJoyLogo;
