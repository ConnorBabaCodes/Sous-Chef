import React from 'react'
import Image1 from '/image1.jpg'

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
                <img src={Image1} />
            </div>
        </div>
    )
}