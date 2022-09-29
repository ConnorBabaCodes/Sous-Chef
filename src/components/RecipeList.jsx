import React from 'react'
import {Link} from 'react-router-dom'

export default function RecipeList(props) {

    const [recipeList, setRecipeList] = React.useState([])
    const AppID = 'a1789723'
const AppKey = '06d6e27e9a8a5753fd4aa80adfe82e1a' 
const IhateAPIs = `https://api.edamam.com/api/recipes/v2?type=public&q=${props.genre}&app_id=${AppID}&app_key=${AppKey}`



   React.useEffect(() => {
        getRecipes();
    }, [props.genre]);
    
    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${props.genre}&app_id=${AppID}&app_key=${AppKey}&random=true`)
        const data = await response.json()
        setRecipeList(data.hits)
       
        
        
    }

    



function testing() {
    console.log(recipeList[0])
}

function changeRecipe(value) {
    
    props.chooseRecipe(value)
}


    return (
        <div id="recipes">
            <h3>Search Results for {props.genre}</h3>
   <div className="recipe-list">
             {recipeList.map((item) => {
                const recipe = item.recipe
                return(
                    <div key={item.recipe.uri}>
                <div className="recipe-card">
                <div className="recipe-photo-container" >
                    
                <Link to='/recipe' key={item.recipe.uri} onClick={() => {changeRecipe(recipe)}}>
                    
                    <img  className="recipe-photo" src={item.recipe.image} />
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
            <div className="recipe-button-div">
            <a href="#recipes">
                <button  className="more-hits" onClick={getRecipes}>More Hits</button>
            </a>
            </div>
            </div>
)









     /*   <div className="recipe-list">
           <button onClick={testing}>testing</button>
        <button onClick={() => {changeRecipe({...recipeList})}}>Choose Recipe</button>
                <div className="recipe-card">
                    <p>{recipeList[0].recipe.label}</p>
                <div className="recipe-photo-container" >
                <Link to='/recipe' onClick={() => {changeRecipe('eggplant')}}>
                    
                    <img  className="recipe-photo" src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/113777-0b21d44.jpg"/>
                    <p className="time">🕒 15 mins</p>
                    <p className="rating"> ★ 4.5</p>
                   
                    </Link>
                </div>


                
                </div>

               
            </div>

            */
    
}