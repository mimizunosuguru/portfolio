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
    height: 84px;
    width: 100%;
    position: fixed;
    top: 0;
  }
  
  .header__inner {
    display: flex;
    margin: 0 110px;
    height: 80px;
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
      <h1>
        mimizunoDesign
      </h1>
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
