import React from 'react'
import styled from 'styled-components'
import Pages from './pages/Pages';
import Category from './components/Category';
import { BrowserRouter } from 'react-router-dom';
import Search from './components/Search';
import { Link } from 'react-router-dom';
import {GiMeal} from 'react-icons/gi'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>

        <Nav>
          <GiMeal />
          <Logo to={"/"}>
             DelicMeals
          </Logo>
        </Nav>

        <Search />
        <Category />
        <Pages />
        </BrowserRouter>
    </div>
  )
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight :400;
  font-family: "Lobster Two", cursive;
`;
const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: start;
  align-items: center;
   svg{
    font-size: 2rem;
   }
`

export default App
