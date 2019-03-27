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
      
      //テスト
      margin: 0 auto;
      text-align: left;
      max-width: 800px;
      font-size: 40px;
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
    margin-bottom: 30px;
    text-align: center;
    
    //テスト
    margin: 0 auto;
    margin-bottom: 30px;
    text-align: left;
    max-width: 800px;
    font-size: 36px;
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
    
    //テスト
    margin: 0 auto;
    text-align: left;
    max-width: 800px;
    font-size: 24px;
    margin-bottom: 20px;
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

export default class HotpepperBeauty extends React.Component {
  state = {
    page: 'hotpepper'
  };

  render() {
    return (
      <Layout>
        <TopImage src="/static/image/work/personalWork_hotpepperBeauty2.jpg"/>
        <Section grey border>
          <Title>
            <h2>Hotpepper Beauty Redesgin</h2>
            {/*<a href="https://beauty.hotpepper.jp/doc/sp/" target="blank">beauty.hotpepper.jp/doc/sp/</a>*/}
            <p className="page__desc">
              個人制作の一環として、iOS版アプリ「Hotpepper Beaty」のリデザインを行いました。
            </p>
          </Title>
          <Desc>
            <li>
              <p className="title">URL</p>
              <p className="cont">beauty.hotpepper.jp/doc/sp/</p>
            </li>
          </Desc>
        </Section>

        <Content>
          <Section grey>
            <h3>アウトプット</h3>
            <p>
              「自分にあったサロンがすぐ見つかる」をコンセプトに、アプリのメイン機能の一つである「サロン検索」にフォーカスを当てリデザインを行いました。
            </p>
            <h5>（改善画面）</h5>
            <ul>
              <li>1. サロン検索（Search）</li>
              <li>2. サロン検索結果（Result）</li>
              <li>3. サロン詳細１(Detail)</li>
              <li>4. サロン詳細２(Detail Scrolled)</li>
            </ul>
            <h4>1. サロン検索（Search）</h4>
            <Image>
              <img src="/static/image/work/personarWork/hotpepper__Search.jpg" alt=""/>
              {/*<span>MOBILE</span>*/}
            </Image>
            <h4>2. サロン検索結果（Result）</h4>
            <Image>
              <img src="/static/image/work/personarWork/hotpepper__Result.jpg" alt=""/>
              {/*<span>MOBILE</span>*/}
            </Image>
            <h4>3. サロン詳細１(Detail)</h4>
            <Image>
              <img src="/static/image/work/personarWork/hotpepper__Detail.jpg" alt=""/>
              {/*<span>MOBILE</span>*/}
            </Image>
            <h4>4. サロン詳細２(Detail Scrolled)</h4>
            <Image>
              <img src="/static/image/work/personarWork/hotpepper__Detail2.jpg" alt=""/>
              {/*<span>MOBILE</span>*/}
            </Image>
          </Section>
        </Content>
        <ArticleRecommend page={this.state.page}/>
      </Layout>
    )
  }
}
