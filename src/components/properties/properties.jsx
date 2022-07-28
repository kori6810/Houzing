import React from 'react'
import Filter from '../Filter/Filter'
import { useQuery } from 'react-query'
import { Cart } from '../Generic/Cart/Cart'
import { useState } from 'react'
import { Container, Txt, Description, ResultBox, SortWrapper, Result } from './style'
import { Button } from '../Generic/Buttons/Button'
import { useNavigate } from 'react-router-dom'

export const Properties = () => {
  const [Houses, setHouses] = useState()
  const [Showmore, setShowmore] = useState()
 useQuery('property',()=>{
  return fetch('https://houzing-app.herokuapp.com/api/v1/houses/list').then((res)=>res.json())
 },{
  onSuccess:(res)=>{
    setHouses(res?.data)
  }
 })
 const ShowMore = (()=>{
  setShowmore(true)

 })
 const logg = ()=>{
  console.log('clicked');
}
//  console.log(Houses.length);
 let  data = Showmore? Houses?.slice() : Houses?.slice(0,6)
//  console.log(data);
  const navigate = useNavigate()
  return (
    <div>
      <Filter/>
      <Txt>
        Properties
      </Txt>
      <Description className='description center'>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</Description>
      <ResultBox>
        <Result>
          <p>{Houses?.length || 0}</p>
          results
        </Result>

        <SortWrapper>
        <label for="sort">Sort by:</label> 
        <select name="sort" >
          <option value="volvo">Newest Listings</option>
          <option value="saab">Houses</option>
          <option value="mercedes">Flat</option>
          <option value="audi">Apartment</option>
        </select> 
        </SortWrapper>
      </ResultBox>
      <Container>
        {data?.map(item=>{
          return <Cart info={item} onClick={logg()}/>
        })}
      </Container>
      <Button className='center' width='250px' margin='0 auto' mt='48' mb='50' type='primary' onClick={ShowMore}>Show More</Button>
    </div>
  )
}
