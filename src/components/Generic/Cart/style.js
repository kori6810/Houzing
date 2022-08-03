import styled from "styled-components";
import { ReactComponent as beds } from '../../../assets/icons/beds.svg';
import { ReactComponent as bath } from '../../../assets/icons/bath.svg';
import { ReactComponent as garage } from '../../../assets/icons/car.svg';
import { ReactComponent as area } from '../../../assets/icons/ruler.svg';
import { ReactComponent as heart } from '../../../assets/icons/love 1.svg';
import { ReactComponent as cursor } from '../../../assets/icons/arrow-top-bottom.svg';

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

const Featured = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color:#fff;
  
  padding: 5px 12px;
  gap: 10px;
  position: absolute;
  height: 23px;
  left: 5.26%;
  right: 75.53%;
  top: 4%;
  background: #0061DF;
  border-radius: 3px;
`
const Sale = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color:#fff;
  /* font-weight: bold; */
  padding: 5px 12px;
  gap: 10px;

  position: absolute;
  height: 23px;
  left: 76.05%;
  right: 5.26%;
  top: 4%;
  /* Color / 2 */

  background: #0D263B;
  border-radius: 3px;
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



export {CartWrapper, Img, DataBox, PriceBox, IconWrapper, IconBox, ProImg, ImgWrapper, Featured, Sale}