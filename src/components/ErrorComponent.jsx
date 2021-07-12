import React  from "react";
import styled from "styled-components";
const StyledHeader = styled.h1`
display: flex;
align-items: center;
justify-content: center;
`;
const ErrorComponent = ({error}) => {
 
  console.log('error inside ErrorComponent',error);
  return <StyledHeader>An error ocurred loading the component</StyledHeader>;
};

export default ErrorComponent;
