import React from 'react';
import './BreakTime.css'

const BreakTime = ({ breakTime, breakHandel }) => {
    return (
        <div className='break-btn'>
            <button onClick={() => breakHandel(breakTime)}>
                {breakTime}s
            </button>
        </div>
    );
};

export default BreakTime;