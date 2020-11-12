
import './App.css';
import Recipes from './Recipes';
import React,{useEffect, useState } from "react";
function App() { 
  const [recipes,setRecipes]=useState([]);
  const [search,setSearch]=useState("");
  const [query,setQuery]=useState('chees');
  useEffect(()=>{
    getRecipes()
  },[query]); 
  
  const getRecipes=()=>{
    fetch(`https://edamam-recipe-search.p.rapidapi.com/search?q={${query}}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "",
        "x-rapidapi-host": ""
      }
     })
     .then(function(res){
       return res.json(); 
     })
     .then(function(data){ 
       setRecipes(data.hits); 
       console.log(data.hits);
     })
     .catch(err => {
      console.error(err);
     });
  }
  const updateSearch= e =>{
    setSearch(e.target.value);
    
  } 
  const getSearch= e =>{
    e.preventDefault();
    setQuery(search);
    setSearch(``);
  }
  return ( 
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">
          search
          </button>
         
      </form>  
      <div className="c-center"> 
      {recipes.map(recipe=>(
          <Recipes key={recipe.recipe.label}
          title={recipe.recipe.label}
          ingredients={recipe.recipe.ingredients}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image} /> 
        ))}
      </div>

    </div>
  );
}

export default App;
