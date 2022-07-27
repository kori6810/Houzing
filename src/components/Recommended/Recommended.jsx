import React, { useState } from 'react';
import Home1 from '../../assets/home1.png'
import Prof1 from '../../assets/user-image-1.jpg'
import {useQuery} from 'react-query'
import AliceCarousel from 'react-alice-carousel';
import { Cart } from '../Generic/Cart/Cart';
import { Container, Wrapper } from './style';


export const Recommended = () => {
  
  const [HomeList, setHomeList] = useState()
  const handleDragStart = (e) => e.preventDefault();

  useQuery('',()=>{
   return fetch('https://houzing-app.herokuapp.com/api/v1/houses/list').then((res)=>res.json())
  },{
  onSuccess:(res)=>{
    const data = res?.data?.map((item)=>{ 
      // console.log(item);
      return <Cart info={item}/>
    })
    setHomeList(data)

  }
  })
  // const items = [
  //   <Cart/>,
  //   <Cart/>,
  //   <Cart/>,
  //   <Cart/>,
  //   <Cart/>
  // ] 

  return(
    <Container >
      <h1>Recommended</h1>
      <h2 style={{marginBottom:'32px'}}className='description center'>
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.  
      </h2>
      <Wrapper>
        <AliceCarousel className='center' mouseTracking  items={HomeList} 
        responsive={
          {
            0: {
                items: 1,
            },
            1000: {
              items: 3
            }, 1480:{
              items:4
            }
          }
        }/>

      </Wrapper>
    </Container>
  )
}
