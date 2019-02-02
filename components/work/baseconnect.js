import React, { Fragment } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import Section from '../StyledComponents/section'

const Head = styled.div`
  padding-top: 20px;
  text-align: center;
  
  h2 {
    font-size: 32px;
    margin-bottom: 15px;
  }

  h4 {
    color: #999999;
    font-size: 15px;
    margin-bottom: 40px;
  }
  
  p.section__desc {
    margin-bottom: 50px;
    text-align: left;
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

          <Head>
            <h2>Baseconnect inc.</h2>
            <h4>2017/10 - 2019/現在</h4>
            <p className="section__desc">2017年10月より、フルコミットのUI/UXデザイナーインターンとして活動中。法人営業を支援する企業情報データベース「Baseconnect LIST」の開発を主に担当している。
              また、同サービスの根幹となる会社情報の管理システム「Baseconnect」の機能改善、未経験を対象としたDesignBootcampの運営も行っている。</p>
          </Head>
          <CardList>
            <Link href="/baseconnect/baseconnectList">
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
                <p className="title">Design Bootcamp & Product Design</p>
                <span className="type">イベント企画、プロダクトデザイン</span>
              </Card>
            </Link>
          </CardList>

      </Section>
    )
  }
}
