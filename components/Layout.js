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
  }

  body {
    background: #F0F1F5;
  }

  .Avenir {
    font-family: 'avenir';
  }

  p {
    font-size: 16px;
    font-family: 'YuGothic';
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
`}</style>
  </Fragment>
)

export default Layout
