import React, { useState, useEffect } from "react";
import InputEditComStyles from "./inputEditCom.module.scss";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Switch, TextField } from "@mui/material";
import { Button } from "../Buttons/Button";
import { TextFieldSideBar } from "../TextFieldSideBar/TextFieldSideBar";
import { OptionsFieldSideBar } from "../OptionsFiledSideBar/OptionsFieldSideBar";

export const InputEditCom = ({ type, initialData, onSave, onCancel }) => {
  const predefinedRadioOptions = ["Radio 1", "Radio 2", "Radio 3"];
  const predefinedCategoryOptions = ["Bug", "Content", "Others"];
  // console.log(initialData)

  const [label, setLabel] = useState(initialData.title || '');
  const [options, setOptions] = useState(initialData.options || 
    (type === "radio" ? predefinedRadioOptions : 
    (type === "categories" ? predefinedCategoryOptions : []))
  );

  useEffect(() => {
    setLabel(initialData.title || '');
    setOptions(initialData.options || 
      (type === "radio" ? predefinedRadioOptions : 
      (type === "categories" ? predefinedCategoryOptions : []))
    );
  }, [initialData, type]);

  const handleSave = () => {
    onSave({ ...initialData, title: label, options });
  };

  const types = {
    text: (
      <TextFieldSideBar
        value={label}
        onChange={(e) => setLabel(e.target.value)}
      />
    ),
    options: (
      <OptionsFieldSideBar options={options} onOptionsChange={setOptions} />
    ),
  };

  return (
    <div className={InputEditComStyles.container}>
      <div className={InputEditComStyles.containerHeader} onClick={onCancel}>
        <MdKeyboardArrowLeft size={34} style={{ cursor: "pointer" }} />
        <span>Back to Add Fields</span>
      </div>
      <div className={InputEditComStyles.containerLabel}>
        <TextField
          label="Label"
          type="search"
          variant="standard"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
        <div>
          <span>Required</span>
          <Switch defaultChecked />
        </div>
      </div>

      {types[type]}

      <div className={InputEditComStyles.containerFooter}>
        <div onClick={handleSave}>
          <Button label={"Save"} type={"Blue"} />
        </div>
        <div onClick={onCancel}>
          <Button label={"Cancel"} type={"White"} />
        </div>
      </div>
    </div>
  );
};
