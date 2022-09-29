import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import Recipe from './Recipe'
import RecipeSearch from './RecipeSearch'

export default function Pages(props) {

    return (
        <main>
            <Routes>
       <Route exact path="/" element={<Home chooseRecipe={props.chooseRecipe} currentRecipe={props.currentRecipe}/>}/>
       <Route exact path="/recipe" element={<Recipe chooseRecipe={props.chooseRecipe} currentRecipe={props.currentRecipe}/>}/>
       <Route exact path="/recipesearch" element={<RecipeSearch recipeSearchList={props.recipeSearchList} chooseRecipe={props.chooseRecipe} />} />
       </Routes>
        </main>
    )
}