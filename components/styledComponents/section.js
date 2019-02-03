import styled, { css } from "styled-components";

const Component = styled.section`
  padding: 50px;
  background: ${props => (props.grey ? '#F0F1F5' : '')};
  
    
  @media (max-width: 767px) {
    padding: 20px;
  }
  
  .inner {
    margin: 0 auto;
    max-width: 980px;
  } 
`

const Section = (props) => {
  // DOM Treeを return () に定義する
  return (
    <Component grey={props.grey}>
      <div className="inner">
        {props.children}
      </div>
    </Component>
  );
}

export default Section;
