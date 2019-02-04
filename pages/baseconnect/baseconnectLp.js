import React from "react";
import styled from 'styled-components'

import Layout from "../../components/Layout";
import Section from '../../components/styledComponents/section'

import Recommend from "../../components/Recommend";
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
  padding-bottom: 40px;
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
    
    p {
      margin: 40px auto 40px;
      text-align: left;
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
    margin: 80px 0 40px;
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
  border-bottom: 1px solid #B5B6B7;
  
  li {
    display: inline-block;
    vertical-align: top;
    width: 50%;
  }

  li:nth-child(odd) {
    padding-right: 20px;
  }

  li:nth-child(even) {
    padding-left: 20px;
  }

  li .title {
    margin-bottom: 10px;
    font-weight: bold;
  }
  
  li .cont {
    margin-bottom: 50px;
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

    li .title {
      text-align: center;
    }
  }
`

const SectionBorder = styled.div`

  }
`

export default class LP extends React.Component {
  state = {
    pageStatus: 'top'
  };

  render () {
    return (
      <Layout>
        <TopImage src="/static/image/work/baseconnect-lp.png"/>
        <Section grey>
          <Title>
            <h2>Baseconnect LIST ランディングページ</h2>
            <a>https://sales.baseconnect.in/</a>
            <p>
              法人営業を支援する企業情報データベース「Baseconnect LIST」のLP（ランディングページ）です。
              クラウドサービスのBaseconnecct LISTはアプリのダウンロードも必要なく、登録後すぐにサービスの利用を開始できます。
            </p>
          </Title>
          <Desc>
            <li>
              <p className="title">自分の役割</p>
              <p className="cont">当社にジョインした段階でこのLPは公開されており、サービスの機能改善 / アップデートに伴い、デザイン/コーディングを担当しました</p>
            </li>
            <li>
              <p className="title">担当箇所</p>
              <p className="cont">LP内の「企業情報追加情報」項目をデザイン / コーディングしました。（インターンとしてジョインしてから、新規画面を初めて全て1人で担当させて頂いたタスクです。）</p>
            </li>
            <li>
              <p className="title">取り組んだ課題 / チャレンジ</p>
              <p className="cont">ベータ版でのローンチとなったため、<br/>
                1. 企業情報の数が十分でない<br/>
                2. 地域によってはデータ数の偏りがある<br/>
                この２点をサービス登録前となるLP内でユーザーに理解してもらえるよう取り組みました</p>
            </li>
            <li>
              <p className="title">期間</p>
              <p className="cont">当社にジョインした段階でこのLPは公開されており、サービスの機能改善 / アップデートに伴い、デザイン/コーディングを担当しました</p>
            </li>
          </Desc>
        </Section>
        <Content>
          <Section grey>
            <h4>課題1. 企業情報の数が十分でない</h4>
            <p>企業情報のデータベースとなる「Baseconnect LIST」は担当した当時β版でのリリースになっていたため、サービスの肝となる企業情報の数が十分ではなかったのが大きな課題の1つでした。</p>
            <p>この問題を解決するために「リアルタイムで企業情報のデータを作成していることをユーザーに知らせる」ことが要件として挙げられました。そこで「ダッシュボード・掲示板」を想起させるグラフィックを取り入れ、この課題の解決にアプローチしました。</p>
            <p>画像左上の「追加企業数」の数値を緑の太字にすることで、ファーストインプレッションで1番に目立たせています。また、画像右上「リアルタイム更新情報」では、追加された企業名と共に、その時間を強調させました。</p>
            <Image>
              <img src="/static/image/work/lp/lp-capture1.png" alt=""/>
              <span>「ダッシュボード・掲示板」を想起させるグラフィックで表現</span>
            </Image>
          </Section>
          <Section grey>
            <h4>課題2. 地域によってはデータ数の偏りがある</h4>
            <p>もう1つサービスの課題として、企業情報のデータ作成は主に関西と関東を中心としているため、地域によってはデータの数にばらつきがあるという問題が挙げられていました。</p>
            <p>「サービスを登録したのに、自分の営業したい企業の情報がない…」というのは、ユーザーの満足度・ブランドに対する信頼の低下に繋がります。そのため、サービスの導入を検討するユーザーが懸念するポイントの一つである「自分が営業したい会社の情報はあるか？」という疑問に答えるため、企業情報が多い都道府県をランキング形式で一覧にしました。</p>
            <Image>
              <img src="/static/image/work/lp/lp-capture2.png" alt=""/>
              <span>企業情報が多い都道府県をランキング形式で一覧表示</span>
            </Image>
            <p>コーディングを行う際、「都道府県別会社数」の47都道府県は5行の並びにしてから、スマホでレスポンシブに表示させるのは一見単純そうで、実装が難しいことに気づきました。悩んだ結果、グリッドレイアウトを採用することで、スマホでは都道府県のランキングを5行から2行へ表示することが可能になりました。</p>
            <p>（PC）１列 x 10個のマス目を5列でレイアウトし、都道府県を割り当てる<br/>
              （スマホ）１列 x 24個のマス目を2列でレイアウトし、都道府県を割り当てる</p>
            <Image>
              <img src="/static/image/work/lp/lp-capture3.png" alt=""/>
            </Image>
            <Image>
              <img src="/static/image/work/lp/lp-capture4.png" alt=""/>
              <span>グリッドレイアウトでレスポンシブに対応</span>
            </Image>
            <h4>学び</h4>
            <p>初めてデザインからコーディングまで任せていただいたこのタスクでは、コーディングを踏まえてデザインをすることの必要性、デザイナーでもコードを書くことの大切さを学び、今デザインをする時も大きな糧となっています。</p>
          </Section>
        </Content>
        <ArticleRecommend/>
      </Layout>
    )
  }
}
