import React from 'react';
import { useState } from 'react';
import BreakTime from '../breakTime/BreakTime';
import './List.css'
const List = ({ list }) => {
    const [bTime, setBTime] = useState([]);
    let time = 0;
    for (const singleList of list) {
        time = time + singleList.time;
    }
    const breakTimes = [10, 20, 30, 40]
    const breakHandel = (breakTime) => {
        setBTime(breakTime)
    }

    return (
        <div className='cart-list'>
            <div className="auth-info">
                <h3>SHAHRIAR AHMED</h3>
                <p><small>From: Rangpur, Bangladesh</small></p>
            </div>
            <div className="identify">
                <div className="single-idenity">
                    <h3>55<small>kg</small></h3>
                    <h4>Weight</h4>
                </div>
                <div className="single-idenity">
                    <h3>5.10</h3>
                    <h4>Height</h4>
                </div>
                <div className="single-idenity">
                    <h3>19<small>yrs</small></h3>
                    <h4>Age</h4>
                </div>
            </div>
            <div>
                <h3>Add a Break</h3>
                <div className='flex'>
                    {
                        breakTimes.map(bTime => <BreakTime breakTime={bTime} breakHandel={breakHandel}></BreakTime>)
                    }
                </div>
            </div>
            <div className='exercise-info'>
                <h3>Exercise Details</h3>
                <div className='flex'>
                    <h4>Exercise Time</h4>
                    <h4>{time} seconds</h4>
                </div>
                <div className='flex'>
                    <h4>Break Time</h4>
                    <h4>{bTime + 0} seconds</h4>
                </div>
                <button className="btn-completed">Activity Completed</button>
            </div>
        </div>
    );
};

export default List;