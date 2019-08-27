import React, { useState, useEffect } from 'react';
import { getNasaImg } from './nasapic'

const Body = () => {
    const [img, setImg] = useState();
    const [date, setDate] = useState();
    const [des, setDes] = useState();

    useEffect(() =>{
        getNasaImg(setImg, setDate, setDes);
    },[]);

    if (!img) return <h3>Loading...</h3>;

    return (
        <div className='body'>
            <h2>{date}</h2>
            <p>{des}</p>
            <div className='pic'>
                <img src={img} alt='NASA Potd'/>
            </div>
        </div>
    )
}

export default Body;