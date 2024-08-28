import React from 'react';
import CategoryButtonsStyles from './categoryButton.module.scss';
import { CategoriesButton } from './CategoriesButton';

export const CategoriesButtons = ({ options = [] }) => { 
  console.log(options)
  return (
    <div className={CategoryButtonsStyles.mainContainer}>
      {options.length > 0 ? (
        options.map((option, index) => (
          <CategoriesButton key={index} text={option} />
        ))
      ) : (
        <div>No categories available</div> 
      )}
    </div>
  );
};
