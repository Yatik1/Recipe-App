import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

function Popular() {
  
  const [popular,setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  },[]);

  const getPopular = async () => {
    const api = await fetch ( 
      `https://api.spoonacular.com/recipes/random?apiKey=e574895da5144fcab0c286277b789698&number=9`
      );
    const data = await api.json();
    console.log(data)
    setPopular(data.recipes)
  }

  return (
    <Wrapper>
          <h3>Popular Recipes</h3>
          {popular.map((recipe) => {
            return (
             <Card>
              <p>{recipe.title}</p>
              <img src={recipe.image} alt='' />
             </Card>
            )
          })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
   min-height:25rem;
   border-radius: 2rem;
`;

export default Popular
