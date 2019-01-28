import css from 'styled-jsx/css'
import Link from 'next/link'
import Layout from "../../components/Layout";
import ContentFooter from "../../components/ContentFooter";

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
    margin: 0 auto;
  }
  
  .heroImage {
    width: 100%;
    height: 700px;
    background-image: url("/static/work/baseconnect-lp.png");
    background-size: cover;
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
  
  .page__descList .descList__item {
    display: inline-block;
    width: 50%;
  }
  
  .page__descList .descList__item .item__title {
    margin-bottom: 10px;
    font-weight: bold;
  }
`

export default class LP extends React.Component {
  state = {
    pageStatus: 'top'
  }

  render () {
    return (
      <Layout>
        <div className="heroImage"/>
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
          </ul>
        </section>
        <ContentFooter pageStatus={this.state.pageStatus}/>
        <style jsx>{styles}</style>
      </Layout>
    )
  }
}
