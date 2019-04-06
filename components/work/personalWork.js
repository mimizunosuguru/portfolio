import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import Section from '../styledComponents/section'

const Heading = styled.div`
  //padding-top: 20px;
  text-align: center;
  
  h2 {
    font-size: 36px;
    margin-bottom: 50px;
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
    //padding-top: 80px;
  }
`;


const CardList = styled.ul`
  //border-bottom: 1px solid #B5B6B7;
  display: flex;
  justify-content: center;
`;

const Card = styled.li`
  display: inline-block;
  width: 80%;
  box-sizing: border-box;

  &:nth-child(odd) {
    //padding-right: 20px;
    margin-bottom: 50px;
  }

  &:nth-child(even) {
    //padding-left: 20px;
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
  height: 350px;
  margin-bottom: 15px;
  background: url(${props => props.src}) center;
  background-size: cover;
  
  @media (max-width: 767px) {
    height: 200px;
  }
`;

export default class PersonalWork extends React.Component {
  state = {
    pageStatus: 'top'
  };

  render () {
    return (
      <Section grey border>
        <Heading>
          <h2>Personal works</h2>
          {/*<h4>2017/10 - 2019/現在</h4>*/}
        </Heading>
        <CardList>
          <Link href="/personalWorks/hotpepperBeauty">
            <Card>
              <Thumbnail src="/static/image/work/personalWork_hotpepperBeauty2.jpg"/>
              <p className="title">Hotpepper Beauty Redesign</p>
              <span className="type">リデザインチャレンジ</span>
            </Card>
          </Link>
        </CardList>
      </Section>
    )
  }
}
