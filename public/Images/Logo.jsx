import React from "react";
import LogoStyles from "../../src/styles/logo.module.scss";

export const Logo = () => {
  return (
    <div className={LogoStyles.logoContainer}>
      <img
        src="/logo.webp"
        srcSet="/logo.webp 1x, /logo-2x.webp 2x"
        alt="Logo"
      />
      <span>USER Feedback</span>
    </div>
  );
};
