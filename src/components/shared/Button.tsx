import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  children?: React.ReactNode;
  variant:
    | 'primary'
    | 'secondary'
    | 'primary-outlined'
    | 'secondary-outlined'
    | 'light'
    | 'dark';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant, type }) => {
  const getClassNames = () => {
    let classNames = 'button';
    if (variant.includes('outlined')) {
      classNames += ' outlined';
    }
    if (variant.includes('primary')) {
      classNames += ' primary';
    } else if (variant.includes('secondary')) {
      classNames += ' secondary';
    } else if (variant.includes('light')) {
      classNames += ' light';
    } else if (variant.includes('dark')) {
      classNames += ' dark';
    }
    return classNames;
  };

  return (
    <button className={getClassNames()} onClick={onClick} type={type}>
      {label}
    </button>
  );
};

export default Button;
