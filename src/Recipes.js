import React from 'react';
const Recipes= ({title,calories,image,ingredients}) =>{
    return(
        <div className="recipe">
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient=>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>calories {calories}</p>
            <img src={image} alt=""/> 
        </div>
    );
}
export default Recipes;