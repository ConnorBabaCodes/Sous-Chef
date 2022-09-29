import React from 'react'
import Image3 from '/public/image3.jpg'

export default function Edamam() {
    return (
        <div className="landing-info edamam">
            <div>
                <img src={Image3} />
            </div>
            <div >
                <div className="landing-text blue" >
            <h1>The Edamam API...</h1>
            <p>Is a food, nutrition, and recipe database API.  The information you see comes directly from that database.  You can check out Edamam's website <a class="edamamAPI" href="https://www.edamam.com/">HERE</a>.
            </p>
            </div>
            </div>
            
        </div>
    )
}
