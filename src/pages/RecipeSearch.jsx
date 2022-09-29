import React from 'react'
import {Link} from 'react-router-dom'

export default function RecipeSearch(props) {


    function changeRecipe(value) {
    
        props.chooseRecipe(value)
    }

    return (
        <div>
            <h1 className="search-text">{props.recipeSearchList.length > 1 ? 'Search Results' : 'no results, try another search'}</h1>
        <div className="recipe-list">
            {props.recipeSearchList.map((item) => {
                const recipe = item.recipe
                return (
                    <div key={item.recipe.uri}>
                <div className="recipe-card">
                <div className="recipe-photo-container" >
                <Link to='/recipe' key={item.recipe.uri} onClick={() => {changeRecipe(recipe)}}>
                    
                    <img  className="recipe-photo" src={item.recipe.image}/>
                   {item.recipe.totalTime !== 0 ? <p className="time">🕒 {item.recipe.totalTime} mins</p> : ""} 
                    <p className="rating">{item.recipe.mealType[0]}</p>
                   
                    </Link>
                </div>


                
                </div>
                <div className="recipe-card-info">
               <h4 className="recipe-label">{item.recipe.label}</h4>
               <div className="recipe-list-cuisine">
               {item.recipe.cuisineType.map(type => 
             <h5 key={type}>{type}</h5>
             ) }
               </div>
               </div>
               </div>
            
                )
            })}
        </div>
        
        </div>
    )
    
}