import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
const Button: React.FC<ButtonProps> = ({ children, className, style }) => {
  return (
    <div
      style={style}
      className={
        "flex gap-4 items-center py-3 px-4  justify-between rounded capitalize text-[16px] font-semibold " +
        className
      }
    >
      {children}
    </div>
  );
};

export default Button;
