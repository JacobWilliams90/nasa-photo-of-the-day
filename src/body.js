import React, { useState, useEffect } from 'react';
import { getNasaImg } from './nasapic'

const Body = () => {
    const [img, setImg] = useState();
    const [date, setDate] = useState();
    const [des, setDes] = useState();

    useEffect(() =>{
        getNasaImg(setImg, setDate, setDes);
    },[]);

    
    return (
        <div className='body'>
            <h2>{date}</h2>
            <p>{des}</p>
            <div className='pic'>
                <img src={img} />
            </div>
        </div>
    )
}

export default Body;