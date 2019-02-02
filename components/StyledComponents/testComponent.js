import styled from "styled-components";

const StyledMyHeading = styled.h1`
  color: blue;
  font-size: ${props => (props.small ? 28 : 36)}px;
  color: ${props => (props.small ? 'red' : 'blue')};
`;

export default StyledMyHeading;
