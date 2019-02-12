import React, { Fragment } from 'react'
import  Header from './Header'
import  Footer from './Footer'

const Layout = (props) => (
  <Fragment>
    <Header/>
    {props.children}
    <Footer/>
    {/* TODO font-familyでエラーが出る*/}
    <style>{`
      body {
        margin: 0;
        background: #fff;
        font-family: 'Avenir', 'YuGothic';
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

      }

      .link:hover {
        cursor: pointer;
        opacity: 0.6;
      }

      p {
        font-size: 17px;
        line-height: 1.8;
      }


      a {
        color: #000;
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

      li {
        list-style-type: none;
      }
    `}</style>
  </Fragment>
);

export default Layout
