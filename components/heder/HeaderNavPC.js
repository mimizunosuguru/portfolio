import React from "react";
import Link from 'next/link'
import styled from 'styled-components'

const Navigation = styled.nav `
  margin-left: auto;
  font-family: 'Avenir', serif;
  font-weight: bold;
  
  @media (max-width: 767px) {
    display: none; 
  }
   
  a {
    color: #000000;
    margin-left: 20px;
    font-size: 16px;
  }

  a.current {
    border-bottom: 1px solid #000000;
  }
`;

export default class HeaderNavPC extends React.Component {
  render() {
    return (
      <Navigation>
        <Link href="/index">
          <a className={this.props.page == 'index' ? 'current' : ''}>Work</a>
        </Link>

        <Link href="/about">
          <a className={this.props.page == 'about' ? 'current' : ''}>About</a>
        </Link>
        <a href="https://drive.google.com/file/d/1YJ_eICop4KHvrZxQ86Yu-Rxlnc4OtDmj/view?usp=sharing"
           target="_blank">Resume</a>
      </Navigation>
    )
  }
}
