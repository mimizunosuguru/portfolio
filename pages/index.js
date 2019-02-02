import React from "react";
import styled from 'styled-components';
import Layout from '../components/Layout'
import Recommend from '../components/Recommend'

import Section from '../components/StyledComponents/section'

const PageHeader = styled.div`
    height: 84px;
    line-height: 84px;
    margin: 0 auto;
    max-width: 980px;
    
    @media (max-width: 767px) {
      h1 {
        display: none;
      }
      
     
      h2 {
        font-size: 24px;
        margin-bottom: 10px;
      }

      h3 {
        font-size: 20px;
      }
    }
`;

const Top = styled.ul `
  display: flex;
  
  img {
    width: auto;
    height: 100%;
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
  
  .box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 380px;
    overflow: hidden;
  }
  
  @media (max-width: 767px) {
    .box {
      margin-top: 50px;
    }

    .box.right {
      padding-left: 20px;
    }
  }
`;

const Card = styled.ul`
  display: flex;
  background: #fff;
  padding: 30px;
  
  margin-top: ${props => (props.second ? '50' : '')}px;
  
  h2 {
    font-family: 'Avenir', serif;
    font-size: 28px;
  }
  
  .head {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
  }

  .content {
    width: 550px;
  }

  .content p {
    font-size: 15px;
    margin-bottom: 20px;
  }

  .content p:last-child {
    margin: 0;
  }
  
  @media (max-width: 767px) {
    flex-direction: ${props => (props.second ? 'column-reverse' : 'column')};
    align-items: center;

    .content {
      width: 100%;
    }
    
    
    .head h2 {
      font-size: 28px;
      margin-bottom: 20px;
    }
  }
  
`;

const Biography = styled.ul`
  .bio__listItem {
    display: flex;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid #EEEEEE;
    font-size: 15px;
  }
  
  .bio__listItem:last-child {
    border: none;
  }

  .bio__listItem .item--title {
    width: 140px;
    font-family: 'Avenir', 'YuGothic',serif;
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
    .bio__listItem {
      flex-direction: column;
      align-items: flex-start;
      height: auto;
      padding: 15px 0;
    }

    .bio__listItem div {
      margin-bottom: 10px;
    }

    .bio__listItem .item--place {
      margin: 0;
    }
  }
`

export default class Index extends React.Component {
  state = {
    pageStatus: 'top'
  }
  render() {
    return (
      <Layout>
        {/*ヘッダー*/}
        <PageHeader>
          <h1>mimizunoDesign</h1>
        </PageHeader>

        {/*Top*/}
        <Section>
          <Top>
            <li className="box left">
              <img src="/static/image/index/heroImage.png" alt="heroImage"/>
            </li>
            <li className="box right">
              <div>
                <h2>Hello, I’m Sugu Mizuno</h2>
                <h3>UI/UX Designer</h3>
              </div>
            </li>
          </Top>
        </Section>

        <Section grey>
          {/* About */}
          <Card>
            <li className="head">
              <h2>About</h2>
            </li>
            <li className="content">
              <p>学生生活では、自分が情熱を持って取り組めるものを見つけるため様々な活動に取り組む中で、デザインと出会いました。デザインの問題解決の視点に惹かれ、2017年に大学を休学し、ベトナムの日系ITスタートアップにてデザイナーのインターンとしてメンターの元に弟子入りの後、現在は京都に拠点を置くBaseconnect株式会社にてUI/UXデザイナーとして活動しています。</p>
              <p>また、日本最大級のUXカンファレンスを毎年開催するUX DAYS
                TOKYOにスタッフとして約1年間所属していました。UXに関するブログ記事の執筆と、ワークショップ、勉強会をスタッフで定期的に開催し、デザインを行う上での視点を学びました。</p>
              <p>モットーは事上練磨です。感覚ではなく理論と本質を見極められるデザインができるよう日々勉強しています。デザインの本質である問題解決の視点にこだわり、身近な人の課題から取り組み続けたいです。</p>
            </li>
          </Card>
          {/* Biography */}
          <Card second>
            <li className="content">
              <Biography>
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
              </Biography>
            </li>
            <li className="head">
              <h2>Biography</h2>
            </li>
          </Card>
        </Section>
        <Recommend pageStatus={this.state.pageStatus}/>
      </Layout>
    )
  }
}

