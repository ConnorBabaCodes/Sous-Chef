import React from 'react'
import L from '/public/Image1.jpg'
import M from '/public/Image1-960.jpg'
import S from '/public/Image1-480.jpg'

export default function About() {
    return (
        <div className="landing-info">
            <div>
                <div className="landing-text yellow">
        <h1>What is Sous-Chef?</h1>
        <p>Sous-Chef is a Web App made in React with the Edamam API. 
            Sous-Chef will show you recipes from all over the internet.
            The best part is that Sous-Chef is not going to tell you it's whole lifestory before getting to the actual details of the food.</p>
            </div>
            </div>

            <div>
                <img src={S} srcSet={`${S} 480w, ${M} 960w, ${L} 1920w`} alt="img" />
            </div>
        </div>
    )
}