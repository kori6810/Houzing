import styled from "styled-components";
import { Carousel } from "antd";
// import { ReactComponent as arrow } from "../../assets/icons/left-arrow.svg";
// import { ReactComponent as rarrow } from "../../assets/icons/right-arrow.svg";
import { ReactComponent as  arrow } from "../../assets/icons/left-arrow.svg";
import { ReactComponent as  rarrow } from "../../assets/icons/right-arrow.svg";

const getImg = (id)=>{
    console.log(id);
    switch(id){
        case 'rasm1':
        return {
            background: '#0061df'
        };
        case 'rasm2':
         return {
            background: '#0044df'
        };
        default: return {
            background: '#fff'
        }
        
    }
    
}

const CarouselWrapper = styled('div')`
position: relative;
width: 100%;
`

const MainCarousel = styled(Carousel)`
height: fit-content;
`

const ImgWrapper = styled.div`

position: relative;

width: 100%;
height: 75vh;
background-size: cover;
position: relative;
&::before{
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.601);
    z-index: 0;
}
`
const Img = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
   
   
`
const TextWrapper = styled.div`
    position: absolute;
    top:50%;
    right:45%;
    transform: translate(40%, -50%);
    h1{
        color: #fff;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 44px;
        line-height: 48px;
        /* identical to box height, or 109% */
        
        letter-spacing: -0.02em;

    }
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

export { CarouselWrapper, MainCarousel, Icon, ImgWrapper,Img, TextWrapper}