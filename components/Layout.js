import React, { Fragment } from 'react'
import  Header from './Header'
import  Footer from './Footer'
import styled from 'styled-components';

const Body = styled.div`
  background: #F0F1F5;
  font-family: 'Avenir', 'YuGothic';
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  //indexに追加
  section {
    background: #fff;
    padding: 50px;
  }
  
  @media (max-width: 767px) {
    section {
      padding: 20px;
    }
  }

  section.grey {
    background: #F0F1F5;
  }

  .section__inner {
    margin: 0 auto;
    max-width: 980px;
  }

  .link:hover {
    cursor: pointer;
    opacity: 0.6;
  }

  p {
    font-size: 16px;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    opacity: 0.6;
    cursor: pointer;
  }

  a:visited {
    color: #000;
    text-decoration: none;
  }

  ul li {
    display: block;
    text-align: -webkit-match-parent;
  }
`

const Layout = (props) => (
  <Body>
    <Header/>
    {props.children}
    <Footer/>
  </Body>
)

export default Layout
