import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Search from "/src/components/svgs/Search";

export default function Header(props) {
  const AppID = "a1789723";
  const AppKey = "06d6e27e9a8a5753fd4aa80adfe82e1a";
  

  const navigate = useNavigate();
  const navigateToRecipeSearch = () => {
    navigate("/recipesearch");
  };

  React.useEffect(() => {
    recipeSearch();
  }, []);

  const recipeSearch = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${searchQuery.searchValue}&app_id=${AppID}&app_key=${AppKey}&random=true`
    );
    const data = await response.json();
    props.recipeSearch(data.hits);
    console.log(props.recipeSearchList);
  };

  function submit(e) {
    e.preventDefault();
    recipeSearch();
  }

  const [searchQuery, setSearchQuery] = React.useState({ searchValue: "" });

  function handleChange(event) {
    setSearchQuery((prevSearchQuery) => {
      return {
        prevSearchQuery,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <header>
      <Link className="home-button" to="/Sous-Chef">
        <img className="header-img" src="logo.png" />
        <h1>Home</h1>
      </Link>

      <nav>
        <form onSubmit={submit}>
          <input
            type="text"
            placeholder="Search for Recipes"
            onChange={handleChange}
            name="searchValue"
            value={searchQuery.searchValue}
          />

          <button
            className="search-button"
            type="submit"
            onClick={navigateToRecipeSearch}
          >
            <Search />
          </button>
        </form>
      </nav>
    </header>
  );
}
