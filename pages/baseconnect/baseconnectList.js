import React from "react";
import Layout from "../../components/Layout";
import ContentFooter from "../../components/ContentFooter";
import styled from 'styled-components'

const Article = styled.div`
  section {
    background: #F0F1F5;
    padding: 0;
  }

  p {
    margin-bottom: 50px;
  }

  .section__top {
    max-width: 980px;
    padding: 0 20px;
    margin: 0 auto;
    border-bottom: 1px solid #B5B6B7;
  }

  .heroImage {
    width: 100%;
    height: 600px;
    background-image: url("/static/image/work/baseconnect-list.png");
    background-size: cover;
    background-position: center;
  }

  @media (max-width: 1020px) and (min-width: 768px) {
    .heroImage {
      height: 400px;
    }
  }

  @media (max-width: 767px) {
    .heroImage {
      height: 300px;
    }
  }

   .page__title {
      text-align: center;
      margin: 40px;
   }

  .page__title h2 {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .page__title a {
    font-size: 18px;
    color: #999999;
  }

  //==========================
   // プロジェクト説明
   //==========================
  .page__descList .descList__item {
    display: inline-block;
    vertical-align: top;
    width: 50%;
  }

  .page__descList .descList__item:nth-child(odd) {
    padding-right: 20px;
  }

  .page__descList .descList__item:nth-child(even) {
    padding-left: 20px;
  }

  .page__descList .descList__item .item__title {
    margin-bottom: 10px;
    font-weight: bold;
  }


  @media (max-width: 767px) {
    //スマホ以下
    .page__descList .descList__item,
    .page__descList .descList__item {
      width: 100%;
      padding: 0;
    }

    .page__descList .descList__item:nth-child(even),
    .page__descList .descList__item:nth-child(odd) {
      padding: 0;
    }

    .page__descList .descList__item .item__title {
      text-align: center;
    }
  }

   //==========================
   // 記事コンテンツ部分のスタイル
   //==========================
  .section__content {
    padding: 50px 20px 0;
    margin-bottom: 100px;
  }

  //見出し
  .section__content  h3 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 50px;
    text-align: center;
  }

  .section__content  h3 .h3__inner {
    display: inline-block;
    padding-bottom: 25px;
    border-bottom: 4px solid #2DC1AF;
  }

  .section__content  h4 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 25px;
    text-align: center;
  }

  .section__content  h5 {
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: normal;
    text-align: left;
    color: #999999;
  }

  //テキスト
  .section__content p {
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 40px;
  }

  //リスト
  .section__content ul {
    max-width: 800px;
    margin: 0 auto 40px;
  }

  .section__content ul li {
    margin-bottom: 10px;
  }

  //ボタン
  .section__content .btn__wrapper {
    text-align: center;
  }

  .section__content button {
    border: 2px solid #999999;
    margin: 0px 0px 20px 0px;
    padding: 20px 50px 20px 50px;
    background: none;
    text-align: center;
    color: #999999;
    font-size: 18px;
    font-weight: bold;
    line-height: 1;
  }

  .section__content button:hover {
    cursor: pointer;
    background: #999999;
    color: #fff;
  }

  //画像
  .image__wrapper {
    margin-bottom: 70px;
  }

  .image__wrapper img {
    display: block;
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
  }


  .image__wrapper.large img {
    max-width: 1200px;
  }

 .image__wrapper .image__caption {
  display: block;
  font-size: 15px;
  color: #999999;
  text-align: center;
  margin: 30px auto;
 }
`

export default class LIST extends React.Component {
  state = {
    pageStatus: 'top'
  }

