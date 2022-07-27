import React from 'react'
import Filter from '../Filter/Filter'
import { useQuery } from 'react-query'
import { Cart } from '../Generic/Cart/Cart'
import { useState } from 'react'
import { Container, Txt, Description } from './style'
import { Button } from '../Generic/Buttons/Button'

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
 console.log(Showmore);
 let  data = Showmore? Houses?.slice() : Houses?.slice(0,6)
//  console.log(data);
  return (
    <div>
      <Filter/>
      <Txt>
        Properties
      </Txt>
      <Description className='description center'>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</Description>
      <Container>
        {data?.map(item=>{
          return <Cart info={item} />
        })}
      </Container>
      <Button className='center' width='250px' margin='0 auto' mt='48' mb='50' type='primary' onClick={ShowMore}>Show More</Button>
    </div>
  )
}
