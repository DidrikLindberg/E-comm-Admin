// src/components/Common/Button.js
import React from 'react';

const Button = ({ text, onClick }) => {
    return (
        <button 
            onClick={onClick} 
            className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
        >
            {text}
        </button>
    );
};

export default Button;