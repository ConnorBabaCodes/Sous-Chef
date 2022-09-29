import Header from '/src/components/Header'
import Footer from '/src/components/Footer'
import Pages from './pages/Pages'
import ScrollToTop from '/src/components/ScrollToTop'
import {useState} from 'react'




function App() {
const [currentRecipe, setCurrentRecipe] = useState('initial')
const [recipeSearchList, setRecipeSearchList] = useState([])


function chooseRecipe(selection) {
  setCurrentRecipe(selection)
  console.log(selection)
}

function recipeSearch(query) {
  setRecipeSearchList(query)
}

  return (
    <div className="App">
      <ScrollToTop />
      <Header recipeSearch={recipeSearch} recipeSearchList={recipeSearchList}/>
      <Pages chooseRecipe={chooseRecipe} currentRecipe={currentRecipe} recipeSearchList={recipeSearchList}/>
      <Footer />
    </div>
  )
}

export default App
