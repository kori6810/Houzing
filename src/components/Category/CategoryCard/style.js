import styled from "styled-components";
import {ReactComponent as Houses} from '../../../assets/icons/categ-houses.svg'

const Container = styled.div`
  margin: 0 auto;
  width: 280px;
  height: 350px;
  box-shadow: 0px 20px 38px rgba(0,0,0,0.06);
  position: relative;
`
const TextWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  text-align: center;
`
const Title = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #FFFFFF;

`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const Icon = styled.div``

Icon.Houses = styled(Houses)``

export {Container, TextWrapper, Title, Img, Icon}

