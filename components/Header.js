import Link from 'next/link'
import styled from 'styled-components'
import React from "react";

const Head = styled.header `
  z-index: 10;
  position: fixed;
  width: 100%;
  padding: 36px 30px 0;
  top: 0;
  
  h2 {
    font-family: 'Avenir',serif;
    font-size: 18px;
  }
    
  a {
    color: #000000;
    margin-left: 20px;
    font-size: 16px;
  }
  
  a.current {
    border-bottom: 1px solid #000000;
  }
  
  h1 {
    padding-top: 10px;
    font-size: 32px;
    font-family: 'Avenir',serif;
  }
  
  .header__inner {
    display: flex;
    margin: 0 auto;
    //max-width: 980px;
    height: 100%;
    font-size: 18px;
    font-weight: bold;
    align-items: center;
  }
  
  .header__home a {
    font-size: 26px;
    margin: 0;
  }
  
  nav {
    margin-left: auto;
    font-family: 'Avenir', serif;
  }
  
  @media (max-width: 767px) {
    height: 60px;
    background: rgba(255, 255, 255, 0.4);
  }
`
export default class Header extends React.Component {
  render() {
    return (
      <Head>
        <div className="header__inner">
          <div className="header__home">
            <Link href="/index">Sugu Mizuno</Link>
          </div>
          <nav>
            <Link href="/index">
              <a className={this.props.page == 'index' ? 'current' : ''}>Work</a>
            </Link>

            <Link href="/about">
              <a className={this.props.page  == 'about' ? 'current' : ''}>About</a>
            </Link>
              <a href="https://drive.google.com/file/d/1YJ_eICop4KHvrZxQ86Yu-Rxlnc4OtDmj/view?usp=sharing" target="_blank">Resume</a>
          </nav>
        </div>
      </Head>
    )
  }
}
