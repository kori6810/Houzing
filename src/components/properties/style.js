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

export {Container,Txt, Description}