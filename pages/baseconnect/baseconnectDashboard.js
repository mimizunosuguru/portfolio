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

export default class Dashboard extends React.Component {
  state = {
    page: 'dashboard'
  };

  render() {
    return (
      <Layout>
        <TopImage src="/static/image/work/baseconnect-dashboard.jpg"/>
        <Section grey>
          <Top>
            <div className="inner">
              <Title>
                <h2>Dashboard</h2>
                <p className="page__desc">
                  Baseconnectでは世界中のデータを繋ぐというミッションを掲げ、社内のドキュメントやあらゆるデータもオープンに公開するように努めています。その一環として、自社で作成する企業情報等のデータの数値管理用ダッシュボードを作成しました。
                </p>
              </Title>
              <Desc>
                <li>
                  <p className="title">役割</p>
                  <p className="cont">UIデザイン/コーディング（Chart.js）</p>
                </li>
              </Desc>
            </div>
          </Top>
          <Content>
            <h3>チャレンジ</h3>
            <p>ダッシュボードを作る際の1番の危惧は、見た目のかっこよさだけを重視し、作った後に役割を果たさずに飾りになってしまうことでした。そのためデザインの際は、まず数値が1番に目に入るようにに大きく目立たせています。また、基本的に３つの色に絞ることで、情報にまとまりをまとまりをもたせました。</p>

            <Image>
              <img src="/static/image/work/dashboard/dashboard__concept.jpg" alt=""/>
            </Image>

            <p>ダークモードのデザインも作成しました。今流行りのデザインで飽きさせないような工夫を施しています。</p>

            <Image>
              <img src="/static/image/work/dashboard/iMac-dashboard-black.jpg" alt=""/>
            </Image>
          </Content>
        </Section>
        <ArticleRecommend page={this.state.page}/>
      </Layout>
    )
  }
}
