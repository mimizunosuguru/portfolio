import Layout from '../components/Layout'
import css from 'styled-jsx/css'

const styles = css`
  section {
    background: #fff;
    padding: 134px 0 50px;
  }

  .section__inner {
    display: flex;
    margin: 0 auto;
    max-width: 980px;
  }

  .section__box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 380px;
  }
  
  .section__box.left {
  }
  
  h2 {
    font-family: 'Avenir', serif;
    font-size: 28px;
  }
  
  h3 {
   font-family: 'Avenir', serif;
   color: #989696;
   font-size: 24px;
  }
  
  img {
    width: 100%;
    height: auto;
  }
`

const Index = () => (
  <Layout>
    <section>
      <ul className="section__inner">
        <li className="section__box left">
          <img src="/static/heroImage.png" />
        </li>
        <li className="section__box right">
          <div>
            <h2>Hello, I’m Sugu Mizuno</h2>
            <h3>UI/UX Designer</h3>
          </div>
        </li>
      </ul>
    </section>
    <style jsx>{styles}</style>
  </Layout>
)

export default Index
