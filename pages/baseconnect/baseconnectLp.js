import React from "react";
import styled from 'styled-components'

import Layout from "../../components/Layout";
import Section from '../../components/styledComponents/section'

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
  margin-bottom: 70px;
  
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
`

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
`

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

export default class LP extends React.Component {
  state = {
    page: 'lp'
  };

  render () {
    return (
      <Layout>
        <TopImage src="/static/image/work/baseconnect-lp.jpg"/>
        <Section grey border>
          <Title>
            <h2>Baseconnect LIST ランディングページ</h2>
            <a href="https://sales.baseconnect.in/" target="blank">https://sales.baseconnect.in/</a>
            <p>
              法人営業を支援する企業情報データベース「Baseconnect LIST」のLP（ランディングページ）です。
              クラウドサービスのBaseconnecct LISTはアプリのダウンロードも必要なく、登録後すぐにサービスの利用を開始できます。
            </p>
          </Title>
          <Desc>
            <li>
              <p className="title">担当</p>
              <p className="cont">UIデザイン / コーディング（HTML / CSS/ jQuery）</p>
            </li>
          </Desc>
        </Section>
        <Content>
          <Section grey>
            <h3><span>アウトプット</span></h3>
            <p>ランディングページのリニューアルにあたり、デザインを元にHTML/CSS/jQueryでのコーディングを担当しました。一部デザインの追加も担当しました。</p>
            <h5>（コーディングを担当）</h5>
            <Image>
              <img src="/static/image/work/lp/output1.png" alt=""/>
            </Image>
            <h5>（一部デザインを担当）</h5>
            <Image>
              <img src="/static/image/work/lp/output2.png" alt=""/>
            </Image>

            <h3><span>デザインプロセス</span></h3>
            <p>企業情報のデータベースとなる「Baseconnect LIST」は担当した当時β版でのリリースになっていたため、サービスの肝となる企業情報の数が十分ではなかったのが大きな課題の1つでした。</p>

            <p>この問題を解決するために「リアルタイムで企業情報のデータを作成していることをユーザーに知らせる」ことが要件として挙げられ、<b>「ダッシュボード・掲示板」を想起させるグラフィック</b>を取り入れることで、この課題の解決にアプローチしました。</p>
            <Image>
              <img src="/static/image/work/lp/lp-capture1.png" alt=""/>
              <span>（「ダッシュボード・掲示板」を想起させるグラフィックで表現）</span>
            </Image>


            <p>もう1つサービスの課題として、企業情報のデータ作成は主に関西と関東を中心としているため、地域によってはデータの数にばらつきがあるという問題が挙げられていました。</p>
            <p>そのため、サービスの導入を検討するユーザーが懸念するポイントの一つである「自分が営業したい会社の情報はあるか？」という疑問に答えるため、<b>企業情報が多い都道府県をランキング形式で一覧表示</b>しました。</p>

            <Image>
              <img src="/static/image/work/lp/lp-capture2.png" alt=""/>
              <span>企業情報が多い都道府県をランキング形式で一覧表示</span>
            </Image>

            <p>モバイルでの表示は、グリッドレイアウトでレスポンシブに対応しています</p>
            <Image>
              <img src="/static/image/work/lp/lp-capture4.png" alt=""/>
            </Image>
          </Section>
        </Content>
        <ArticleRecommend page={this.state.page}/>
      </Layout>
    )
  }
}
