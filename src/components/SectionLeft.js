import React from 'react';
import luke from '../images/main.jpg';

const SectionLeft = () => {
    return (
        <div className="section float-start w-25 me-3">
            <img src={luke} className="w-100" alt="hero"/>
        </div>
    );
};

export default SectionLeft;