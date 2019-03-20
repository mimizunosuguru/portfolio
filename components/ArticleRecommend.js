import React, { Fragment } from 'react';
import Link from 'next/link'
import styled from "styled-components";
import Section from './styledComponents/section'

const Heading = styled.p`
  font-size: 30px;
  color: #999999;
  font-weight: bold;
  text-align: center;
  margin-bottom: 50px;
  
  @media (max-width: 767px) {
    margin-bottom: 20px;
  }
`

const CardList = styled.ul`
  display: flex;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`

const Card = styled.li`
  flex: 1;
  margin-right: ${props => props.left? 20 : ''}px;
  margin-left: ${props => props.right? 20 : ''}px;
  
  
  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
  
  .title {
    font-size: 16px;
    font-weight: bold;
    margin-top: 20px;
    line-height: 1;
  }
  
  .type {
    font-size: 16px;
    color: #999999;
    margin-top: 15px;
    line-height: 1;
  }
  
  @media (max-width: 767px) {
    margin-right: 0;
    margin-left: 0;
    margin-bottom: 25px;
  }
`

const Thumnail = styled.div`
  height: 270px;
  width: 100%;
  background: url(${props => props.src}) center;
  background-size: cover;
  
  @media (max-width: 767px) {
    height: 200px;
  }
`


const Recommend = (props) => {
  // work / page / storyで条件分岐
  return (
    <Section>
      <Heading>他にも見てみる</Heading>
        {props.page === 'lp' ?  (
          <CardList>
            <Link href="/baseconnect/baseconnectList">
              <Card left>
                <Thumnail src="/static/image/work/baseconnect-list.png"/>
                <p className="title">Baseconnect LIST</p>
                <p className="type">UI/UXデザイン、コーディング</p>
              </Card>
            </Link>
            <Link href="/baseconnect/baseconnectDashboard">
              <Card right>
                <Thumnail src="/static/image/work/baseconnect-dashboard.jpg"/>
                <p className="title">Dashboard</p>
                <p className="type">ブランディング</p>
              </Card>
            </Link>
          </CardList>
        ) : null
        }
      {props.page === 'list' ?  (
        <CardList>
          <Link href="/baseconnect/baseconnectLp">
            <Card left>
              <Thumnail src="/static/image/work/baseconnect-lp.png"/>
              <p className="title">Baseconnect LIST ランディングページ</p>
              <p className="type">UIデザイン、コーディング</p>
            </Card>
          </Link>
          <Link href="/baseconnect/baseconnectDashboard">
            <Card right>
              <Thumnail src="/static/image/work/baseconnect-dashboard.jpg"/>
              <p className="title">Dashboard</p>
              <p className="type">ブランディング</p>
            </Card>
          </Link>
        </CardList>
      ) : null
      }
      {props.page === 'bootcamp' ?  (
        <CardList>
          <Link href="/baseconnect/baseconnectDashboard">
            <Card right>
              <Thumnail src="/static/image/work/baseconnect-dashboard.jpg"/>
              <p className="title">Dashboard</p>
              <p className="type">ブランディング</p>
            </Card>
          </Link>
          <Link href="/baseconnect/baseconnectList">
            <Card right>
              <Thumnail src="/static/image/work/baseconnect-list.png"/>
              <p className="title">Baseconnect LIST</p>
              <p className="type">UI/UXデザイン、コーディング</p>
            </Card>
          </Link>
        </CardList>
      ) : null
      }
      {props.page === 'dashboard' ?  (
        <CardList>
          <Link href="/baseconnect/baseconnectBootcamp">
            <Card left>
              <Thumnail src="/static/image/work/baseconnect-bootcamp.png"/>
              <p className="title">DesignBootcamp</p>
              <p className="type">企画、採用</p>
            </Card>
          </Link>
          <Link href="/baseconnect/baseconnectList">
            <Card right>
              <Thumnail src="/static/image/work/baseconnect-list.png"/>
              <p className="title">Baseconnect LIST</p>
              <p className="type">UI/UXデザイン、コーディング</p>
            </Card>
          </Link>
        </CardList>
      ) : null
      }
    </Section>
  )
}

export default Recommend
