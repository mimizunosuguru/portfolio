import React from "react";
import Layout from "../../components/Layout";
import Recommend from "../../components/recommend";

export default class LP extends React.Component {
  state = {
    pageStatus: 'top'
  }

  render () {
    return (
      <Layout>
        <div className="heroImage"/>
        <article>
          <section className="section__top">
            <div className="page__title">
              <h2>Baseconnect LIST ランディングページ</h2>
              <a>https://sales.baseconnect.in/</a>
            </div>
            <p className="page__desc">
              法人営業を支援する企業情報データベース「Baseconnect LIST」のLP（ランディングページ）です。
              クラウドサービスのBaseconnecct LISTはアプリのダウンロードも必要なく、登録後すぐにサービスの利用を開始できます。
            </p>
            <ul className="page__descList">
              <li className="descList__item">
                <p className="item__title">自分の役割</p>
                <p className="item__cont">当社にジョインした段階でこのLPは公開されており、サービスの機能改善 / アップデートに伴い、デザイン/コーディングを担当しました</p>
              </li>
              <li className="descList__item">
                <p className="item__title">担当箇所</p>
                <p className="item__cont">LP内の「企業情報追加情報」項目をデザイン / コーディングしました。（インターンとしてジョインしてから、新規画面を初めて全て1人で担当させて頂いたタスクです。）</p>
              </li>
              <li className="descList__item">
                <p className="item__title">取り組んだ課題 / チャレンジ</p>
                <p className="item__cont">ベータ版でのローンチとなったため、<br/>
                  1. 企業情報の数が十分でない<br/>
                  2. 地域によってはデータ数の偏りがある<br/>
                  この２点をサービス登録前となるLP内でユーザーに理解してもらえるよう取り組みました</p>
              </li>
              <li className="descList__item">
                <p className="item__title">期間</p>
                <p className="item__cont">当社にジョインした段階でこのLPは公開されており、サービスの機能改善 / アップデートに伴い、デザイン/コーディングを担当しました</p>
              </li>
            </ul>
          </section>
          <section className="section__content">
            <h4>課題1. 企業情報の数が十分でない</h4>
            <p>企業情報のデータベースとなる「Baseconnect LIST」は担当した当時β版でのリリースになっていたため、サービスの肝となる企業情報の数が十分ではなかったのが大きな課題の1つでした。</p>
            <p>この問題を解決するために「リアルタイムで企業情報のデータを作成していることをユーザーに知らせる」ことが要件として挙げられました。そこで「ダッシュボード・掲示板」を想起させるグラフィックを取り入れ、この課題の解決にアプローチしました。</p>
            <p>画像左上の「追加企業数」の数値を緑の太字にすることで、ファーストインプレッションで1番に目立たせています。また、画像右上「リアルタイム更新情報」では、追加された企業名と共に、その時間を強調させました。</p>
            <div className="image__wrapper">
              <img src="/static/image/work/lp/lp-capture1.png" alt=""/>
              <span className="image__caption">「ダッシュボード・掲示板」を想起させるグラフィックで表現</span>
            </div>
          </section>
          <section className="section__content">
            <h4>課題2. 地域によってはデータ数の偏りがある</h4>
            <p>もう1つサービスの課題として、企業情報のデータ作成は主に関西と関東を中心としているため、地域によってはデータの数にばらつきがあるという問題が挙げられていました。</p>
            <p>「サービスを登録したのに、自分の営業したい企業の情報がない…」というのは、ユーザーの満足度・ブランドに対する信頼の低下に繋がります。そのため、サービスの導入を検討するユーザーが懸念するポイントの一つである「自分が営業したい会社の情報はあるか？」という疑問に答えるため、企業情報が多い都道府県をランキング形式で一覧にしました。</p>
            <div className="image__wrapper">
              <img src="/static/image/work/lp/lp-capture2.png" alt=""/>
              <p className="image__caption">企業情報が多い都道府県をランキング形式で一覧表示</p>
            </div>
            <p>コーディングを行う際、「都道府県別会社数」の47都道府県は5行の並びにしてから、スマホでレスポンシブに表示させるのは一見単純そうで、実装が難しいことに気づきました。悩んだ結果、グリッドレイアウトを採用することで、スマホでは都道府県のランキングを5行から2行へ表示することが可能になりました。</p>
            <p>（PC）１列 x 10個のマス目を5列でレイアウトし、都道府県を割り当てる<br/>
              （スマホ）１列 x 24個のマス目を2列でレイアウトし、都道府県を割り当てる</p>
            <div className="image__wrapper">
              <img src="/static/image/work/lp/lp-capture3.png" alt=""/>
            </div>
            <div className="image__wrapper">
              <img src="/static/image/work/lp/lp-capture4.png" alt=""/>
              <span className="image__caption">グリッドレイアウトでレスポンシブに対応</span>
            </div>
          </section>
          <section className="section__content">
            <h4>学び</h4>
            <p>初めてデザインからコーディングまで任せていただいたこのタスクでは、コーディングを踏まえてデザインをすることの必要性、デザイナーでもコードを書くことの大切さを学び、今デザインをする時も大きな糧となっています。</p>
          </section>
        </article>
        <Recommend pageStatus={this.state.pageStatus}/>
        <style>{`
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
    background-image: url("/static/image/work/baseconnect-lp.png");
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

  //プロジェクト説明
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

   //コンテンツ
  .section__content {
    padding: 50px 20px 0;
    margin-bottom: 100px;
  }

  .section__content  h4 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 50px;
    text-align: center;
  }

  .section__content p {
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 40px;
  }

  .image__wrapper {
    margin-bottom: 70px;
  }

  .image__wrapper img {
    display: block;
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
  }

   .image__wrapper .image__caption {
    display: block;
    font-size: 15px;
    color: #999999;
    text-align: center;
    margin: 30px auto;
   }
`
        }</style>
      </Layout>
    )
  }
}
