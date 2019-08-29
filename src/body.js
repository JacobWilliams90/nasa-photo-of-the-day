import React, { useState, useEffect } from 'react';
import { getNasaImg } from './nasapic'
import { StyledImg } from './StyledImg'
import { StyledBody } from './StyledBody'

const Body = () => {
    const [img, setImg] = useState();
    const [date, setDate] = useState();
    const [des, setDes] = useState();

    useEffect(() =>{
        getNasaImg(setImg, setDate, setDes);
    },[]);

    if (!img) return <h3>Loading...</h3>;

    return (
        <StyledBody>
            <h2>{date}</h2>
            <p>{des}</p>
            <StyledImg src={img} />
        </StyledBody>
    )
}

export default Body;