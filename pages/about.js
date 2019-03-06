

import React from "react";
import styled from 'styled-components';
import Layout from '../components/Layout'
import Recommend from '../components/Recommend'
import Head from 'next/head'
import Lottie from 'lottie-react-web'
import animation from './animation.json'

import Section from '../components/styledComponents/section'

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
  margin-top: 34px;
  
  img {
    position: absolute;
    right: 0;
    width: auto;
    height: 100%;
  }
  
  p {
    padding-bottom: 12px;
    font-family: 'Avenir', serif;
    font-size: 28px;
    font-weight: bold;
    line-height: 1;
  }
  
  h2 {
    padding-bottom: 20px;
    font-family: 'Avenir', serif;
    font-size: 58px;
    font-weight: bold;
    line-height: 1;
    letter-spacing: 2px;
  }

  span {
   font-family: 'Avenir', serif;
   color: #999999;
   font-weight: bold;
   font-size: 20px;
   line-height: 1;
  }
  
  .box {
    position: relative;
    display: flex;
    align-items: center;
    height: 380px;
    width: 100%;
  }
  
  .box--title {
    z-index: 1;
    padding-left: 60px;
  } 
  
  .box--background {
    position: absolute;
    right: 0;
    height: 100%;
    width: 60%;
    background-image: url("/static/image/index/heroImage.png");
    background-size: cover;
  }
  
  @media (max-width: 1020px) and (min-width: 768px) {
    .box--title {
      padding-left: 0;
    }
    
    .box--background {
      background-position: center;
    }
  }
  
  @media (max-width: 767px) {
    .box {
      margin-top: 50px;
    }
    
    .box--title {
      padding-left: 0;
    }
    
    p {
      font-size: 18px;
      padding-bottom: 8px;
    }
    
    h2 {
      font-size: 38px;
      padding-bottom: 8px;
    }
    
    span {
      font-size: 14px;
    }
    
    .box--background {
      width: 75%;
      background-position: center;
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
    font-size: 30px;
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
    font-size: 16px;
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
    font-size: 16px;
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
`;

const AnimationWrap = styled.div`
  -moz-animation: fadein 0s ease-in 3s forwards;
  /* Firefox */
  -webkit-animation: fadein 0s ease-in 3s forwards;
  /* Safari and Chrome */
  -o-animation: fadein 0s ease-in 3s forwards;
  /* Opera */
  animation: fadein 0s ease-in 3s forwards;
  
  -webkit-animation-fill-mode: forwards;
  animation-duration: 0.6s;
  animation-fill-mode: forwards;
  
  position: fixed;
  background: #fff;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  
  @-webkit-keyframes fadein {
     from {
          opacity:100%;
      }
      
      to {
          opacity:0;
          visibility:hidden;
    }
  }
  
  @keyframes fadein {
      from {
          opacity:100%;
      }
      
      to {
          opacity:0;
          visibility:hidden;
      }
  }
`;

export default class About extends React.Component {
  state = {
    pageStatus: 'top'
  }
  render() {
    return (
      <Layout>
        <Head>
          <title>mimizunoDesign</title>
        </Head>

        {/*Top*/}
        <Section>
          {/*<AnimationWrap>*/}
            {/*<Lottie*/}
              {/*options={{*/}
                {/*animationData: animation,*/}
                {/*loop: false*/}
              {/*}}*/}
            {/*/>*/}
          {/*</AnimationWrap>*/}
          <Top>
            <li className="box">
              <div className="box--title">
                <p>DESIGN IS</p>
                <h2>STORYTELLING</h2>
                <span>SUGU MIZUNO UI/UX Designer</span>
              </div>
              <div className="box--background">
                {/*<img src="/static/image/index/heroImage.png" alt="heroImage"/>*/}
              </div>
            </li>
            {/*<li className="box right">*/}
            {/*</li>*/}
          </Top>
        </Section>

        <Section grey>
          {/* About */}
          <Card>
            <li className="head">
              <h2>About</h2>
            </li>
            <li className="content">
              <p>学生生活では、自分が情熱を持って取り組めるものを見つけるため様々な活動に取り組む中、デザインと出会う。デザインの問題解決の視点に惹かれ、2017年に大学を休学し、ベトナムの日系ITスタートアップにてデザイナーのインターンとしてメンターの元に弟子入りの後、京都に拠点を置くBaseconnect株式会社にてUI/UXデザイナーとして現在活動中。</p>
              <p>また、日本最大級のUXカンファレンスを毎年開催するUX DAYS TOKYOにスタッフとして約1年間所属。UXに関するブログ記事の執筆と、ワークショップ、勉強会をスタッフで定期的に開催し、デザインを行う上での視点を学ぶ。</p>
              <p>感覚ではなく理論と本質を見極められるデザインができるよう日々勉強中。デザインの本質である問題解決の視点にこだわり、身近な人の課題から取り組み続けたい。</p>
            </li>
          </Card>
          {/* Biography */}
          <Card second>
            <li className="content">
              <Biography>
                <li className="bio__listItem">
                  <div className="item--title"><a href="http://company.baseconnect.in/" target="_blank">Baseconnect</a></div>
                  <div className="item--position">UI/UX Designer Intern</div>
                  <div className="item--place">京都 / 2017 - 2019（現在）</div>
                </li>
                <li className="bio__listItem flex">
                  <div className="item--title"><a href="https://uxdaystokyo.com/" target="_blank">UX Days Tokyo</a></div>
                  <div className="item--position">Stuff</div>
                  <div className="item--place">大阪&東京 / 2017 - 2018</div>
                </li>
                <li className="bio__listItem flex">
                  <div className="item--title"><a href="https://framgia.com/" target="_blank">Framgia</a></div>
                  <div className="item--position">Design & Marketing Intern</div>
                  <div className="item--place">ベトナム / 2017/4 - 9</div>
                </li>
                <li className="bio__listItem flex">
                  <div className="item--title"><a href="https://app-flamingo.com/" target="_blank">Flamingo</a></div>
                  <div className="item--position">iOS Enginner & Hastler</div>
                  <div className="item--place">京都 / 2016/5 - 11</div>
                </li>
                <li className="bio__listItem flex">
                  <div className="item--title"><a href="https://www.doshisha.ac.jp/" target="_blank">同志社大学</a></div>
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

