import React from 'react'
import { Container, TextWrapper, Title, Img, Icon } from './style'
import CategImg2 from '../../../assets/categ-img2.png'

export const CategoryCard = () => {
  return (
    <Container>
      <TextWrapper>
        <Icon.Houses/>
        <Title>Houses</Title>
      </TextWrapper>
      
      <Img src={CategImg2} alt='category img'/>
      
    </Container>
  )
}
