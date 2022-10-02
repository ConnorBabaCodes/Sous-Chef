import React from 'react'
import L from '/public/Image3.jpg'
import M from '/public/Image3-960.jpg'
import S from '/public/Image3-480.jpg'

export default function Edamam() {
    return (
        <div className="landing-info edamam">
            <div>
            <img src={S} srcSet={`${S} 480w, ${M} 960w, ${L} 1920w`} alt="img" />
            </div>
            <div >
                <div className="landing-text blue" >
            <h1>The Edamam API...</h1>
            <p>Is a food, nutrition, and recipe database API.  The information you see comes directly from that database.  You can check out Edamam's website <a className="edamamAPI" href="https://www.edamam.com/">HERE</a>.
            </p>
            </div>
            </div>
            
        </div>
    )
}
