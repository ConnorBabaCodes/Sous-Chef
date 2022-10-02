import React from 'react'
import Image2 from '/Image2.jpg'

export default function Whatis() {
    return (
        <div className="landing-info">
            
            <div>
                <div className="landing-text yellow">
            <h1>But What is a sous chef?</h1>
            <p>A sous chef (pronounced "soo-shef")is a shortening of the French term "sous-chef de Cuisine" meaning "under-chief of the kitchen".
                Essentially, a sous chef is the second in command of the kitchen.
            </p>
            </div>
            </div>
            <div>
                <img src={Image2} alt="img" />
            </div>
        </div>
    )
}