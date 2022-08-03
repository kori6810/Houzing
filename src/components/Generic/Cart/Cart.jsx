import React from 'react'
import { CartWrapper,
  Img,
  DataBox,
  PriceBox,
  IconWrapper,
  IconBox,
  ProImg,
  ImgWrapper,
  Featured, Sale} from './style';
import profilePic from '../../../assets/images/avatar1.png';

export const Cart = ({info, mr, ml, margin, onClick}) => {
   
  return (
    <CartWrapper onClick={onClick} className='nocopy'>
      <ImgWrapper>
        <Featured>Featured</Featured>
        <Sale>Sale</Sale>
        <Img src={info?.attachments[0]?.imgPath || 'no img'} alt="home img" />
      </ImgWrapper>

      <ProImg src={profilePic} alt='profil pic'/>
      <DataBox>
        <h2>{info?.description || 'description'}</h2>
        <h3 className='description'>
          {info?.name || 'name'} 
          {info?.address || 'address'} 
          {info?.city || 'city'} 
          {info?.country || 'country'}
        </h3>
        <IconWrapper className='description'>
          <IconBox>
            <IconBox.Bed/>
            <h3>{info?.houseDetails?.beds || 0} beds</h3>
          </IconBox>
          <IconBox>
            <IconBox.Bath/>
            <h3>{info?.houseDetails?.bath || 0} bath</h3>
          </IconBox>
          <IconBox>
            <IconBox.Garage/>
            <h3> {info?.houseDetails?.garage || 0} garage</h3>
          </IconBox>
          <IconBox>
            <IconBox.Area/>
            <h3> {info?.houseDetails?.area || 0} sq ft</h3>
          </IconBox>

        </IconWrapper>


      </DataBox>
      <PriceBox>
        <div>
          <h4 className='description'>
            ${info?.salePrice || 0}/mo
          </h4>
          <h3>
            ${info?.price || 0}/mo
          </h3>
        </div>
        <div>
          <IconBox.Cursor/>
          <IconBox.Heart/>
        </div>

      </PriceBox>
   </CartWrapper>
  )
}
