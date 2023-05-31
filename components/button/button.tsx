import React from 'react';
import styles from '@/components/button/button.module.scss';

type ButtonProps = {
  children: React.ReactNode;
  disabled: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, disabled }) => {
  return (
    <button className={styles.chatButton} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
