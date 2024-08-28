import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function RadioCom({ options = [] }) { // Accept options as a prop with default empty array
  return (
    <FormControl>
      <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue={options[0] || ""} name="radio-buttons-group">
        {options.length > 0 ? (
          options.map((option, index) => (
            <FormControlLabel key={index} value={option} control={<Radio />} label={option} />
          ))
        ) : (
          <FormControlLabel value="" control={<Radio />} label="No options available" />
        )}
      </RadioGroup>
    </FormControl>
  );
}
