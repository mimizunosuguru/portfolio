import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import  Header from './Header'

const Layout = (props) => (
  <Fragment>
    {/* ヘッダー */}
    <Header/>

    {/* コンテンツ */}
    {props.children}

    {/* グローバルCSS */}
    <style jsx global>{`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #F0F1F5;
    font-family: 'Avenir', 'YuGothic';
  }

  .Avenir {
    font-family: 'avenir';
  }

  .flex {
    display: flex;
  }

  .ml-auto {
    margin-left: auto;
  }

  p {
    font-size: 16px;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    opacity: 0.6;
  }

  a:visited {
    color: #000;
    text-decoration: none;
  }

  ul li {
    display: block;
    text-align: -webkit-match-parent;
  }
`}</style>
  </Fragment>
)

export default Layout
