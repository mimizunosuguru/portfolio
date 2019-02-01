import css from 'styled-jsx/css'
import Link from 'next/link'
import Layout from "../../components/Layout";
import ContentFooter from "../../components/ContentFooter";
import React from "react";

const styles = css`
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

export default class LIST extends React.Component {
  state = {
    pageStatus: 'top'
  }

  render() {
    return (
      <Layout>
        <div className="heroImage"/>
        <article>
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
          {/*コンテンツ*/}
          <section className="section__content">
            <h3><span className="h3__inner">1. 検索条件の保存機能追加</span></h3>
            <p>ユーザーのヒアリングから、「検索条件の保存機能」が欲しいという要望が多かったため、機能を実装するに伴い、一部デザインの変更を行いました。</p>

            <h4>Before</h4>
            <p>元々は、左のサイドバーから検索条件を指定すると、「該当者数」が瞬時にヘッダー下の領域に反映されるという仕様です（画像左：Before）</p>

            <h4>After</h4>
            <p>新しい機能を追加するにあたって、「保存した検索条件の選択 / 編集」をナビゲーショバー下のコンポーネントに配置し、「該当社数」は一つ下の階層に下げました（画像右：After）</p>

            <div className="image__wrapper">
              <img src="/static/image/work/list/list-capture1.png" alt=""/>
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
        <ContentFooter pageStatus={this.state.pageStatus}/>
        <style jsx>{styles}</style>
      </Layout>
    )
  }
}
