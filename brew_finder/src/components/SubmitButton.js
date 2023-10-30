import React from 'react';
import '../styles/SubmitButton.css';

const SubmitButton = ({ handleSubmit }) => {
    return (
        <button id="submit" className="submit-button" onClick={handleSubmit}>
            Find Coffee Shops
        </button>
    );
};

export default SubmitButton;