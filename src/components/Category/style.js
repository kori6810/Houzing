import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/left-arrow.svg";
import { ReactComponent as rarrow } from "../../assets/icons/right-arrow.svg";
const Container = styled.div`
   position: relative;
   width:80%;
   margin: 0 auto;

`
const Title = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.02em;
  margin-bottom: 8px;

    

  
  color: #0D263B;
`
const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 32px;
`
const Icon = styled.div``

Icon.Left = styled(arrow)`
display: flex;
position: absolute;
justify-content: center;
align-items: center;
position: absolute;
top: 50%;
left: 0px;
transform: translate(100%, -50%);
width: 45px;
height: 45px;
color: white;
background: white;
padding: 12px;
opacity: 0.5;
border-radius: 50%;
z-index: 999;
cursor: pointer;
:hover {
    opacity: 0.97;
}
& path {
    fill: #0d263b;
}
`;

Icon.Right = styled(rarrow)`
display: flex;
position: absolute;
justify-content: center;
align-items: center;
position: absolute;
top: 50%;
right: 0px;
transform: translate(-100%, -40%);
width: 45px;
height: 45px;
color: white;
background: white;
padding: 12px;
opacity: 0.5;
border-radius: 50%;
z-index: 999;
cursor: pointer;
:hover {
    opacity: 0.97;
}
& path {
    fill: #0d263b;
}
`;
export {Container,Title, TitleWrapper, Icon}