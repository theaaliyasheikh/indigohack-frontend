import React from 'react';

const crew = () => {
    return (
        <div className='container'>
            <h1>Update Minors Travelling Status</h1>
                <ul>
                    <li><input type='checkbox' name='crewStatus' />Seat</li>
                    <li><input type='checkbox' name='crewStatus' />Meal</li>
                    <li><input type='checkbox' name='crewStatus' />Journey</li>
                </ul>
        </div>
    );
};

export default crew;