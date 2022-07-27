import React from 'react'
import { Container } from './style'
import Input from '../Generic/Input/Input';
import {Button} from '../Generic/Buttons/Button'
import { ReactComponent as SearchHome} from '../../assets/icons/home.svg'; 
import { Icon, Wrapper, Fragment, Title } from './style';
import {  Popover } from 'antd';
const Filter = () => {
  // console.log('Filter');
  
  const content = (
    <Wrapper>
      <Title>Address</Title>
      <Fragment>
        <Input placeholder={'Country'} width={'200px'}/>
        <Input placeholder={'Region'} width={'200px'}/>
        <Input placeholder={'City'} width={'200px'}/>
        <Input placeholder={'Zip Code'} width={'200px'}/>

      </Fragment>
      <Title>Apartment info</Title>
      <Fragment>
        <Input placeholder={'Rooms'}/>
        <Input placeholder={'Size'}/>
        <Input placeholder={'Sort'}/>
        
      </Fragment>
      <Title>Price</Title>
      <Fragment>
        <Input placeholder={'Min Price'}/>
        <Input placeholder={'Max Price'}/>
        
      </Fragment>
    </Wrapper>
  );
  return (
    <Container>
      <Input pl={'50'} placeholder = 'Enter an address, neighborhood, city, or ZIP code'>
        <SearchHome/>
      </Input>
      
      <Button width={'131px'} type={'secondary'}>
        <Popover placement="bottomRight"  content={content} trigger="click">
         <Icon.Setting/> Advanced 
        </Popover>
      </Button>
      <Button width={'131px'} type={'primary'}> <Icon.Search/> Search</Button>

    

    </Container>
  )
}
 export default React.memo(Filter)