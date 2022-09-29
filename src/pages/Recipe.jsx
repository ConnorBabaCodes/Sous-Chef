import React from 'react'
import Popular from '/src/components/svgs/Popular'
import Clock from '/src/components/svgs/Clock'
import Serving from '/src/components/svgs/Serving'
import Rating from '/src/components/svgs/Rating'


export default function Recipe(props) {

function test() {
    console.log(props.currentRecipe)
}

const calories = Math.floor(props.currentRecipe.calories/props.currentRecipe.yield)

const rating = (Math.floor(Math.random()*10))

    return (
        <>
        
        <h1 className="recipe-title">{props.currentRecipe.label}</h1>
        <p className="recipe-source">from {props.currentRecipe.source}</p>
        <div className="recipe-cuisine-container">
            {props.currentRecipe.cuisineType.map(type => 
             <p className="recipe-cuisine">{type}</p>
             ) }
        </div>
        <div className="recipe-overview">
        <img className="recipe-image" src={props.currentRecipe.image} />
        <div className="recipe-widget-container">
            <div className="recipe-widget">
            <Clock />
            <h5>Time</h5>
            <p>{props.currentRecipe.totalTime ? <p>{props.currentRecipe.totalTime}</p> : "?"}</p>
            </div>
            <div className="recipe-widget">
                <Popular />
                <h5>{Math.floor(calories)}</h5>
                <p>Cal</p>
                </div>
            <div className="recipe-widget">
                <Serving />
                <h5>{props.currentRecipe.yield}</h5>
                <p>Servings</p> 
                </div>
            <div className="recipe-widget">
                <Rating />
                <h5>4.{rating}</h5>
                <p>Rating</p>
                </div>
        </div>
        </div>
        <div className="recipe-main">
            <div className="ingredient-box">
            <h2>Ingredients</h2>
            <ul>
                {props.currentRecipe.ingredientLines.map(ingredient =>
                    <li>{ingredient}</li>
                    )}
            </ul>
            </div>
            <div className="diet-box">
                <h2>Dietary Info</h2>
                <ul>
                {props.currentRecipe.healthLabels.map(info => <li>{info}</li>)}
                </ul>
            </div>
            <div className="direction-box">
                <h2>Directions</h2>
                <p>
                    Interested in this recipe? Check out the full directions at: <a href={`${props.currentRecipe.url}`} target="_blank">{props.currentRecipe.source}</a>
                </p>
            </div>
            
        </div>
        </>
        
    )
}