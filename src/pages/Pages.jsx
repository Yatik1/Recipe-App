import Cuisine from "./Cuisine"
import Home from "./Home"
import Searched from "./Searched"
import Recipe from './Recipe'
import { Route,Routes } from "react-router-dom"

function Pages() {
  return (
  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/searched/:search" element={<Searched />} />  
      <Route path="/recipe/:name" element={<Recipe />} />  
    </Routes>
  
  )
}

export default Pages
