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
    
    a:visited {
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
`;

export default class Bootcamp extends React.Component {
  state = {
    page: 'bootcamp'
  }

  render () {
    return (
      <Layout>
        <TopImage src="/static/image/work/baseconnect-bootcamp.png"/>
        <Section grey>
          <Title>
            <h2>Design Bootcamp & Product Design</h2>
            <a href="https://baseconnect.in/" target="blank">https://baseconnect.in/</a>
            <p className="page__desc">
              未経験からデザイナーを目指すプログラムのDesign Bootcampの運営を行なっていました。また社内で使用するダッシュボード、Tシャツ / パーカー、プロフィールカードなどのプロダクトデザインも担当しました。
            </p>
          </Title>
          <Desc/>
        </Section>

        <Content>
          {/* コンテンツ1 */}
          <Section grey>
            <h3><span>1. Design Bootcamp</span></h3>
            <p>2017年10月の段階でデザイナーのインターンとしてジョインした際は、自分を含めデザイナーが2名でした。しかし、2018年の春から1人が卒業し、デザイナーが不足する事態になりました。</p>
            <p>社員の採用案もありましたが、組織の成長段階を踏まえ、未経験からデザイナーを目指すプログラムのDesign Bootcampを開催することで、優秀な人材をインターンとして採用することを目標に、月に２回ほど説明会を開催しました。</p>
            <p>自身が未経験からデザイナーとして活動できている経験を生かし、運営から面接、課題へのFB等全てを担当しています。</p>

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
            <p>このプログラムはあくまで自学自習の形式で、課題、テストのアウトプットに対してのフィードバックをしていました。その際に意識していたのは以下の項目です。</p>
            <ul>
              <li>・どういうプロセスで取り組んだかを聞く（学習 / アウトプットに関して）</li>
              <li>・相手が何でつまずき、どうすれば次の壁を乗り越えられるかを一緒に考える</li>
              <li>・デザインの原理原則に基づき、理由を踏まえフィードバックする</li>
              <li>・知っていればできたこと、手を動かすことで身に付つくものの違い明らかにしてあげる</li>
              <li>・道具の使い方はなるべく教えない</li>
              <li>・デザインする際の視点、わからないことの調べ方、作業のプロセスに関してアドバイスする</li>
            </ul>

            <h4>人に教えることは、自身の学びになる</h4>
            <p>自身もインターンという立場で日々業務があり、まだまだデザイナーとして学んでいく段階ではありますが、人に何かを教える / フィードバックするという経験は、とても学ぶことが多かったです。特に、相手がどう動いてくれるかを考え、どんな言葉を発言するかというのは、今でも自分が意識しているテーマになっています。</p>
            <p>また、デザインのアウトプットに対しての批評は、自分のデザインを説明する訓練にもなりました。</p>

            <Image large>
              <img src="/static/image/work/bootcamp/bootcamp-capture10.png" alt=""/>
            </Image>
          </Section>

          <Section grey>
            <h3><span>2. ProductDesign</span></h3>
            <p>自社サービス以外にも、社内で要望があった場合に様々なものをデザインしました。以下では、ダッシュボード、Tシャツ、プロフィールカードの３つをご紹介します。</p>

            <h4>ダッシュボード</h4>
            <p>Baseconnet株式会社にて、自社で作成する企業情報等の数値管理用ダッシュボードを作成しました。デザインからコーディングまで行い、ライブラリにchart.jsを使用しました。</p>
            <Image>
              <img src="/static/image/work/bootcamp/bootcamp-capture4.png" alt=""/>
            </Image>

            <p>同じ情報でまとめる、整列させる、色を３つに絞ることで意味を持たせて、特に現状の各項目の数値に目に行くように、シンプルで見やすいデザインを心がけました。</p>

            <Image large>
              <img src="/static/image/work/bootcamp/bootcamp-capture5.png" alt=""/>
            </Image>


            <h4>ワンニャンTシャツ</h4>
            <p>社内用Tシャツを作成しました。犬と猫がいる珍しい会社なので、会社の特徴としてロゴに２匹の動物を取り入れました。</p>
            <Image>
              <img src="/static/image/work/bootcamp/bootcamp-capture6.png" alt=""/>
            </Image>

            <p>このTシャツを着た時に、友達に「そのTシャツかわいいね！」というような会話が生まれ、犬と猫がいる優しい会社だと自慢できるような願いを込めてデザインしました。</p>

            <Image large>
              <img src="/static/image/work/bootcamp/bootcamp-capture7.png" alt=""/>
              <span>展示会ブースでの写真</span>
            </Image>



            <h4>プロフィールカード</h4>
            <p>Baseconnect株式会社では、社員、インターン、編集アルバイを含め５００名ほどのメンバーが所属しています。日々たくさんの人が入れ替わる環境において、社内のコミュニケーションを加速させるためプロフィールカードを作成しました。</p>
            <Image>
              <img src="/static/image/work/bootcamp/bootcamp-capture8.png" alt=""/>
            </Image>
            <p>顔が1番に目立つように写真を丸型で切り抜き、役職ごとに色で分けています。また、メンバーが会社の１員であると感じられるように、左上にロゴを配置しました。デザインはSketchで作成しましたが、Googleスライドでデータを作成し直し、デザイナー以外のメンバーでもカードの作成 / 印刷できるようになっています。</p>
            <Image>
              <img src="/static/image/work/bootcamp/bootcamp-capture9.png" alt=""/>
              <span>人が一番通るエレベーター前にプロフィールカードを立てかけている</span>
            </Image>
          </Section>
        </Content>
        <ArticleRecommend page={this.state.page}/>
      </Layout>
    )
  }
}
