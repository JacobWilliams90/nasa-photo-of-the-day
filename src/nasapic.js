import axios from 'axios';

export function getNasaImg(pic,date,des){
    axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo`)
        .then(res => {
            pic(res.data.hdurl); 
            date(res.data.date);
            des(res.data.explanation);
        })
        .catch(err => console.log(err))
}
