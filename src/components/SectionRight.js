import React from 'react';
import friend1 from '../images/friend1.jpg';
import friend2 from '../images/friend2.jpg';
import friend3 from '../images/friend3.jpg';
import friend4 from '../images/friend4.jpg';
import friend5 from '../images/friend5.jpg';
import friend6 from '../images/friend6.jpg';
import friend7 from '../images/friend7.jpg';
import friend8 from '../images/friend8.jpg';
import friend9 from '../images/friend9.jpg';

const friends = [friend1,friend2,friend3,friend4,friend5,friend6,friend7,friend8,friend9,];

const SectionRight = () => {
    return (
        <div className="section__friends float-end w-50 row border mx-1 mt-1">
            <h2 className="col-12 text-center">Dream Team</h2>
            {friends.map(friend => <img src={friend} className="col-4 p-1" alt="friend"/>)}
        </div>
    );
};

export default SectionRight;