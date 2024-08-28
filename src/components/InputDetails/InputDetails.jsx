import React from "react";
import InputDetailsStyles from "./inputDetails.module.scss";
import { TextInputIcon } from "../../../public/Images/InputIcons/TextInputIcon";
import { InputAddIcon } from "../../../public/Images/InputIcons/InputAddIcon";
import { RadioInputIcon } from "../../../public/Images/InputIcons/RadioInputIcon";
import { NumericInputIcon } from "../../../public/Images/InputIcons/NumericInputIcon";
import { SingleLineInputIcon } from "../../../public/Images/InputIcons/SingleLineInputIcon";
import { SmileyInputIcon } from "../../../public/Images/InputIcons/SmileyInputIcon";
import { StarInputIcon } from "../../../public/Images/InputIcons/StarInputIcon.jsx";
import { CategoryInputIcon } from "../../../public/Images/InputIcons/CategoryInputIcon.jsx";

export const InputDetails = ({ Icon, text, onClick }) => { 
  const component = {
    text: <TextInputIcon />,
    radio: <RadioInputIcon />,
    numeric: <NumericInputIcon />,
    line: <SingleLineInputIcon />,
    smiley: <SmileyInputIcon />,
    star: <StarInputIcon />,
    category: <CategoryInputIcon />,
  };

  return (
    <div className={InputDetailsStyles.container} onClick={onClick} style={{ cursor: 'pointer' }}> {/* Add onClick and pointer cursor */}
      <div className={InputDetailsStyles.containerInput}>
        {component[Icon] || <div>Icon Not Found</div>}
        <span>{text}</span>
      </div>
      <InputAddIcon />
    </div>
  );
};
