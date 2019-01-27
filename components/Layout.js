import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import  Header from './Header'
import  Footer from './Footer'

const Layout = (props) => (
  <Fragment>
    <Header/>

    {/* コンテンツ */}
    {props.children}

    <Footer/>
    {/* グローバルCSS */}
    <style jsx global>{`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .Avenir {
    font-family: 'avenir';
  }

  body {
    background: #F0F1F5;
    font-family: 'Avenir', 'YuGothic';
  }

  section {
    background: #fff;
    padding: 50px;
  }

  section.grey {
    background: #F0F1F5;
  }

  .section__inner {
    margin: 0 auto;
    max-width: 980px;
  }

  .flex {
    display: flex;
  }

  .ml-auto {
    margin-left: auto;
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

  @media (max-width: 767px) {
    section {
      padding: 20px;
    }
  }
`}</style>
  </Fragment>
)

export default Layout
