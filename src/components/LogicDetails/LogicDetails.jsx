import React from 'react';
import LogicDetailStyles from './logicDetails.module.scss';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';

export const LogicDetails = ({ text, field, label, placeholder, onChange }) => {
  
  const handleInputChange = (e) => {
    const value = e.target.value;
    onChange(value);
  };

  const component = {
    text: (
      <TextField
        id={field}
        placeholder={placeholder}
        variant="standard"
        onChange={handleInputChange}
      />
    ),
    box: (
      <TextField
        id={field}
        placeholder={placeholder}
        label={label}
        variant="outlined"
        onChange={handleInputChange}
      />
    )
  };

  return (
    <div className={LogicDetailStyles.container}>
      <div className={LogicDetailStyles.containerHead}>
        <span>{text}</span>
        <Switch defaultChecked />
      </div>
      {component[field]}
    </div>
  );
};
