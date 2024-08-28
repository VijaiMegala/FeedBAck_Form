import React from 'react';
import AddCardStyles from "./styles/addCard.module.scss";
import { AddPlus } from "../../../public/Images/AddPlus";

export const AddCard = ({ onClick }) => {
  return (
    <div className={AddCardStyles.container} onClick={onClick}>
      <div className={AddCardStyles.containerMain}>
        <AddPlus />
        <span className={AddCardStyles.text}>New form</span>
      </div>
    </div>
  );
};
