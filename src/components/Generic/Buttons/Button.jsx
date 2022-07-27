import React, {memo} from "react";
import { Container } from "./style";



export const Button = ({
  children,
  onClick,
  height,
  width,
  type,
  mr,
  ml,
  mb,
  mt,
  margin
})=>{
  return (
    <Container
      margin={margin}
      mr={mr}
      ml={ml}
      mb={mb}
      mt={mt}
      type={type}
      width={width}
      height={height}
      onClick={onClick}
    >
      {children}
    </Container>
  )
}