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
  
  @media (max-width: 767px) {
    h3 {
      font-size: 20px;
      margin-bottom: 30px;
    }
    
    h3 span {
      padding: 0 25px 15px;
    }
  }
  
  h4 {
    font-size: 20px;
    font-weight: bold;
    margin: 80px 0 40px;
    text-align: center;
  }
  
  @media (max-width: 767px) {
    h4 {
      margin-bottom: 20px;
    }
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

export default class LIST extends React.Component {
  state = {
    page: 'list'
  };

  render() {
    return (
      <Layout page="index">
        <TopImage src="/static/image/work/baseconnect-list.png"/>
        <Section grey>
          <Title>
            <h2>Baseconnect LIST</h2>
            <a href="https://sales.baseconnect.in/" target="blank">https://sales.baseconnect.in/</a>
            <p className="page__desc">
              「Baseconnect LIST」は法人営業におけるターゲティングや見込み客となりうる企業のリスト作成を圧倒的に効率化できるクラウドサービスです。β版のリリースから半年で5000社以上に導入いただいています。
            </p>
          </Title>
          <Desc>
            <li>
              <p className="title">自分の役割</p>
              <p className="cont">ワイヤーフレームを元に、直感的な操作性を重視したUI/UXデザインとHTML/CSS/Reactでのコーディングを行いました。</p>
            </li>
            <li className="descList__item">
              <p className="title">担当箇所</p>
              <p className="cont">本サービスをローンチするにあたり、IE等のブラウザ対応や最終段階の細かな調整、サービスリリース後も機能改善による細かな修正を担当しました。</p>
            </li>
            <li className="descList__item">
              <p className="title">紹介事例</p>
              <p className="cont">
                1. 検索条件の保存機能追加<br/>
                2. 都道府県選択のUX改善<br/>
                3. モバイル対応<br/></p>
            </li>
            <li className="descList__item">
              <p className="title">期間</p>
              <p className="cont">約１年半（インハウスのデザイナーとして活動）</p>
            </li>
          </Desc>
        </Section>

        <Content>
          {/* コンテンツ1 */}
          <Section grey>
            <h3><span>1. 検索条件の保存機能追加</span></h3>
            <p>本サービスのβ版ローンチ後、ユーザーへのヒアリングから「検索条件の保存機能」が欲しいという要望が多かったため、機能実装に伴い一部デザインの変更を行いました。</p>

            <h4>Before</h4>
            <p>元々は、左のサイドバーから検索条件を指定すると、「該当者数」が瞬時にヘッダー下の領域に反映されるという仕様です（画像左：Before）。</p>

            <h4>After</h4>
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
            <h3><span className="h3__inner">2. 都道府県選択のUX改善</span></h3>
            <p>企業情報を探す検索軸の一つ、「都道府県選択」のUX改善を行いました。</p>

            <h4>Before</h4>
            <p>本サービスでは、直感的な操作性を重視し、画面遷移が少ない仕様にしています。検索条件の指定は、サイドバーからほぼ全て指定可能で、検索結果がリロードなく瞬時に反映されます。しかし、このサイドバーにおいては、２点の課題がありました。</p>
            <h5>（課題）</h5>
            <ul>
              <li>1. サイドバーが長くなりすぎて、どんな検索項目があるか一目でわかりづらい</li>
              <li>2. サイドバーはPC画面の高さに依存し、47都道府県の地域指定は画面に全て収まらないため見つけづらい</li>
            </ul>
            <Image>
              <img src="/static/image/work/list/list-capture3.png" alt=""/>
              <span>（サイドバーから地域を絞り込む仕様）</span>
            </Image>

            <h4>After</h4>
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
            <p>また、案2の方は、デザイン、実装の段階で本当に画面に収まるか確かめるため、ワイヤーの段階からピクセル単位でUIを書き起こしました。</p>

            <h4>NGになった案2</h4>
            <Image>
              <img src="/static/image/work/list/list-capture6.png" alt=""/>
              <span>（都道府県を複数選択した場合、縦に長すぎてスクロールする必要が生じる）</span>
            </Image>

            <h4>レスポンシブに対応させた最終デザイン</h4>
            <p>案2は案1よりも一覧性に欠けるのがデメリットですが、レスポンシブに対応させ、デバイス画面幅に合わせ表示領域を広くさせました。</p>
            <Image>
              <img src="/static/image/work/list/list-capture7.png" alt=""/>
              <span>（レスポンシブデザインに対応させ、なるべく一覧性を欠かないように）</span>
            </Image>
          </Section>

          {/* コンテンツ3 */}
          <Section grey>
            <h3><span className="h3__inner">3. モバイル対応</span></h3>
            <p>Baseconnect LISTはPC環境のみの提供になっていましたが、LPページにおけるスマートフォンからのアクセスが7割であり、PC環境に限られていたことで、サービスの理解 / コンバージョンに繋がらないユーザーが存在することが問題視されていました。</p>
            <p>当初はモバイルアプリのサービス開発の案も出ていましたが、工数を考えた結果、デザイナーが基本的に実装できる範囲でモバイルでも対応できるようにしました。</p>
            <Image large>
              <img src="/static/image/work/list/list-capture8.png" alt=""/>
              <span>（デザインしたアートボードの一覧）</span>
            </Image>

            <h4>ゴールは「最低限使える体験の実現」</h4>
            <p>スマートフォンでのデザインを作成する際、達成すべきゴールは、「サービスに興味持ち、スマホから登録して、[最低限使える体験] を実現する」としました。</p>
            <p>[最低限使える体験]とは、「自分が営業したい企業の条件を絞り込み、その企業の一覧、詳細が見れる」であると定義しました。</p>
            <p>そこまで体現できれば、スマートフォンで多少の機能が制限されていたとしても、サービスの理解 / PCでの利用に繋がると判断し、これを踏まえワイヤーフレームの作成、デザイン、コーディングまでほぼ1人で実装しました。期間は約10日間です。</p>
            <Image>
              <img src="/static/image/work/list/list-capture9.png" alt=""/>
            </Image>

            <h4>「フッター固定ボタン」のデザイン検討</h4>
            <p>デザインの段階で難しかったのは、「企業情報一覧」にフッター固定で配置した「検索条件の指定」ボタンです。住宅サイトなどの検索サービスのサイトを参考にして、ボタンのデザインを３パターン x 色毎に作成しました。</p>
            <Image>
              <img src="/static/image/work/list/list-capture10.png" alt=""/>
            </Image>
            <p>最終的には、この中から２案を絞り、上司に提案 / 議論を行いデザインを決定しました。</p>
            <p>デザインを決定する要件のポイントとなったのは、以下の２点です。</p>
            <ul>
              <li>1. ボタンであると一目でわかる</li>
              <li>2. フッター固定にすると画面高さが狭まるリスクを避ける</li>
            </ul>
            <Image>
              <img src="/static/image/work/list/list-capture11.png" alt=""/>
            </Image>
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
