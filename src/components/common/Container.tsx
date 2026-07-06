import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'default' | 'lg' | 'xl';
}

const Container = ({ children, className = '', size = 'default' }: ContainerProps) => {
  const sizes = {
    default: 'max-w-7xl',
    lg: 'max-w-8xl',
    xl: 'max-w-screen-2xl',
  };

  return (
    <div className={`${sizes[size]} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
