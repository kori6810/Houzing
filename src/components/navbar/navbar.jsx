import React from 'react'
import { 
  Wrapper,
  Container, 
  NavbarWrapper,
  NavbarBody,
  Link,
  Logo,
} from './style'
import {Outlet, useNavigate } from 'react-router-dom'
import { navbar } from '../../utils/navbar'
import { Button } from '../Generic/Buttons/Button'

export const Navbar = () => {
  const navigate = useNavigate()
  return (
    <Wrapper>
      <Container>
        <NavbarWrapper>
          <Logo onClick={()=> navigate('/home')}>
            <Logo.Icon/>
            <Logo.Title>Houzing</Logo.Title>

          </Logo>
          <NavbarBody>
            {
              navbar.map(({title,id,path,hidden})=>{
                return(
                  <Link key={id} to={path}>
                    {title}
                  </Link>
                )
                
              })
            }
          </NavbarBody>
          <Button width={'120px'}>Log Out</Button>
        </NavbarWrapper>
      </Container>
      <Outlet/>
    </Wrapper>
   
    
  )
}
