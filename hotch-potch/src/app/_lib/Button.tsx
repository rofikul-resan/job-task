import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ className, children }) => {
  return (
    <button
      className={className + " capitalize px-4 py-3"}
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
