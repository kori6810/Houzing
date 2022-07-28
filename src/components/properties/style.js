import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 0 130px;
`
const Txt = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #0D263B;
  margin: 64px 0 8px;
`
const Description = styled.h3`
  margin-bottom:70px;
`
const ResultBox = styled.div`
 display: flex;
 justify-content: space-between;
 margin: 0 130px;
`
const SortWrapper = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #0D263B;
  width: 167px;
  height: 20px;
  box-shadow: 1px 3px 2px rgb(0 0 0 / 10%);
  select{
    border: none;

  }
`
const Result = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #0D263B;
  display: flex;
  gap:10px;
`
export {Container,Txt, Description, ResultBox,SortWrapper, Result}