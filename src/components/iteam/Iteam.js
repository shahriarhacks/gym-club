import React from 'react';
import './Iteam.css'

const Iteam = ({ item, handelClick }) => {
    const { name, time, description, img } = item;
    return (
        <div className='card'>
            <div className="card-conatiner">
                <img src={img} alt="" className="card-img" />
                <div className='card-info'>
                    <h4>{name}</h4>
                    <p>{description}</p>
                    <p><small><strong>Time required: {time}s</strong></small></p>
                </div>
            </div>
            <button onClick={() => handelClick(item)} className="list-btn">Add to list</button>
        </div>
    );
};

export default Iteam;