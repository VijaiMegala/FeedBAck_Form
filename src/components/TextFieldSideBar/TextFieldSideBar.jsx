import React from 'react';
import InputEditComStyles from "../InputEdit/inputEditCom.module.scss";
import { TextField } from '@mui/material';

export const TextFieldSideBar = ({ value, onChange }) => {
  return (
    <div className={InputEditComStyles.containerVal}>
      <TextField
        label="Error Message"
        type="search"
        variant="standard"
        value={value}
        onChange={onChange}
      />
      <span className={InputEditComStyles.containerHelperText}>Helper Text</span>
    </div>
  );
};
