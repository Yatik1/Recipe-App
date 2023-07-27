import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components'


function Recipe() {
  
   const [details, setDetails] = useState({}) 
   const [active , setActive] = useState('instructions')
   let params = useParams()

   const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=e574895da5144fcab0c286277b789698`)
    const detailData = await data.json(); 
    setDetails(detailData); 
   }  

   useEffect(() => {
    fetchDetails()
   },[params.name]);

  return (
    <DetailWrapper>
       <div>
         <h2>{details.title}</h2>
         <img src={details.image} alt="" />
       </div>

       <Info>
          <Button className={active === 'instructions' ? 'active' : ''} onClick={() => setActive('instructions')}>Instructions</Button>
          <Button className={active === 'ingredients' ? 'active' : ''} onClick={() => setActive('ingredients')}>Ingredients</Button>

           {active === "instructions" && (
                      <div>
                      <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
                      <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
                   </div>
           )}

           {active === "ingredients" && (
             <ul>
                {details.extendedIngredients.map((ingredient) => (
                    <li key={ingredient.id}>{ingredient.original}</li>
                ))}
             </ul>
           )}
       </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
  margin-top: 6rem;
  margin-bottom: 3rem;
  display: flex;

   .active{
     background: linear-gradient(35deg, #494949 , #313131);
     color: white;
   }
   h2{
     margin-bottom: 1.3rem;
   }
   h3{
    font-weight: 200;
    font-size: 20px;
   }
   li{
    font-size: 1rem;
    line-height: 2rem;
   }
   ul{
     margin-top: 1.8rem;
   }
`;

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid balck;
    margin-right: 2rem;
    font-weight: 600;
    cursor: pointer;
    &:hover{
        background: linear-gradient(35deg, #494949 , #313131);
     color: white; 
     }
`;

const Info = styled.div`
  margin-left: 10rem;
`

export default Recipe
