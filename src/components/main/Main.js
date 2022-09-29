import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { addToDb, getListCart } from '../../utilities/localdb';
import Iteam from '../iteam/Iteam';
import List from '../list/List';
import './Main.css'
const Main = () => {
    const [items, setItems] = useState([]);
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    useEffect(() => {
        const listedCart = getListCart();
        const savedList = [];
        for (const id in listedCart) {
            const addedItem = items.find(pd => pd.id === id)
            if (addedItem) {
                const quantity = listedCart[id]
                addedItem.quantity = quantity;
                savedList.push(addedItem)
            }
            setList(savedList)
        }
    }, [items])
    const handelClick = (item) => {
        let newList = [];
        const exist = list.find(p => p.id === item.id)
        if (!exist) {
            item.quantity = 1;
            newList = [...list, item]
        }
        else {
            const rest = list.filter(p => p.id !== item.id)
            exist.quantity = exist.quantity + 1;
            newList = [...rest, exist]
        }
        // const newList = [...list, item]
        setList(newList)
        addToDb(item.id)
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