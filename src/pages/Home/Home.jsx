import React from 'react'

import './Home.css'
import hero_banner from '../../assets/hero_banner1.jpg'
import hero_title from '../../assets/hero_title1.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import Navbar from '../../components/Navbar/Navbar'
import TitleCards from '../../components/Titlecards/TitleCards'
import Footer from '../../components/Footer/Footer'
const Home = () => {
    return (
        <div className='Home'>
            <Navbar/>
            <div className="hero">
                <img src={hero_banner} alt="" className='banner_img' />
                <div className="hero_caption">
                    <img src={hero_title} alt="" className='caption_img' />
                    <p>The perfect plan requires an imperfect team.
                        Because the flaw isn't in the strategy, but in the human heart. And
                        that is the greatest variable of all.
                    </p>
                    <div className="hero_btns">
                        <button className='btn'><img src={play_icon} alt="" />Play</button>
                        <button className='btn dark-btn'><img src={info_icon} alt="" />More info</button>
                    </div>
                    <TitleCards/>
                </div>
            </div>
            <div className="more-cards">
                <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
                <TitleCards title={"Only On Netflix"} category={"popular"}/>
                <TitleCards title={"Upcoming"} category={"upcoming"}/>
                <TitleCards title={"Top pics for you"} category={"now_playing"}/>
            </div>
            <Footer/>
        </div>
    )
}

export default Home
