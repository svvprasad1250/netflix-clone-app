import React, { useEffect, useRef, useState } from 'react'

import './TitleCards.css'
import { Link } from 'react-router-dom';


const TitleCards = ({title,category}) => {
    const [apiData,setApiData] = useState([]);
    const cardsRef = useRef();
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjg2ZDgxYzI4ODE4NDQ0ZDk0YjNkYzBjNTA5NjcwYiIsIm5iZiI6MTc1NjUyNTc3MC45MzgsInN1YiI6IjY4YjI3NGNhNWFmZjk5NDdlMzM5NzQ2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.awCQb-nc17SjHP6eH0Xa6GFi4Uwp48OGXlAmu6FzAls'
        }
    };

    const handleWheel = (event)=>{
        event.preventDefault();
        cardsRef.current.scrollLeft+=event.deltaY
    }
    useEffect(()=>{
        cardsRef.current.addEventListener('wheel',handleWheel);
        fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
        .then(res => res.json())
        .then(res => setApiData(res.results))
        .catch(err => console.error(err));
    },[])

    return (
        <div className='title-cards'>
            <h2>{title?title:"Popular on Netflix"}</h2>
            <div className="card_list" ref={cardsRef}>
                {apiData.map((card,index)=>{
                    return <Link to={`/player/${card.id}`} className="card" key={index}>
                            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
                            <p>{card.original_title}</p>
                        </Link>
                })}
            </div>
        </div>
    )
}

export default TitleCards
