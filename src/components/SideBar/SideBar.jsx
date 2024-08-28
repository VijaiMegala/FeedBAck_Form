import React, { useState } from 'react';
import SideBarStyles from './sideBar.module.scss';
import { InputDetails } from '../InputDetails/InputDetails';
import { SideBarSubCom } from '../SidebarSubCom/SideBarSubCom';
import { LogicDetails } from '../LogicDetails/LogicDetails';

export const SideBar = ({ addInput, onLogicChange }) => {
  const [logicInputs, setLogicInputs] = useState({
    url: '',
    date: '',
    time: ''
  });

  const handleLogicInputChange = (field, value) => {
    setLogicInputs(prev => ({
      ...prev,
      [field]: value,
    }));
    
    onLogicChange && onLogicChange({ ...logicInputs, [field]: value });
  };

  return (
    <div className={SideBarStyles.sideBarContainer}>
      <SideBarSubCom title={"Add fields"}>
      <InputDetails Icon={"text"} text={"Textarea"} onClick={() => addInput('text-area', 'Textarea')} />
        <InputDetails Icon={"numeric"} text={"Numeric rating"} onClick={() => addInput('numeric-rating', 'Numeric rating')} />
        <InputDetails Icon={"star"} text={"Star rating"} onClick={() => addInput('star-rating', 'Star rating')} />
        <InputDetails Icon={"smiley"} text={"Smiley rating"} onClick={() => addInput('smiley-rating', 'Smiley rating')} />
        <InputDetails Icon={"line"} text={"Single line input"} onClick={() => addInput('single-line-input', 'Single line input')} />
        <InputDetails Icon={"radio"} text={"Radio button"} onClick={() => addInput('radio', 'Radio button')} />
        <InputDetails Icon={"category"} text={"Categories"} onClick={() => addInput('categories', 'Categories')} />
      </SideBarSubCom>
      <SideBarSubCom title={"Add logic"}>
        <LogicDetails
          text={"Show based on URL conditions"}
          field={"text"}
          placeholder={"http://"}
          onChange={(value) => handleLogicInputChange('url', value)} // Capture URL logic
        />
        <LogicDetails
          text={"Show on a specific date"}
          field={"box"}
          label={"Start date"}
          placeholder={"DD/MM/YYYY"}
          onChange={(value) => handleLogicInputChange('date', value)} // Capture Date logic
        />
        <LogicDetails
          text={"Show on a specific time"}
          field={"box"}
          label={"Select Time"}
          placeholder={"hh:mm:ss"}
          onChange={(value) => handleLogicInputChange('time', value)} // Capture Time logic
        />
      </SideBarSubCom>
    </div>
  );
};
