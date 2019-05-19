import Link from 'next/link'
import styled from 'styled-components'
import React from "react";
import HamburgerMenu from 'react-hamburger-menu'
import HeaderNavPC from './HeaderNavPC'

const Head = styled.header `
  .headerTest {
    position: fixed;
    top: 0;
    padding: 36px 30px 0;
    width: 100%;
    height: 30px;
    z-index: 10;
  }
  
  .inner {
    display: flex;
  }

  //ホーム   
  .header__home a {
    font-size: 26px;
    font-weight: bold;
    margin: 0;
  }
 
  //ハンバーガーメニュー
  .headerTest.open .inner {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  .mobileMenu {
    margin-left: auto;
  }
  
  .mobileMenu div {
    z-index: 100000;
  }
  
  .navigation.open {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.5s;
    z-index: 1500;
    position: absolute;
    width: 100%;
    height: 100%;
    background: black;
    display: table;
  }
  
  .navigation.close {
    opacity: 0;
    visibility: hidden;
    width: 100%;
    height: 100%;
    position: fixed;
    display: table;
    background: black;
    transition: 0.5s;
  }
  
  .pcNav {
    margin-left: auto;
    font-family: 'Avenir', serif;
    font-weight: bold;
  }
  
  .mobileMenu {
    display: none;
  }

  @media (max-width: 767px) {
    height: 60px;
    background: rgba(255, 255, 255, 0.4);
    
    .pcNav {
      display: none;
    } 
    
    .mobileMenu {
      display: block;
    }
  }
  
  /*コンテンツ*/
  .navigation nav {
    color: #fff;
    font-weight: bold;
  }
  
  .navigation.close nav {
    display: none;
  }
  
  .navigation.open nav {
    display: block;
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


export default class Header extends React.Component {
  state = {
    isMenuOpen: false,
  };

  closeMenu = () => {
    this.setState({isMenuOpen: !this.state.isMenuOpen})
  };

  render() {
    return (
      <Head>
        <div className={this.state.isMenuOpen ? 'headerTest open' : 'headerTest'}>
          <div className="inner">
            <div className="header__home">
            <Link href="/index">Sugu Mizuno</Link>
            </div>
            <div className="mobileMenu">
              <HamburgerMenu
                className="hamburger"
                isOpen={this.state.isMenuOpen}
                menuClicked={this.closeMenu}
                width={18}
                height={15}
                strokeWidth={1}
                rotate={0}
                color={this.state.isMenuOpen ? 'white' : 'black'}
                borderRadius={0}
                animationDuration={0.5}
              />
            </div>

            <HeaderNavPC page={this.props.page}/>

            {/*navigation*/}
            <div className={this.state.isMenuOpen ? 'navigation open' : 'navigation close'}>
              <nav>
                <Link href="/index">
                  <a>Work</a>
                </Link>

                <Link href="/about">
                  <a>About</a>
                </Link>
                <a href="https://drive.google.com/file/d/1YJ_eICop4KHvrZxQ86Yu-Rxlnc4OtDmj/view?usp=sharing" target="_blank">Resume</a>
              </nav>
            </div>
          </div>
        </div>
        {/*<div className="header__inner">*/}
          {/*<div className="header__home">*/}
            {/*<Link href="/index">Sugu Mizuno</Link>*/}
          {/*</div>*/}

          {/*/!* Mobileナビゲーション *!/*/}
          {/*<div className="mobileMenu">*/}
            {/*<HamburgerMenu*/}
              {/*className="hamburger"*/}
              {/*isOpen={this.state.isMenuOpen}*/}
              {/*menuClicked={this.closeMenu}*/}
              {/*width={18}*/}
              {/*height={15}*/}
              {/*strokeWidth={1}*/}
              {/*rotate={0}*/}
              {/*color={this.state.isMenuOpen ? 'white' : 'black'}*/}
              {/*borderRadius={0}*/}
              {/*animationDuration={0.5}*/}
            {/*/>*/}
          {/*</div>*/}

          {/*/!*navigation*!/*/}
          {/*<div className={this.state.isMenuOpen ? 'navigation open' : 'navigation close'}>*/}
            {/*<nav>*/}
              {/*<p>メニュー１</p>*/}
              {/*<p>メニュー２</p>*/}
              {/*<p>メニュー３</p>*/}
            {/*</nav>*/}
          {/*</div>*/}

        {/*</div>*/}
      </Head>
    )
  }
}
