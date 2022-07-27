import React, { useRef } from 'react'
import { CarouselWrapper, MainCarousel, Icon, Img, ImgWrapper, TextWrapper} from './style'
import Img1 from '../../assets/img1.png'
import Img2 from '../../assets/img2.png'


export const Carusel = () => {
  const slider = useRef();

  return (
    <CarouselWrapper>
      <Icon.Left  onClick={()=>slider.current?.prev()}/>
      <Icon.Right onClick={()=>slider.current?.next()}/>
      <MainCarousel ref={slider}>
        <ImgWrapper >
         <Img src={Img1} alt="img" />
         <TextWrapper>
           <h1>Skyper Pool Apartment</h1>
         </TextWrapper>
        </ImgWrapper>
        <ImgWrapper >
         <Img src={Img2} alt="img" />
         <TextWrapper>
           <h1>Skyper Pool Apartment</h1>
         </TextWrapper>
        </ImgWrapper>
        <ImgWrapper >
         <Img src={Img1} alt="img" />
         <TextWrapper>
           <h1>Skyper Pool Apartment</h1>
         </TextWrapper>
        </ImgWrapper>
        
      </MainCarousel>
    </CarouselWrapper>
     
  )
}
