import Link from 'next/link'
import styled from 'styled-components'
import React from "react";

const Head = styled.header `
  z-index: 10;
  height: 84px;
  width: 100%;
  position: fixed;
  top: 0;
  
  h2 {
    font-family: 'Avenir',serif;
    font-size: 18px;
  }
    
  a {
    color: #000000;
    padding: 0 20px;
  }
  
  a.current {
    color: #999999;
  }
  
  h1 {
    padding-top: 10px;
    font-size: 32px;
    font-family: 'Avenir',serif;
  }
  
  .header__inner {
    display: flex;
    
    height: 100%;
    font-size: 18px;
    font-weight: bold;
    align-items: center;
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
          <nav>
            <Link href="/index">
              <a className={this.props.page == 'index' ? 'current' : ''}>Work</a>
            </Link>

            <Link href="/about">
              <a className={this.props.page  == 'about' ? 'current' : ''}>About</a>
            </Link>
          </nav>
        </div>
      </Head>
    )
  }
}
