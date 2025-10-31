"use client";
import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  variant?: "primary";
  as?: "button" | "a";
  href?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  variant = "primary",
  as = "button",
  href,
  ...rest
}) => {
  const classes = [styles.btn, styles[`btn-${variant}`], className].join(" ");

  if (as === "a") {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
