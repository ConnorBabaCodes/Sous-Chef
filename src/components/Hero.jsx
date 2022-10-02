import React from 'react'
import HeroImage from '/Hero.jpg'

export default function Hero() {
    return (
        <div>
            <img className="hero-img" src={HeroImage} alt="hero image"/>
        </div>
    )
}