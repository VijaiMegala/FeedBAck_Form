import React from 'react';
import OptionsFieldSideBarStyles from './optionFieldSideBar.module.scss';
import { TextField, IconButton } from '@mui/material';
import { MdAdd, MdDelete } from 'react-icons/md';

export const OptionsFieldSideBar = ({ options, onOptionsChange }) => {

  const handleOptionChange = (index, newValue) => {
    const updatedOptions = [...options];
    updatedOptions[index] = newValue;
    onOptionsChange(updatedOptions);
  };

  const handleAddOption = () => {
    onOptionsChange([...options, ""]); 
  };

  const handleRemoveOption = (index) => {
    const updatedOptions = options.filter((_, i) => i !== index);
    onOptionsChange(updatedOptions); 
  };

  return (
    <div className={OptionsFieldSideBarStyles.container}>
      <span>Options</span>
      {options.map((option, index) => (
        <div key={index} className={OptionsFieldSideBarStyles.optionContainer}>
          <TextField
            variant="standard"
            value={option}
            onChange={e => handleOptionChange(index, e.target.value)}
          />
          <IconButton onClick={() => handleRemoveOption(index)}>
            <MdDelete />
          </IconButton>
        </div>
      ))}
      <IconButton onClick={handleAddOption}>
        <MdAdd />
      </IconButton>
    </div>
  );
};
