import React from 'react'
import Hero from '../components/Hero'
import HomeSearch from '../components/HomeSearch'
import Aboutinfo from '../components/Aboutinfo'

export default function Home(props) {
    return (
            <>
            <Hero />
            <Aboutinfo />  
            <HomeSearch currentRecipe={props.currentRecipe} chooseRecipe={props.chooseRecipe}/>
            </>
    )
}