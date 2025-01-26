import React from 'react';

type ButtonProps = {
    children: string;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ className , children }) => {
    return (
        <button className={className+ " " + "text-sm font-sm rounded-md p-2 "}>
            {children}
        </button>
    );
};

export default Button;