import axios from 'axios';

export function getNasaImg(setter){
    axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo`)
        .then(res => setter(res.data.hdurl))
        .catch(err => console.log(err))
}