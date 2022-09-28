import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Iteam from '../iteam/Iteam';
import List from '../list/List';
import './Main.css'
const Main = () => {
    const [items, setItems] = useState([]);
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    const handelClick = (item) => {
        const newList = [...list, item]
        setList(newList)
    }
    return (
        <div className='main-section'>
            <div className="all-items">
                <h3>Select today’s exercise</h3>
                <div className="cards">
                    {
                        items.map(item => <Iteam key={item.id} handelClick={handelClick} item={item}></Iteam>)
                    }
                </div>
            </div>
            <div className="items-cart">
                <List list={list}></List>
            </div>
        </div>
    );
};

export default Main;