import React from "react";

interface ButtonPops {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
const Button: React.FC<ButtonPops> = ({ children, className, style }) => {
  return (
    <div
      style={style}
      className={"flex gap-4 items-center py-3 px-4  rounded " + className}
    >
      {children}
    </div>
  );
};

export default Button;
