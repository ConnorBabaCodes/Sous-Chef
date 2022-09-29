import React from 'react'
import Whatis from '/src/components/Whatis'
import About from '/src/components/About'
import Edamam from '/src/components/Edamam'

export default function Aboutinfo() {
    return (
        <div id="about"className="home-info">
            <About />
            <Edamam />
            <Whatis />
        </div>
    )
}