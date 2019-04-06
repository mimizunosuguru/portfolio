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
`

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
    font-size: 24px;
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
  
  a {
    text-decoration: underline;
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

export default class HotpepperBeauty extends React.Component {
  state = {
    page: 'hotpepper'
  };

  render() {
    return (
      <Layout>
        <TopImage src="/static/image/work/personalWork_hotpepperBeauty2.jpg"/>



          <Section grey>
            <Top>
              <div className="inner">
                <Title>
                  <h2>Hotpepper Beauty Redesgin</h2>
                  {/*<a href="https://beauty.hotpepper.jp/doc/sp/" target="blank">beauty.hotpepper.jp/doc/sp/</a>*/}
                  <p className="page__desc">
                    デザイントレーニングの一環として、iOS版アプリ「Hotpepper Beaty」のリデザインを行いました。
                  </p>
                </Title>
                <Desc>
                  <li>
                    <p className="title">URL</p>
                    <a href="https://beauty.hotpepper.jp/doc/sp/" target="_blank" className="cont">https://beauty.hotpepper.jp/doc/sp/</a>
                  </li>
                </Desc>
              </div>
            </Top>
            <Content>
              <h3>アウトプット</h3>
              <p>
                「自分にあったサロンがすぐ見つかる」をコンセプトに、本アプリの機能の一つである「サロン検索」にフォーカスを当てリデザインを行いました。
              </p>
              <h5>（リデザイン画面）</h5>
              <ul>
                <li>1. サロン検索</li>
                <li>2. サロン検索結果</li>
                <li>3. サロン詳細（Top）</li>
                <li>4. サロン詳細（Scroll）</li>
              </ul>
              <h4>1. サロン検索</h4>
              <Image>
                <img src="/static/image/work/personarWork/hotpepper/BA/hotpepper__BA1.jpg" alt=""/>
                {/*<span>MOBILE</span>*/}
              </Image>
              <h4>2. サロン検索結果</h4>
              <Image>
                <img src="/static/image/work/personarWork/hotpepper/BA/hotpepper__BA2.jpg" alt=""/>
                {/*<span>MOBILE</span>*/}
              </Image>
              <h4>3. サロン詳細（Top）</h4>
              <Image>
                <img src="/static/image/work/personarWork/hotpepper/BA/hotpepper__BA3.jpg" alt=""/>
                {/*<span>MOBILE</span>*/}
              </Image>
              <h4>4. サロン詳細（Scroll）</h4>
              <Image>
                <img src="/static/image/work/personarWork/hotpepper/BA/hotpepper__BA4.jpg" alt=""/>
                {/*<span>MOBILE</span>*/}
              </Image>

              <h3>ケーススタディー</h3>
              <p>リデザインを行った際に悩んだポイントを大きく３つに絞り、ケーススタディとしてまとめました。</p>
              <h5>Questions</h5>
              <ul>
                <li>1. 最上部タブ切り替えは有効？</li>
                <li>2. 「<i className="fas fa-search"/>」はユーザーに伝わる？</li>
                <li>3. ユーザーが求めている情報を適切に提示するには？</li>
              </ul>
              <h4>Question1</h4>
              <Image>
                <img src="/static/image/work/personarWork/hotpepper/Q1/hottpepper__Q1.jpg" alt=""/>
              </Image>
              <h4>Before</h4>
                <p>「1. サロン検索」の旧デザインは、「サロンのジャンル選択」（ヘア / ネイル / まつげ / リラク / エステ）を最上部でタブ切り替えできるUIでした。</p>
                <p>タブを採用するメリットの一つは、切り替え可能にすることで、それぞれの情報を隠せることにあります。</p>
                <p>しかし、アプリを研究してみると、このタブ切り替えを行なっても、コンテンツ内容にほとんど差がないことに気がつきました。</p>
              <Image>
                <img src="/static/image/work/personarWork/hotpepper/Q1/hottpepper__Q1-1.jpg" alt=""/>
                <span>画面下部の「広告」「検索履歴」のみ、タブごとで表示が変わる</span>
              </Image>

              <h4>After</h4>
              <p>
                非常に悩みどころではありましたが、最上部タブを採用しない代わりに、階層を大きく「1. アカウント情報」「2. 検索条件の指定」の二つに分けました。「サロンのジャンル選択」は、「2. 検索条件の指定」の一部にしています。
              </p>
              <Image>
                <img src="/static/image/work/personarWork/hotpepper/Q1/hottpepper__Q1-2.jpg" alt=""/>
              </Image>

              <p>情報のまとまりにメリハリをつけることで、どこに視線をフォーカスすれば良いか分かりやすいUIにできたと思います。これは白黒にするとよりわかりやすいです。背景がグレーントーンの時、白色は目立ちやすくなり、ユーザーにタップさせたい領域は白色で統一させています。</p>
              <p>（参考：<a href="https://goodpatch.com/blog/uicrunch-13/" target="_blank">任天堂のUI/UXデザイナーが語るデザイン思想 [Goodpatch Blog]</a>）</p>
              {/*<Image>*/}
              <Image>
                <img src="/static/image/work/personarWork/hotpepper/Q1/hottpepper__Q1-3.jpg" alt=""/>
                <span>ユーザーにタップさせたい領域は白色で目立たせるように統一</span>
              </Image>
              {/*</Image>*/}
              <h4>Compare</h4>
              <Image>
                <img src="/static/image/work/personarWork/hotpepper/BA/hotpepper__BA1.jpg" alt=""/>
              </Image>

              <h4>Question2</h4>
              <Image>
                <img src="/static/image/work/personarWork/hotpepper/Q2/hottpepper__Q2.jpg" alt=""/>
              </Image>
              <h4>Before</h4>
              <p>「2. サロン検索結果」の旧デザインで気にかかったのは、ヘッダーの右上の「<i className="fas fa-search"/>」アイコンでした。</p>
              <p>このボタンをタップすると「検索条件の詳細項目」を指定することができます。つまり、検索条件の「絞り込み / フィルター」機能です。</p>
              <Image>
                <img src="/static/image/work/personarWork/hotpepper/Q2/hottpepper__Q2-1.jpg" alt=""/>
                <span>アイコンをタップで、「検索条件の詳細項目」を指定できる</span>
              </Image>
              <p>しかし、これは実際に使ってみると、アイコンを押した後の挙動が直感的にわかりずらい印象を抱きました。</p>
              <p>またこのUIのデメリットは、どのような検索条件を指定しているかは、「<i className="fas fa-search"/>」アイコンを押してその都度確認する必要がある点が挙げられます。</p>
              <h4>After</h4>
              <p>リデザインでは、画面上部に「選択中の検索条件」と、その他の条件を指定する「フィルターボタン」を追加しました。</p>
              <Image>
                <img src="/static/image/work/personarWork/hotpepper/Q2/hottpepper__Q2-2.jpg" alt=""/>
              </Image>
              <p>その他のリデザインのポイントとして、全体の配色に、サブカラーとして「水色」を追加しました。</p>

              <p>サロン情報にある3つの項目「駅からの距離」「口コミ」「料金（カット）」は、ユーザーが美容院を比較する際に特に注目するポイントになると考え、サブカラーを取り入れることでコントラストを高めました。</p>
              <h4>Compare</h4>
              <Image>
                <img src="/static/image/work/personarWork/hotpepper/BA/hotpepper__BA2.jpg" alt=""/>
              </Image>

              <h4>Question3</h4>
              <Image>
                <img src="/static/image/work/personarWork/hotpepper/Q3/hottpepper__Q3.jpg" alt=""/>
              </Image>
              <h4>Before</h4>
              <p>「3. サロン詳細」画面のリデザインで一番苦しんだのは、ナビゲーションの情報設計でした。</p>
              <p>旧デザインでは、上部に「クーポン・メニュー」「こだわり」「スタイリスト」「ヘアスタイル」「ブログ」「口コミ」の６つのボタンを配置し、タップすると各項目の詳細に移ります。</p>
              <p>タップせずにそのままスクロールすると、サロンの情報と、先ほどの各６項目の一部の情報が一覧で確認できます。</p>
              <Image>
                <img src="/static/image/work/personarWork/hotpepper/Q3/hottpepper__Q3-1.jpg" alt=""/>
                <span>「サロン詳細」画面をスクロールした時</span>
              </Image>
              <Image>
                <img src="/static/image/work/personarWork/hotpepper/Q3/hottpepper__Q3-2.jpg" alt=""/>
                <span>上部６つのボタンをタップすると、画面遷移する</span>
              </Image>

              <p>WEB版では、「サロン情報」「クーポン・メニュー」でまず２つのタブに分かれ、合計で最大３つのタブが入り込むUIになっています。</p>

              <Image>
                <img src="/static/image/work/personarWork/hotpepper/Q3/hottpepper__Q3-3.jpg" alt=""/>
                <span>WEB版は、タブが最大３つ入り込むUIでなかなか複雑</span>
              </Image>

              <h4>After</h4>
              <p><a href="https://uxdaystokyo.com/articles/glossary/hicks-hymans-law/" target="_blank">ヒックの法則</a>にあるように、人は提供される情報が多ければ多いほど、判断力が低下します。</p>
              <p>リデザインではユーザーが求めている情報は、大きく「サロン情報」「クーポン・メニュー」「口コミ」「マップ」の４つに絞られると仮説を立て、タブ形式で表示切り替えできるデザインを採用しました。</p>
              <Image>
                <img src="/static/image/work/personarWork/hotpepper/Q3/hottpepper__Q3-4.jpg" alt=""/>
                <span>ユーザーが求める4つの情報を、タブ形式で提示</span>
              </Image>
              <p>この４タブは、この前の画面となる「2. サロン検索結果」で表示されている情報を踏まえ設計しました。</p>

              <p>「2. サロンの検索結果」で、４つの情報（基本情報 / 料金 / 評判 / 場所）をユーザーにリードとして提示し、サロンを比較させます。</p>

              <p>その後、詳細画面では同じ項目を４つのタブで提示することで、ユーザーは自分が知りたい情報にすぐたどり着くことができます。（「<a href="https://uxdaystokyo.com/articles/glossary/inverted-pyramid/" target="_blank">逆ピラミッド</a>」と呼ばれるを情報提示方法を応用）</p>

              <Image>
                <img src="/static/image/work/personarWork/hotpepper/Q3/hottpepper__Q3-5.jpg" alt=""/>
                <span>4つの情報をユーザーにリードとして提示し、詳細画面ではタブ形式で提示</span>
              </Image>

              <h4>Compare</h4>
              <Image>
                <img src="/static/image/work/personarWork/hotpepper/BA/hotpepper__BA3.jpg" alt=""/>
              </Image>
              <Image>
                <img src="/static/image/work/personarWork/hotpepper/BA/hotpepper__BA4.jpg" alt=""/>
              </Image>



            </Content>
          </Section>
        <ArticleRecommend page={this.state.page}/>
      </Layout>
    )
  }
}
