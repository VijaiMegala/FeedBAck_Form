import React from 'react';
import ButtonStyles from './button.module.scss';

export const Button = ({ label, type }) => {

  const buttonTypeClass = ButtonStyles[`buttonContainer${type}`] || ButtonStyles.buttonContainer;

  return (
    <div className={`${ButtonStyles.buttonContainer} ${buttonTypeClass}`}>
      {label}
    </div>
  );
};
