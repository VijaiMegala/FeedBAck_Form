import React from "react";
import InputConStyles from "./inputCon.module.scss";
import { TextAreaCom } from "../InputTypes/TextAreaCom/TextAreaCom";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { NumericRating } from "../InputTypes/NumericRating/NumericRating";
import { StarRating } from "../InputTypes/StarRating/StarRating";
import SmileyRating from "../InputTypes/SmileyRating/SmileyRating";
import { TextField } from "@mui/material";
import RadioCom from "../RadioCom/RadioCom";
import { CategoriesButtons } from "../InputTypes/CategoriesButton/CategoriesButtons";

export const InputCon = ({ title, type, onDelete, onEdit , options}) => {

  const types = {
    "text-area": <TextAreaCom />,
    "numeric-rating": <NumericRating />,
    "star-rating": <StarRating />,
    "smiley-rating": <SmileyRating />,
    "single-line-input": <TextField />,
    "radio": <RadioCom options={options}/>,
    "categories": <CategoriesButtons options={options}/>
  };

  return (
    <div className={InputConStyles.container}>
      <div className={InputConStyles.containerMain}>
        <span>{title}</span>
        {types[type]}
      </div>
      <div className={InputConStyles.containerFooter}>
        <MdEdit 
          style={{cursor:"pointer"}} 
          color={"grey"} 
          size={20} 
          onClick={onEdit}
        />
        <MdDelete 
          style={{cursor:"pointer"}} 
          color={"grey"} 
          size={20} 
          onClick={onDelete} 
        />
      </div>
    </div>
  );
};
