import Link from 'next/link'
import styled from 'styled-components'

const Head = styled.header `
  z-index: 10;
  height: 84px;
  width: 100%;
  position: fixed;
  top: 0;
    
  a {
    font-color: black;
    padding: 0 20px;
  }
  
  h1 {
    padding-top: 10px;
    font-size: 32px;
    font-family: 'Avenir',serif;
  }
  
  .header__inner {
    display: flex;
    max-width: 980px;
    margin: 0 auto;
    height: 100%;
    font-size: 20px;
    align-items: center;
  }
  
  nav {
    margin-left: auto;
    font-family: 'Avenir', serif;
  }
  
  @media (max-width: 767px) {
    height: 70px;
    
    h1 {
      display: none;
    }
  }
`

const Header = () => (
  <Head>
    <div className="header__inner">
      <nav>
        <Link href="/index">
          <a>Work</a>
        </Link>
        {/*<Link href="/work">*/}
          {/*<a>Story</a>*/}
        {/*</Link>*/}
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
    </div>
  </Head>
)

export default Header
