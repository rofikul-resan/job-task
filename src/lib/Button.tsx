import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ className, children }) => {
  return (
    <button
      className={className}
      style={{
        fontSize: "16px",
        fontWeight: "500",
        borderRadius: "5px",
        padding: "0.5rem",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
