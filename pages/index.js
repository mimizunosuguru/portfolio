import Layout from '../components/Layout'
import ContentFooter from '../components/ContentFooter'
import css from 'styled-jsx/css'

const styles = css`  
  .section__boxWrapper {
    display: flex;
  }

  .section__box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 380px;
    overflow: hidden;
  }
  
  .section__box.left {
  }
  
  .page__header {
    padding: 0 50px;
    background: #fff;
  }
  
  h1 {
    height: 84px;
    line-height: 84px;
    margin: 0 auto;
    max-width: 980px;
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
    width: auto;
    height: 100%;
  }
  
  .box__card {
    display: flex;
    background: #fff;
    padding: 30px;
  }
  
  .box__card:first-child {
    margin-bottom: 50px;
  }
  
  .card__title {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
  }
  
  .card__cont {
    width: 550px;
  }
  
  .card__cont p {
    font-size: 15px;
    margin-bottom: 20px;
  }
  
  .card__cont p:last-child {
    margin: 0;
  }
  
  .bio__listItem {
    display: flex;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid #EEEEEE;
    font-size: 15px;
  }
  
  .bio__listItem .item--title {
    width: 140px;
    font-family: 'Avenir', 'YuGothic';   
   } 
  
  .bio__listItem .item--title a {
    font-weight: bold;
    border-bottom: 1px solid #000;
  }
  
  .bio__listItem .item--position { 
  }
  
  .bio__listItem .item--place {
    margin-left: auto;
    text-align: right;
  }
  
   @media (max-width: 767px) { 
    h1 {
      display: none;
    }
    
    .section__box {
      margin-top: 50px;
    }
    
    .section__box.right {
      padding-left: 20px;
    }
    
    h2 {
      font-size: 24px;
      margin-bottom: 10px;
    }
    
    .card__title h2 {
      font-size: 28px;
      margin-bottom: 20px;
    }
    
    h3 {
      font-size: 20px;
    }
    
    .box__card {
      flex-direction: column-reverse;      
      align-items: center;
    }
    
    .box__card:first-child {
      flex-direction: column;
      margin-bottom: 20px;
    }
    
    .card__cont {
      width: 100%;
    }
    
    .bio__listItem {
      flex-direction: column;
      align-items: flex-start;
      height: auto;
      padding: 10px 0;
    }
    
    .bio__listItem div {
      margin-bottom: 10px;
    }
    
    .bio__listItem .item--place {
      margin: 0;
    }
  }
`

const Index = () => (
  <Layout>
    <div className="page__header">
      <h1>
        mimizunoDesign
      </h1>
    </div>
    {/*Top*/}
    <section>
      <div className="section__inner">
        <ul className="section__boxWrapper">
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
      </div>
    </section>

    <section className="grey">
      {/* About */}
      <div className="section__inner">
        <ul className="box__card">
          <li className="card__title">
            <h2>About</h2>
          </li>
          <li className="card__cont">
            <p>学生生活では、自分が情熱を持って取り組めるものを見つけるため様々な活動に取り組む中で、デザインと出会いました。デザインの問題解決の視点に惹かれ、2017年に大学を休学し、ベトナムの日系ITスタートアップにてデザイナーのインターンとしてメンターの元に弟子入りの後、現在は京都に拠点を置くBaseconnect株式会社にてUI/UXデザイナーとして活動しています。</p>
            <p>また、日本最大級のUXカンファレンスを毎年開催するUX DAYS TOKYOにスタッフとして約1年間所属していました。UXに関するブログ記事の執筆と、ワークショップ、勉強会をスタッフで定期的に開催し、デザインを行う上での視点を学びました。</p>
            <p>モットーは事上練磨です。感覚ではなく理論と本質を見極められるデザインができるよう日々勉強しています。デザインの本質である問題解決の視点にこだわり、身近な人の課題から取り組み続けたいです。</p>
          </li>
        </ul>
        {/* Biography */}
        <ul className="box__card">
          <li className="card__cont">
            <ul className="bio__list">
              <li className="bio__listItem">
                <div className="item--title"><a href="">Baseconnect</a></div>
                <div className="item--position">UI/UX Designer Intern</div>
                <div className="item--place">京都 / 2017 - 2019（現在）</div>
              </li>
              <li className="bio__listItem flex">
                <div className="item--title"><a href="">UX Days Tokyo</a></div>
                <div className="item--position">Stuff</div>
                <div className="item--place">大阪&東京 / 2017 - 2018</div>
              </li>
              <li className="bio__listItem flex">
                <div className="item--title"><a href="">Framgia</a></div>
                <div className="item--position">Design & Marketing Intern</div>
                <div className="item--place">ベトナム / 2017/4 - 9</div>
              </li>
              <li className="bio__listItem flex">
                <div className="item--title"><a href="">Flamingo</a></div>
                <div className="item--position">iOS Enginner & Hastler</div>
                <div className="item--place">京都 / 2016/5 - 11</div>
              </li>
              <li className="bio__listItem flex">
                <div className="item--title"><a href="">同志社大学</a></div>
                <div className="item--position">経済学部/経済学科</div>
                <div className="item--place">京都 / 2014 - 2020 (予定)</div>
              </li>
            </ul>
          </li>
          <li className="card__title">
            <h2>Biography</h2>
          </li>
        </ul>
      </div>
    </section>

    <ContentFooter/>
    <style jsx>{styles}</style>
  </Layout>
)

export default Index
