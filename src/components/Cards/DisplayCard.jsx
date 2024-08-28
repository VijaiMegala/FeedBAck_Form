import React from 'react'
import { Notepad } from "../../../public/Images/Notepad";
import { Button } from "../Buttons/Button";
import DisplayCards from "./styles/displayCard.module.scss";

export const DisplayCard = ({ label, submitted, viewed, published }) => {
  return (
    <div className={DisplayCards.container}>
      <div className={DisplayCards.containerHeader}>
        <Notepad />
      </div>

      <div className={DisplayCards.containerMain}>
        <div className={DisplayCards.containerTitle}>
            <span>{label}</span>
        </div>

        <div className={DisplayCards.containerTable}>
          <div className={DisplayCards.containerRow}>
            <span className={DisplayCards.containerRowTitle}>Submitted</span>
            <span>{submitted}</span>
          </div>
          <div className={DisplayCards.containerRow}>
            <span className={DisplayCards.containerRowTitle}>Delivered</span>
            <span>{viewed}</span>
          </div>
          <div className={DisplayCards.containerRow}>
            <span className={DisplayCards.containerRowTitle}>Date Published</span>
            <span>{published}</span>
          </div>
        </div>
      </div>

      <div className={DisplayCards.containerButtons}>
        <Button label={"View submission"} type={"Violet"}/>
        <Button label={"Edit"} type={"Green"}/>
        <Button label={"Delete"} type={"Blue"}/>
      </div>
    </div>
  );
};
