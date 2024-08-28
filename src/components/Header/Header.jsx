import React from "react";
import HeaderStyles from "./header.module.scss";
import { Logo } from "../../../public/Images/Logo";
import { Button } from "../Buttons/Button";

export const Header = ({ isCreate, onSave }) => {
  return (
    <div className={HeaderStyles.container}>
      <div className={HeaderStyles.image}>
        <Logo />
      </div>
      {isCreate && (
        <div className={HeaderStyles.Buttons}>
          <div onClick={onSave}>
            <Button label={"Save"} type={"Blue"} />
          </div>
          <Button label={"Publish"} type={"Green"} />
        </div>
      )}
    </div>
  );
};
