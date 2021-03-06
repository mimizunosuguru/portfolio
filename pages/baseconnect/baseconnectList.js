import React from "react";
import Layout from "../../components/Layout";
import styled from 'styled-components'
import Section from "../../components/styledComponents/section";
import ArticleRecommend from "../../components/ArticleRecommend";

const TopImage = styled.div`
  position: relative;
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

const Top = styled.div`
  .inner {
    max-width: 800px;
    margin: 0 auto 50px;
    border-bottom: 1px solid #B5B6B7;
`;

const Title = styled.div`
  h2 {
      font-size: 40px;
      font-weight: bold;
      text-align: left;
      margin-bottom: 25px;
    }
    
    @media (max-width: 767px) {
    //mobile
      h2 {
        font-size: 30px;
      }
    }
    
    p {
      margin-bottom: 30px;
    }
`;

//プロジェクト説明
const Desc = styled.ul`
  padding-bottom: 50px;
  
  li {
    margin-bottom: 30px;
  }
  
  li:last-child {
    margin-bottom: 0
  }
  
  li p {
    line-height: 1;
  }
  
  li .title {
    margin-bottom: 15px;
    color: #999999;
  }
  
  a {
    text-decoration: underline;
  }


  @media (max-width: 767px) {
    //mobile
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

const Content = styled.div`
  h3 {
    max-width: 800px;
    margin: 0 auto 25px;;
    font-size: 36px;
    font-weight: bold;
    text-align: left;
  }
  
  @media (max-width: 767px) {
    h3 {
      font-size: 30px;
    }
  }

  h4 {
    max-width: 800px;
    margin: 0 auto 20px;
    text-align: left;
    font-size: 20px;
    font-weight: bold;
  }

  h5 {
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 10px;
    font-size: 17px;
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
    font-size: 17px;
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
`;

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
`;

const ButtonWrapper = styled.div`
  text-align: center;
`;

export default class LIST extends React.Component {
  state = {
    page: 'list'
  };

  render() {
    return (
      <Layout>
        <TopImage src="/static/image/work/baseconnect-list.jpg"/>
        <Section grey>
          <Top>
            <div className="inner">
              <Title>
                <h2>Baseconnect LIST</h2>
                {/*<a href="https://sales.baseconnect.in/" target="blank">https://sales.baseconnect.in/</a>*/}
                <p className="page__desc">
                  「Baseconnect LIST」は法人営業におけるターゲティングや見込み顧客となりうる企業のリスト作成を圧倒的に効率化できるクラウドサービスです。リリースから1年で約10,000社に導入されています。
                </p>
              </Title>
              <Desc>
                <li>
                  <p className="title">URL</p>
                  <a href="https://sales.baseconnect.in/" target="_blank" className="cont">https://sales.baseconnect.in/</a>
                </li>
                <li>
                  <p className="title">役割</p>
                  <p className="cont">UI/UXデザイン/コーディング（React.js / SCSS）</p>
                </li>
              </Desc>
            </div>
          </Top>
          <Content>
            <h3>アウトプット</h3>
            <p>インハウスのデザイナーとして約1年間、本サービスの開発を担当しました。</p>
            <h5>担当箇所</h5>
            <ul>
              <li>・UI/UXデザイン、コーディング</li>
              <li>・ブラウザ対応（IE / Internet Explore等）</li>
              <li>・モバイル対応</li>
              <li>・ローンチ後の機能改善</li>
              <li>・スタイルガイドの作成</li>
              <li>・新サービスリリース準備</li>
            </ul>
            <Image>
              <img src="/static/image/work/list/list-output1.png" alt=""/>
              <span>TOP（企業情報一覧）</span>
            </Image>
            <Image>
              <img src="/static/image/work/list/list-output2.png" alt=""/>
              <span>DETAIL（企業情報詳細）</span>
            </Image>
            <Image>
              <img src="/static/image/work/list/list-output3.png" alt=""/>
              <span>MOBILE</span>
            </Image>

            {/* 1 */}
            <h3>ケーススタディー</h3>
            <p>以下３点をケーススタディーとして紹介します。</p>
            <ul>
              <li>1. 検索条件の保存機能追加</li>
              <li>2. 都道府県選択のUX改善</li>
              <li>3. モバイル対応</li>
            </ul>

            <h4>1. 検索条件の保存機能追加</h4>
            <p>ユーザーのヒアリングより、「検索条件の保存機能」の要望が多かったため、新規機能の追加に伴い、一部デザインを変更しました。</p>

            <h5>Before</h5>
            <p>元々は、左のサイドバーから検索条件を指定すると、ヘッダー下の領域に「該当者数」が瞬時に反映される仕様です（画像左：Before）。</p>

            <h5>After</h5>
            <p>新規機能の「保存した検索条件の選択 / 編集」はヘッダー下に配置し、「該当社数」はもう一つ下の階層に下げました（画像右：After）。</p>

            <Image large>
              <img src="/static/image/work/list/list-capture1.png" alt=""/>
            </Image>
            <p>結果的に、第1階層では「条件の指定」、その下の第2階層では、「検索結果の表示」機能に分け、階層に意味を持たせたデザインにできました。</p>
            <Image>
              <img src="/static/image/work/list/list-capture2.png" alt=""/>
              <span>（階層に意味を持たせたデザイン）</span>
            </Image>


            {/* 2 */}
            <h4>2. 都道府県選択のUX改善</h4>
            <p>企業情報を探す際の検索軸の一つ、「都道府県選択」のUX改善を行いました。</p>

            <h5>Before</h5>
            <p>本サービスでは、直感的な操作性を重視し、画面遷移が少ない仕様になっています。検索条件の指定はサイドバーで全て完結し、条件を指定すると検索結果がリロードなく瞬時に反映されます。しかし、このサイドバーにおいては、2点の課題がありました。</p>
            <h5>課題</h5>
            <ul>
              <li>1. サイドバーが長くなりすぎて、どんな検索項目があるか一目でわかりづらい</li>
              <li>2. サイドバーはPC画面の高さに依存し、47都道府県の地域指定は画面に全て収まらないため探しづらい</li>
            </ul>
            <Image>
              <img src="/static/image/work/list/list-capture3.png" alt=""/>
              <span>（Before:サイドバーから地域を絞り込む仕様）</span>
            </Image>

            <h5>After</h5>
            <p>「都道府県選択のしづらさ」はユーザーからも改善要望が多かったため、モーダル表示させることで改善にアプローチしました。都道府県の地図を表示し、選択した都道府県の地域をさらに絞っていく仕様です。</p>
            {/* TODO Gif入れる*/}
            <Image>
              <img src="/static/image/work/list/areaSelect.gif" width="100" height="30" alt="都道府県選択アニメーション" />
              <span>（改善後の「都道府県選択」操作画面）</span>
            </Image>
            <h5>デザインプロセス</h5>
            <p>このUIの実現プロセスとして、ワイヤーの段階では２案を提示しました。</p>
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

            <h5>アウトプットデザイン</h5>
            <p>採用された案2は一覧性に欠けるのがデメリットですが、デバイス画面幅にレスポンシブに対応させ、表示領域を広くしました。</p>
            <Image>
              <img src="/static/image/work/list/list-capture7.png" alt=""/>
              <span>（レスポンシブデザインに対応させ、一覧性を欠かないように）</span>
            </Image>


            {/* 3 */}
            <h4>3. モバイル対応</h4>
            <p>Baseconnect LISTは当初PC環境のみの提供でした。アプリ化の案も出ていましたが、デザイナーが対応できる範囲でモバイル対応を行いました。
              ワイヤーからデザイン、コーディングまで1人で対応し、最終段階ではエンジニアと共働して開発を行いました。</p>
            <Image large>
              <img src="/static/image/work/list/list-capture8.png" alt=""/>
              <span>ワイヤーフレーム</span>
            </Image>

            <Image large>
              <img src="/static/image/work/list/list-capture9.png" alt=""/>
              <span>デザイン</span>
            </Image>



            <Image large>
              <img src="/static/image/work/list/list-output3.png" alt=""/>
              <span>アウトプット</span>
            </Image>
            <p>PC版のデザインは、モバイルの表示を踏まえていなかったものの、1画面 / 1機能に絞り、モバイルの表示に対応できました。</p>

            <ButtonWrapper>
              <Button href="https://invis.io/RBQJWD3HCNG#/347234578_--------- " target="_blank">
                プロトタイプを見てみる
              </Button>
            </ButtonWrapper>
          </Content>
        </Section>
        <ArticleRecommend page={this.state.page}/>
      </Layout>
    )
  }
}