  render() {
    return (
      <Layout>
        <div className="heroImage"/>
        <Article>
          {/*説明*/}
          <section className="section__top">
            <div className="page__title">
              <h2>Baseconnect LIST</h2>
              <a>https://sales.baseconnect.in/</a>
            </div>
            <p className="page__desc">
              「Baseconnect LIST」は法人営業におけるターゲティングや見込み客となりうる企業のリスト作成を圧倒的に効率化できるクラウドサービスです。β版リリースから半年で5000社以上に導入いただいています。
            </p>
            <ul className="page__descList">
              <li className="descList__item">
                <p className="item__title">自分の役割</p>
                <p className="item__cont">本サービスをローンチするにあたり、IE等のブラウザ対応や最終段階の細かな調整、サービスリリース後も機能改善による細かな修正を行なっています。</p>
              </li>
              <li className="descList__item">
                <p className="item__title">担当箇所</p>
                <p className="item__cont">ワイヤーフレームを元に、直感的でわかりやすい操作性を重視したUI/UXデザインとHTML/CSS/Reactを用いてフロントのコーディングまで担当しました。</p>
              </li>
              <li className="descList__item">
                <p className="item__title">紹介事例</p>
                <p className="item__cont">
                  1. 検索条件の保存機能追加<br/>
                  2. 都道府県選択のUX改善<br/>
                  3. モバイル対応<br/></p>
              </li>
              <li className="descList__item">
                <p className="item__title">期間</p>
                <p className="item__cont">当社にジョインした段階でこのLPは公開されており、サービスの機能改善 / アップデートに伴い、デザイン/コーディングを担当しました</p>
              </li>
            </ul>
          </section>
          {/* コンテンツ1 */}
          <section className="section__content">
            <h3><span className="h3__inner">1. 検索条件の保存機能追加</span></h3>
            <p>ユーザーのヒアリングから、「検索条件の保存機能」が欲しいという要望が多かったため、機能を実装するに伴い、一部デザインの変更を行いました。</p>

            <h4>Before</h4>
            <p>元々は、左のサイドバーから検索条件を指定すると、「該当者数」が瞬時にヘッダー下の領域に反映されるという仕様です（画像左：Before）</p>

            <h4>After</h4>
            <p>新しい機能を追加するにあたって、「保存した検索条件の選択 / 編集」をナビゲーショバー下のコンポーネントに配置し、「該当社数」は一つ下の階層に下げました（画像右：After）</p>

            <div className="image__wrapper large">
              <img src="/static/image/work/list/list-capture1.png" alt=""/>
            </div>
            <p>結果的に、第2階層では「条件の指定」、一つ下の第2階層では、「指定した条件での検索結果」を表示する機能に分け、階層に意味を持たせたデザインにすることができました。</p>
            <div className="image__wrapper">
              <img src="/static/image/work/list/list-capture2.png" alt=""/>
              <span className="image__caption">（階層に意味を持たせたデザイン）</span>
            </div>
          </section>
          {/* コンテンツ2 */}
          <section className="section__content">
            <h3><span className="h3__inner">2. 都道府県選択のUX改善</span></h3>
            <p>企業情報を探す検索軸の一つ、「都道府県選択」のUX改善を行いました。</p>
            <h4>Before</h4>
            <p>本サービスでは、直感的な操作性を重視し、なるべく画面遷移をしない設計になっています。検索条件の指定は、ほぼサイドバーから指定でき、検索結果がリロードなく瞬時に反映されます。しかし、このサイドバーにおいては、２点の課題がありました。</p>
            <h5>（課題）</h5>
            <ul>
              <li>1. サイドバーが長くなりすぎて、どんな検索項目があるかわかりづらい</li>
              <li>2. サイドバーはPC画面の高さに依存し、47都道府県は画面に全て収まらないため見つけづらい</li>
            </ul>
            <div className="image__wrapper">
              <img src="/static/image/work/list/list-capture3.png" alt=""/>
              <span className="image__caption">（サイドバーから地域を絞り込む）</span>
            </div>
            <h4>After</h4>
            <p>ユーザーからも地域選択がしづらいといいう声が多かったため、「都道府県選択」はモーダルで新たに表示させました。モーダルでは、都道府県の地図を表示し、選択した都道府県の地域をさらに絞っていくというアプローチを取ることにしました</p>
            {/* TODO Gif入れる*/}
            <div className="image__wrapper">
              <img src="/static/image/work/list/list-capture4.png" alt=""/>
            </div>
            <h5>（プロセス）<br/></h5>
              <p>このUIの実現プロセスとして、ワイヤーの段階では２つの案を提示しました。</p>
            <ul>
              <li>案1：入力フォームのように、都道府県選択を行ってから、次に特定の地域を選択するように段階的に表示する</li>
              <li>案2：都道府県選択と、特定の地域選択を横並びにする</li>
            </ul>
            <div className="image__wrapper large">
              <img src="/static/image/work/list/list-capture5.png" alt=""/>
            </div>
            <p>案1のUIでは、表示領域が広いため一覧性においては優れています。しかし、都道府県を複数選択した場合、選択した分だけ縦にスクロールしなくてはいけないため、直感的な操作性を損なうと判断し、案2を採用しました。</p>
            <p>また、案2の方は、デザイン、実装の段階で本当に画面に収まるか確かめるため、ワイヤーの段階からピクセル単位でUIを書き起こしました。</p>
            <h4>NGになった案2</h4>
            <div className="image__wrapper">
              <img src="/static/image/work/list/list-capture6.png" alt=""/>
              <span className="image__caption">（都道府県を複数選択した場合、縦に長すぎてスクロールする必要が生じる）</span>
            </div>
            <h4>レスポンシブに対応させた最終デザイン</h4>
            <p>案2は案1よりも一覧性に欠けるのがデメリットですが、レスポンシブに対応させ、デバイス画面幅に合わせ表示領域を広くさせました。</p>
            <div className="image__wrapper">
              <img src="/static/image/work/list/list-capture7.png" alt=""/>
              <span className="image__caption">（レスポンシブデザインに対応させ、なるべく一覧性を欠かないように）</span>
            </div>
          </section>

          {/* コンテンツ3 */}
          <section className="section__content">
            <h3><span className="h3__inner">モバイル対応</span></h3>

            <h5>（課題）</h5>
            <p>Baseconnect LISTはPC環境のみの提供になっていましたが、スマートフォンからのアクセスが〜割であり、PC環境に限られていたことで、サービスの理解 / コンバージョンに繋がらないユーザーが存在することが問題視されていました。</p>
            <p>当初はモバイルアプリのサービス開発の案も出ていましたが、工数を考えた結果、デザイナーが基本的に実装できる範囲でモバイルでも対応できるようにしました。</p>
            <div className="image__wrapper large">
              <img src="/static/image/work/list/list-capture8.png" alt=""/>
              <span className="image__caption">（デザインしたアートボードの一覧）</span>
            </div>

            <h4>ゴールは「最低限使える体験の実現」</h4>
            <p>スマートフォンでのデザインを作成する際、達成すべきゴールは、「サービスに興味持ち、スマホから登録して、[最低限使える体験] を実現する」としました。</p>
            <p>[最低限使える体験]とは、「自分が営業したい企業の条件を絞り込み、その企業の一覧、詳細が見れる」であると定義しました。</p>
            <p>そこまで体現できれば、スマートフォンで機能が制限されていたとしても、サービスの理解 / PCでの利用に繋がると判断し、これを踏まえワイヤーフレームの作成、デザイン、コーディングまでほぼ1人で実装しました。期間は約10日間です。</p>
            <div className="image__wrapper">
              <img src="/static/image/work/list/list-capture9.png" alt=""/>
            </div>

            <h4>「フッター固定ボタン」のデザイン検討</h4>
            <p>デザインの段階で難しかったのは、「企業情報一覧」にフッター固定で配置した「検索条件の指定」ボタンです。住宅サイトなどの検索サービスのサイトを参考にして、ボタンのデザインを３パターン x 色毎に作成しました。</p>
            <div className="image__wrapper">
              <img src="/static/image/work/list/list-capture10.png" alt=""/>
            </div>
            <p>最終的には、この中から２案を絞り、上司に提案 / 議論を行いデザインを決定しました。</p>
            <p>デザインを決定する要件のポイントとなったのは、以下の２点です。</p>
            <ul>
              <li>1. ボタンであると一目でわかる</li>
              <li>2. フッター固定にすると画面高さが狭まるリスクを避ける</li>
            </ul>
            <div className="image__wrapper">
              <img src="/static/image/work/list/list-capture11.png" alt=""/>
            </div>
            <div className="btn__wrapper">
              <button>プロトタイプを見てみる</button>
            </div>
          </section>

          {/* コンテンツ4 */}
        </Article>
        <ContentFooter pageStatus={this.state.pageStatus}/>
      </Layout>
    )
  }
}
