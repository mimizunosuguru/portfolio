import React from "react";
import styled, { css } from "styled-components";

const Component = styled.section`
  padding: 50px;
  //background
  background: ${props => (props.grey ? '#F0F1F5' : '')};
  //border-bottom
  border-bottom: ${props => (props.border ? '1px solid #B5B6B7': '')};
    
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
    <Component grey={props.grey} border={props.border}>
      <div className="inner">
        {props.children}
      </div>
    </Component>
  );
}

export default Section;
