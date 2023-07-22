import {FaPizzaSlice, FaHamburger,FaHome} from 'react-icons/fa' 
import {GiNoodles, GiChopsticks} from 'react-icons/gi'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

function Category() {
    return(
        <Link>
            <NavLink to={'/cuisine/Italian'}>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </NavLink>
            <NavLink to={'/cuisine/American'}>
                <FaHamburger />
                <h4>American</h4>
            </NavLink>
            <NavLink>
                <GiNoodles to={'/cuisine/Thai'}/>
                <h4>Thai</h4>
            </NavLink>
            <NavLink>
                <GiChopsticks to={'/cuisine/Chineese'}/>
                <h4>Chineese</h4>
            </NavLink>
        </Link>
    )
}

const Link = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`

export default Category