import React from "react";
import styled from "styled-components";

import Layout from "../../components/Layout";
import Section from "../../components/styledComponents/section";

import ArticleRecommend from "../../components/ArticleRecommend";

const TopImage = styled.div`
  width: 100%;
  height: 600px;
  background-image: url( ${props => (props.src)} );
  background-size: cover;
  background-position: center;

  @media (max-width: 1020px) and (min-width: 768px) {
    height: 400px;
  }

  @media (max-width: 767px) {
    height: 300px;
  }
`;

const Title = styled.div`
  background: #F0F1F5;
  text-align: center;
  
  h2 {
      font-size: 32px;
      font-weight: bold;
      margin-bottom: 20px;
    }
  
    a {
      font-size: 18px;
      color: #999999;
    }
    
    a:visited {
      color: #999999;
    }
    
    p {
      margin: 40px auto 40px;
      text-align: left;
      max-width: 800px;
    }
      
    @media (max-width: 767px) {
    //スマホ以下
      h2 {
        font-size: 26px;
      }
    }
`;

const Content = styled.div`
  h3 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 50px;
    text-align: center;
  }

  h3 span {
    display: inline-block;
    padding: 0 25px 20px;
    border-bottom: 4px solid #2DC1AF;
  }
  
  h4 {
    font-size: 20px;
    font-weight: bold;
    margin: 0 0 40px;
    text-align: center;
  }

  h5 {
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: normal;
    text-align: left;
    color: #999999;
  }

  p {
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 40px;
  }
  
  ul {
    max-width: 800px;
    margin: 0 auto 40px;
  }

  ul li {
    margin-bottom: 10px;
  }
`;


const Image = styled.div`
  margin-bottom: 40px;
  
  img {
    display: block;
    max-width: ${props => (props.large ? 1200 : 800)}px;
    width: 100%;
    margin: 0 auto;
  }
    
  span {
    display: block; 
    font-size: 15px;
    color: #999999;
    text-align: center;
    margin: 30px auto;
  }
  
  h4 {
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    margin: 30px auto;
  }
  
  p { 
  }
`;

const Button = styled.button`
  display: block;
  margin: 0 auto 20px;
  padding: 20px 50px 20px 50px;
  border: 2px solid #999999;
  background: none;
  text-align: center;
  color: #999999;
  font-size: 18px;
  font-weight: bold;
  line-height: 1;
    
  &:hover {
    background: #999999;
    color: #fff;
    cursor: pointer;
  }
`;

//プロジェクト説明
const Desc = styled.ul`
  
  li {
    margin-bottom: 30px;
  }
  
  li:last-child {
    margin-bottom: 0
  }
  
  li p {
    max-width: 800px;
    margin: 0 auto;
  }
  
  li .title {
    margin-bottom: 10px;
    // font-weight: bold;
    color: #999999;
  }


  @media (max-width: 767px) {
    //スマホ以下
    li {
      width: 100%;
      padding: 0;
    }

    li:nth-child(even),
    li:nth-child(odd) {
      padding: 0;
    }
  }
`

export default class Bootcamp extends React.Component {
  state = {
    page: 'bootcamp'
  }

  render () {
    return (
      <Layout>
        <TopImage src="/static/image/work/baseconnect-bootcamp.png"/>
        <Section grey border>
          <Title>
            <h2>Design Bootcamp</h2>
            <a href="https://baseconnect.in/" target="blank">https://baseconnect.in/</a>
            <p>Design Bootcampは未経験からデザイナーを目指すプログラムです。潜在的に優秀な人材をインターンとして採用することを目標に、月に２回ほど説明会を開催しています。</p>
          </Title>
          <Desc/>
        </Section>

        <Content>
          {/* コンテンツ1 */}
          <Section grey>
            <p>自身が未経験からデザイナーとして活動できている経験を生かし、運営から面接、課題へのFB等全てを担当しました。</p>

            <Image large>
              <img src="/static/image/work/bootcamp/bootcamp-capture1.png" alt=""/>
            </Image>
            <Image large>
              <img src="/static/image/work/bootcamp/bootcamp-capture2.png" alt=""/>
            </Image>
            <Image large>
              <img src="/static/image/work/bootcamp/bootcamp-capture3.png" alt=""/>
              <span>説明会で使用した資料の一部</span>
            </Image>

            <h4>結果</h4>
            <p>8ヶ月間で約160名が説明会に参加し、40名がカリキュラム受講、内5名がインターンとして現在も活動しています。</p>

            <h4>フィードバックする側として意識していたこと</h4>
            <p>自分もまだまだデザイナーとして成長段階ではあるものの、人に何かを教える / フィードバックするという経験は、思った以上に学ぶことがありました。相手の学習 / 成長を促進できるように、フィードバックする際は下記のポイントを心がけました。</p>
            <ul>
              <li>・どんなプロセスで学習 / アウトプットをしたかに耳を傾ける</li>
              <li>・相手が何でつまずき、どうすれば次の壁を乗り越えられるかを一緒に考える</li>
              <li>・デザインの原理原則に基づき、理由を踏まえフィードバックする</li>
              <li>・知っていればできたこと、手を動かすことで身に付つくものの違いを明らかにする</li>
              <li>・道具の使い方はなるべく教えない</li>
              <li>・デザインする際の視点、わからないことの調べ方、作業のプロセスに関して助言する</li>
            </ul>

          </Section>
        </Content>
        <ArticleRecommend page={this.state.page}/>
      </Layout>
    )
  }
}
