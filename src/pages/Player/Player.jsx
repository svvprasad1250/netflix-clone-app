
import React, { useEffect, useState } from 'react'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import './Player.css'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    const [apiData,setApiData] = useState({
        name:"",
        key:"",
        published_at:"",
        type:""
    });
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjg2ZDgxYzI4ODE4NDQ0ZDk0YjNkYzBjNTA5NjcwYiIsIm5iZiI6MTc1NjUyNTc3MC45MzgsInN1YiI6IjY4YjI3NGNhNWFmZjk5NDdlMzM5NzQ2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.awCQb-nc17SjHP6eH0Xa6GFi4Uwp48OGXlAmu6FzAls'
        }
    };

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        .then(res => res.json())
        .then(res => setApiData(res.results[0]))
        .catch(err => console.error(err));
    },[])

    return (
    <div className='player'>
        <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}} />
        <iframe width="90%" height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} frameborder="0" allowFullScreen></iframe>
        <div className="player-info">
            <p>{apiData.published_at.slice(0,10)}</p>
            <p>{apiData.name}</p>
            <p>{apiData.type}</p>
        </div>
    </div>
    )
}

export default Player
