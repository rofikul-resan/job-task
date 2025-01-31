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
        "flex  items-center py-2 px-[14px]  justify-between rounded capitalize text-[16px] font-semibold " +
        className
      }
    >
      {children}
    </div>
  );
};

export default Button;
