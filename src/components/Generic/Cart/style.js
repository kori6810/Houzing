import styled from "styled-components";
import { ReactComponent as beds } from '../../../assets/icons/bed-image.svg';
import { ReactComponent as bath } from '../../../assets/icons/bath-image.svg';
import { ReactComponent as garage } from '../../../assets/icons/car-image.svg';
import { ReactComponent as area } from '../../../assets/icons/area.svg';
import { ReactComponent as heart } from '../../../assets/icons/heart-image.svg';
import { ReactComponent as cursor } from '../../../assets/icons/cursor.svg';

const CartWrapper = styled.div`
  width: 380px;
  height: 400px;
  border: 1px solid #E6E9EC;
  border-radius: 4px;
  overflow: hidden;
  z-index: 3;
  position: relative;
  transition: all 0.2s;
  &:hover{
     
    box-shadow: 0 3px 3px 3px rgba(0,0,0,0.1);
  }
`
const ImgWrapper = styled.div`
  height: 200px;
  width: 100%;
  margin-bottom: 25px;


`
const Img = styled.img`
  width:100%;
  height: 100%;
  object-fit: cover;
 
`
const ProImg = styled.img`
  position: absolute;
  top:48%;
  left: 80%;
  border-radius:50%;
  
`
const DataBox = styled.div`
 padding: 0 20px ;
 border-bottom: 1px solid #E6E9EC;
 h2{
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 24px;
   color: #0D263B;
 }
 
  text-transform: capitalize;
`
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const IconBox = styled.div`
  text-align: center;
`
IconBox.Bed = styled(beds)``
IconBox.Bath = styled(bath)``
IconBox.Garage = styled(garage)``
IconBox.Area = styled(area)``
IconBox.Heart = styled(heart)``
IconBox.Cursor = styled(cursor)`
  margin-right:20px;
`

const PriceBox = styled.div`
display: flex;
padding: 8px 20px;
justify-content: space-between;
align-items: center;

  h3{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
  }
  h4{
    text-decoration: line-through;
  }
`



export {CartWrapper, Img, DataBox, PriceBox, IconWrapper, IconBox, ProImg, ImgWrapper}