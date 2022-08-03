import React from 'react'
import { CategoryCard } from './CategoryCard/CategoryCard'
import { Container, Title, TitleWrapper, Icon } from './style'
import { useRef } from 'react';

import AliceCarousel from 'react-alice-carousel';
import { useQuery } from 'react-query';
import { useState } from 'react';




export const Category = () => {

  const handleDragStart = (e) => e.preventDefault();
  const [CategList, setCateList]=useState()
  useQuery('Categ',()=>{
    return fetch('https://houzing-app.herokuapp.com/api/v1/categories/list').then((res)=>res.json())
  },{
    onSuccess:(res)=>{
      const data = res?.data?.map((item)=>{ 
        // console.log(item);
        
        return <CategoryCard info={item}/>
      })
      setCateList(data)
    },
  })
  const items = [

    <CategoryCard onDragStart={handleDragStart}/>,
    <CategoryCard onDragStart={handleDragStart}/>,
    <CategoryCard onDragStart={handleDragStart}/>,
    <CategoryCard onDragStart={handleDragStart}/>,
    <CategoryCard onDragStart={handleDragStart}/>,
  ];
  const slider = useRef();
 
  return (
  <Container>
      {/* <Icon.Left  onClick={()=>slider.current?.prev()}/>
      <Icon.Right onClick={()=>slider.current?.next()}/> */}
    <TitleWrapper>
      <Title>Category</Title>
      <h3 className="description">
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </h3>
    </TitleWrapper>
    <AliceCarousel    ref={slider} mouseTracking items={CategList} 
    responsive={
      {
        0: {
            items: 1,
        },
        1000: {
          items: 4
        }, 1480:{
          items:4
        }
      }
    }
    />
  );

  </Container>
  )
}
 