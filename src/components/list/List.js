import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import BreakTime from '../breakTime/BreakTime';
import './List.css'
const List = ({ list }) => {
    const [ucTime, setTime] = useState([]);
    let time = 0;
    let quantity = 0;
    for (const singleList of list) {
        time = time + singleList.time * singleList.quantity;
        quantity = quantity + singleList.quantity;
    }
    const breakTimes = [10, 20, 30, 40]
    const breakHandel = (breakTime) => {
        localStorage.setItem("breakTime", JSON.stringify(breakTime))

        setTime(breakTime)
    }
    let breakTimeC = '';
    const getBreak = localStorage.getItem('breakTime')
    if (getBreak) {
        breakTimeC = JSON.parse(getBreak);
    }
    const completed = () => toast("Hurray! You completed the season")

    return (
        <div className='cart-list'>
            <div className="auth-info">
                <h4>Shahriar Nushrat Jahan</h4>
                <p><small>From: Chandpur, Bangladesh</small></p>
            </div>
            <div className="identify">
                <div className="single-idenity">
                    <h3>60<small>kg</small></h3>
                    <h4>Weight</h4>
                </div>
                <div className="single-idenity">
                    <h3>5.01</h3>
                    <h4>Height</h4>
                </div>
                <div className="single-idenity">
                    <h3>18<small>yrs</small></h3>
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
                    <h4>{breakTimeC + 0} seconds</h4>
                </div>
                <button onClick={completed} className="btn-completed">Activity Completed</button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default List;