import React from "react";
import Layout from "../../components/Layout";
import styled from 'styled-components'
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
  margin-bottom: 70px;
  
  img {
    display: block;
    max-width: ${props => (props.large ? 1200 : 800)}px;
    width: 100%;
    height: 100%;
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

const Button = styled.a`
  display: inline-block;
  margin: 0 auto 20px;
  padding: 20px 50px 20px 50px;
  border: 2px solid #999999;
  background: none;
  text-align: center;
  color: #999999;
  font-size: 18px;
  font-weight: bold;
  line-height: 1;
  
  &:visited {
    color: #999999;
  }
  
  &:hover {
    background: #999999;
    color: #fff;
    cursor: pointer;
  }
`

const ButtonWrapper = styled.div`
  text-align: center;
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
  `;

export default class LIST extends React.Component {
  state = {
    page: 'list'
  };

  render() {
    return (
      <Layout>
        <TopImage src="/static/image/work/baseconnect-list.jpg"/>
        <Section grey border>
          <Title>
            <h2>Baseconnect LIST</h2>
            <a href="https://sales.baseconnect.in/" target="blank">https://sales.baseconnect.in/</a>
            <p className="page__desc">
              「Baseconnect LIST」は法人営業におけるターゲティングや見込み客となりうる企業のリスト作成を圧倒的に効率化できるクラウドサービスです。リリースから1年で約10,000社に導入いただいています。
            </p>
          </Title>
          <Desc>
            <li>
              <p className="title">役割</p>
              <p className="cont">UI/UXデザイン/コーディング（React.js / SCSS）</p>
            </li>
          </Desc>
        </Section>

        <Content>
          <Section grey>
            <h3><span>アウトプット</span></h3>
            <p>インハウスのデザイナーとして約1年間、本サービスの開発を担当しました。</p>
            <h5>（担当箇所）</h5>
            <ul>
              <li>・UI/UXデザイン、コーディング</li>
              <li>・ブラウザ対応（IE / Internet Explore等）</li>
              <li>・モバイル対応</li>
              <li>・ローンチ後の機能改善</li>
              <li>・スタイルガイドの作成</li>
              <li>・新サービスリリース準備</li>
            </ul>
            <Image large>
              <img src="/static/image/work/list/list-output1.png" alt=""/>
              <span>TOP（企業情報一覧）</span>
            </Image>
            <Image large>
              <img src="/static/image/work/list/list-output2.png" alt=""/>
              <span>DETAIL（企業情報詳細）</span>
            </Image>
            <Image large>
              <img src="/static/image/work/list/list-output3.png" alt=""/>
              <span>MOBILE</span>
            </Image>
          </Section>
          {/* コンテンツ1 */}
          <Section grey>

            <h3><span>ケーススタディー</span></h3>
            <p>以下３点をケーススタディーとしてご紹介します</p>
            <ul>
              <li>1. 検索条件の保存機能追加</li>
              <li>2. 都道府県選択のUX改善</li>
              <li>3. モバイル対応</li>
            </ul>

            <h4>1. 検索条件の保存機能追加</h4>
            <p>ユーザーのヒアリングより、「検索条件の保存機能」が欲しいという要望が多かったため、機能実装に伴い一部デザインの変更を行いました。</p>

            <h5>（Before）</h5>
            <p>元々は、左のサイドバーから検索条件を指定すると、「該当者数」が瞬時にヘッダー下の領域に反映されるという仕様です（画像左：Before）。</p>

            <h5>（After）</h5>
            <p>新しい機能を追加するにあたって、「保存した検索条件の選択 / 編集」をナビゲーショバー下のコンポーネントに配置し、「該当社数」は一つ下の階層に下げました（画像右：After）。</p>

            <Image large>
              <img src="/static/image/work/list/list-capture1.png" alt=""/>
            </Image>
            <p>結果的に、第1階層では「条件の指定」、一つ下の第2階層では、「指定した条件での検索結果」を表示する機能に分け、階層に意味を持たせたデザインにすることができました。</p>
            <Image>
              <img src="/static/image/work/list/list-capture2.png" alt=""/>
              <span>（階層に意味を持たせたデザイン）</span>
            </Image>
          </Section>

          {/* コンテンツ2 */}
          <Section grey>
            <h4><span className="h3__inner">2. 都道府県選択のUX改善</span></h4>
            <p>企業情報を探す検索軸の一つ、「都道府県選択」のUX改善を行いました。</p>

            <h5>（Before）</h5>
            <p>本サービスでは、直感的な操作性を重視し、画面遷移が少ない仕様にしています。検索条件はサイドバーから全て指定可能で、検索結果がリロードなく瞬時に反映されます。しかし、このサイドバーにおいては、2点の課題がありました。</p>
            <h5>（課題）</h5>
            <ul>
              <li>1. サイドバーが長くなりすぎて、どんな検索項目があるか一目でわかりづらい</li>
              <li>2. サイドバーはPC画面の高さに依存し、47都道府県の地域指定は画面に全て収まらないため見つけづらい</li>
            </ul>
            <Image>
              <img src="/static/image/work/list/list-capture3.png" alt=""/>
              <span>（Before:サイドバーから地域を絞り込む仕様）</span>
            </Image>

            <h5>（After）</h5>
            <p>ユーザーからも地域選択がしづらいといいう声が多かったため、「都道府県選択」はモーダルの別画面で表示させました。都道府県の地図を表示し、選択した都道府県の地域をさらに絞るという仕様です</p>
            {/* TODO Gif入れる*/}
            <Image>
              <img src="/static/image/work/list/areaSelect.gif" width="100" height="30" alt="都道府県選択アニメーション" />
              <span>（改善後の都道府県選択の操作画面）</span>
            </Image>
            <h5>（デザインプロセス）<br/></h5>
            <p>このUIの実現プロセスとして、ワイヤーの段階では２つの案を提示しました。</p>
            <ul>
              <li>案1：入力フォームのように、都道府県選択を行ってから、次に特定の地域を選択するように段階的に表示する</li>
              <li>案2：都道府県選択と、特定の地域選択を横並びにする</li>
            </ul>
            <Image large>
              <img src="/static/image/work/list/list-capture5.png" alt=""/>
            </Image>
            <p>案1のUIでは、表示領域が広いため一覧性においては優れています。しかし、都道府県を複数選択した場合、選択した分だけ縦にスクロールしなくてはいけないため、直感的な操作性を損なうと判断し、案2を採用しました。</p>

            <Image>
              <img src="/static/image/work/list/list-capture6.png" alt=""/>
              <span>（項目数が多くなり、直感的な操作性を損なうと判断されNG）</span>
            </Image>

            <h5>（アウトプットデザイン）</h5>
            <p>採用された案2は一覧性に欠けるのがデメリットですが、レスポンシブに対応させ、デバイス画面幅に合わせ表示領域を広くさせました。</p>
            <Image>
              <img src="/static/image/work/list/list-capture7.png" alt=""/>
              <span>（レスポンシブデザインに対応させ、なるべく一覧性を欠かないように）</span>
            </Image>
          </Section>

          {/* コンテンツ3 */}
          <Section grey>
            <h3><span className="h3__inner">3. モバイル対応</span></h3>
            <p>Baseconnect LISTはPC環境のみの提供になっており、アプリ化の案も出ていましたが、デザイナーが対応できる範囲で実装を行いました。
              ワイヤーからデザイン、コーディングまで1人で対応し、最終段階はエンジニアと共働して開発を行いました。</p>
            <Image large>
              <img src="/static/image/work/list/list-capture8.png" alt=""/>
              <span>（ワイヤーフレーム）</span>
            </Image>

            <Image large>
              <img src="/static/image/work/list/list-capture9.png" alt=""/>
              <span>（デザイン）</span>
            </Image>

            <Image large>
              <img src="/static/image/work/list/list-output3.png" alt=""/>
              <span>（アウトプット）</span>
            </Image>
            <p>PC版のデザインは、モバイルの表示を踏まえていなかったものの、1画面 / 1機能に絞ることで、モバイルの表示に対応することができました。</p>

            <ButtonWrapper>
              <Button href="https://invis.io/RBQJWD3HCNG#/347234578_--------- " target="_blank">
                プロトタイプを見てみる
              </Button>
            </ButtonWrapper>
          </Section>
        </Content>
        <ArticleRecommend page={this.state.page}/>
      </Layout>
    )
  }
}
