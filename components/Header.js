import Link from 'next/link'
import css from 'styled-jsx/css'

const styles = css`
  a {
    font-color: black;
    padding: 0 20px;
  }
  
  h1 {
    padding-top: 10px;
    font-size: 32px;
    font-family: 'Avenir',serif;
  }
  
  header {
    z-index: 10;
    height: 84px;
    width: 100%;
    position: fixed;
    top: 0;
  }
  
  .header__inner {
    display: flex;
    max-width: 980px;
    margin: 0 auto;
    height: 84px;
    font-size: 20px;
    align-items: center;
   }
  
  nav {
    margin-left: auto;
    font-family: 'Avenir', serif;
  }
`

const Header = () => (
  <header>
    <div className="header__inner">
      <nav>
        <Link href="/index">
          <a>Top</a>
        </Link>
        {/*<Link href="/work">*/}
          {/*<a>Story</a>*/}
        {/*</Link>*/}
        <Link href="/work">
          <a>Work</a>
        </Link>
      </nav>
    </div>
    <style jsx>{styles}</style>
  </header>
)

export default Header
