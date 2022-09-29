import React from 'react'
import RecipeList from '/src/components/RecipeList'
import GenreButtons from '/src/components/GenreButtons'


export default function HomeSearch(props) {
    const [genre, setGenre] = React.useState('American')

   
    function test() {
        console.log(props.currentRecipe)
    }

    return (
        <section className="home-search">
            <h1>Select a Cuisine</h1>
            <GenreButtons selectGenre={genre => setGenre(genre)}/>
            <RecipeList genre={genre} currentRecipe={props.currentRecipe} chooseRecipe={props.chooseRecipe}/>
        </section>
    )
}