import React, { useState } from 'react'
import { Container } from './style'
import Filter from '../Filter/Filter'
import { Carusel } from '../Carusel/Carusel';
import { Recommended } from '../Recommended/Recommended';
import { Category } from '../Category/Category';

export const Home = () => {
  const [count, setCount] = useState(0);
  // console.log('Home');
  return (
    <Container className='nocopy'>
      <Filter/>
      <Carusel/>
      <Recommended/>
      <Category/>
    </Container>
  )
}
