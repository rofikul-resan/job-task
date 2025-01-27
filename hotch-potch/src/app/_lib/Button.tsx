import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ className, children }) => {
  return (
    <button
      className={className + " capitalize px-2 lg:px-3 lg:py-3 py-2"}
      style={{
        fontSize: "16px",
        fontWeight: "500",
        borderRadius: "8px",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
