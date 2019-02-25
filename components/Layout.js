import React, { Fragment } from 'react'
import  Header from './Header'
import  Footer from './Footer'
import Head from 'next/head'

const Layout = (props) => (
  <Fragment>
    <Head>
      <title>mimizunoDesign</title>
    </Head>
    <Header/>
    {props.children}
    <Footer/>
    {/* TODO font-familyでエラーが出る*/}
    <style>{`
      body {
        margin: 0;
        background: #fff;
        font-family: 'Avenir', "Noto Sans JP";
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

      @media (max-width: 767px) {
        p {
          font-size: 16px;
        }
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
