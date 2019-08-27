import React, { useState, useEffect } from 'react';
import { getNasaImg } from './nasapic'

const Body = () => {
    const [img, setImg] = useState();
    
    useEffect(() =>{
        getNasaImg(setImg);
    },[]);

    return (
        <div className='pic'>
            <img src={img} alt='Pic of the day' />
        </div>
    )
}

export default Body;