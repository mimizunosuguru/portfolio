import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import Section from '../styledComponents/section'

const Heading = styled.div`
  padding-top: 20px;
  text-align: center;
  
  h2 {
    font-size: 36px;
    margin-bottom: 15px;
  }

  h4 {
    color: #999999;
    font-size: 16px;
    margin-bottom: 40px;
  }
  
  p.section__desc {
    margin-bottom: 50px;
    text-align: left;
  }
  
  a {
    text-decoration: underline;
  }
  
  @media (max-width: 767px) {
    padding-top: 80px;
  }
`;


const CardList = styled.ul`
  border-bottom: 1px solid #B5B6B7;
`;

const Card = styled.li`
  display: inline-block;
  width: 50%;
  box-sizing: border-box;

  &:nth-child(odd) {
    padding-right: 20px;
    margin-bottom: 50px;
  }

  &:nth-child(even) {
    padding-left: 20px;
    margin-bottom: 50px;
  }
  
  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }

  .title{
    margin-bottom: 5px;
    font-size: 16px;
    font-weight: bold;
  }

  .type{
    font-size: 16px;
    color: #999999;
  }
  
  @media (max-width: 767px) {
    width: 100%;
    padding-top: 80px;

    &:nth-child(odd) {
      padding: 0;
      margin-bottom: 50px;
    }

    &:nth-child(even) {
      padding: 0;
      margin-bottom: 50px;
    }
  }
`;

const Thumbnail = styled.div `
  height: 270px;
  margin-bottom: 15px;
  background: url(${props => props.src}) center;
  background-size: cover;
  
  @media (max-width: 767px) {
    height: 200px;
  }
`;

export default class Baseconnecct extends React.Component {
  state = {
    pageStatus: 'top'
  };

  render () {
    return (
      <Section grey>
        <Heading>
          <h2>Baseconnect Inc.</h2>
          <h4>2017/10 - 2019/現在</h4>
          <p className="section__desc">2017年10月より、フルコミットのUI/UXデザイナーインターンとして活動中。法人営業を支援する企業情報データベース「<a href="https://sales.baseconnect.in/" target="_blank">Baseconnect LIST </a>」の開発を主に担当。
            また、同サービスの根幹となる会社情報を提供する「<a href="https://baseconnect.in/" target="_blank">Baseconnect</a>」のユーザー側および管理画面の機能改善、デザイン未経験者を対象とした「DesignBootcamp」の運営も行う。</p>
        </Heading>
        <CardList>
          <Link href="/baseconnect/baseconnectLp">
            <Card>
              <Thumbnail src="/static/image/work/baseconnect-lp.png"/>
              <p className="title">Baseconnect LIST ランディングページ</p>
              <span className="type">UIデザイン、コーディング</span>
            </Card>
          </Link>

          <Link href="/baseconnect/baseconnectList">
            <Card>
              <Thumbnail src="/static/image/work/baseconnect-list.png"/>
              <p className="title">Baseconnect LIST</p>
              <span className="type">UI/UXデザイン、コーディング</span>
            </Card>
          </Link>

          <Link href="/baseconnect/baseconnectBootcamp">
            <Card>
              <Thumbnail src="/static/image/work/baseconnect-bootcamp.png"/>
              <p className="title">DesignBootcamp</p>
              <span className="type">企画、採用</span>
            </Card>
          </Link>
          <Link href="/baseconnect/baseconnectDashboard">
            <Card>
              <Thumbnail src="/static/image/work/baseconnect-dashboard.jpg"/>
              <p className="title">Dashboard</p>
              <span className="type">ブランディング</span>
            </Card>
          </Link>
        </CardList>
      </Section>
    )
  }
}
