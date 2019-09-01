import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { getNasaImg } from './nasapic'
import { StyledImg } from './StyledImg'
import { StyledBody } from './StyledBody'

const Body = (prop) => {
    // const [title, setTitle] = useState();
    // const [img, setImg] = useState();
    // const [date, setDate] = useState();
    // const [des, setDes] = useState();
    const [data, setData] = useState();
    // useEffect(() =>{
    //     getNasaImg(setTitle,setImg, setDate, setDes);
    // },[]);

    useEffect(() => {
        function getNasaImg(title,pic,date,des){
            axios
                .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
                .then(res => {
                    setData(res.data);
                    // title(res.data.title);
                    // pic(res.data.hdurl); 
                    // date(res.data.date);
                    // des(res.data.explanation);
                })
                .catch(err => console.log(err))
        }
        getNasaImg()
    },[])

    if (!data) return <h3>Loading...</h3>;

    return (
        <StyledBody>
            <h2>{data.title}</h2>
            <h4>{data.date}</h4>
            <p>{data.explanation}</p>
            <StyledImg src={data.hdurl} />
        </StyledBody>
    )
}

export default Body;