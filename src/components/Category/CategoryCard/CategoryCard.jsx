import React from 'react'
import { Container, TextWrapper, Title, Img, Icon } from './style'
import CategImg2 from '../../../assets/images/uy-1.png'

export const CategoryCard = ({info}) => {
  return (
    <Container>
      <TextWrapper>
        <Icon.Houses/>
        <Title>{info.name || 'Home'}</Title>
      </TextWrapper>
      
      <Img src={CategImg2} alt='category img'/>
      
    </Container>
  )
}
