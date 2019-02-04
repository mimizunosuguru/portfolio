import React, { Fragment } from 'react';
import styled from "styled-components";
import Section from './styledComponents/section'

const Heading = styled.p`
  font-size: 30px;
  color: #999999;
  font-weight: bold;
  text-align: center;
  margin-bottom: 50px;
`

const CardList = styled.ul`
  display: flex;
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
`

const Thumnail = styled.div`
  height: 270px;
  width: 100%;
  background: url(${props => props.src}) center;
  background-size: cover;
`

//継承できてない
const SectionBordered = styled(Section)`
  padding: 100px;
  border-top: 1px solid black;
  background: #999999;
`


const Recommend = (props) => {
  // work / page / storyで条件分岐
  return (
    <SectionBordered>
      <Heading>他にも見てみる</Heading>
        {props.page === 'lp' ?  (
          <CardList>
            <Card left>
              <Thumnail src="/static/image/work/baseconnect-list.png"/>
              <p className="title">Baseconnect LIST</p>
              <p className="type">UI/UXデザイン、コーディング</p>
            </Card>
            <Card right>
              <Thumnail src="/static/image/work/baseconnect-bootcamp.png"/>
              <p className="title">Design Bootcamp & Product Design</p>
              <p className="type">イベント企画、プロダクトデザイン</p>
            </Card>
          </CardList>
        ) : null
        }
      {props.page === 'list' ?  (
        <CardList>
          <Card left>
            <Thumnail src="/static/image/work/baseconnect-lp.png"/>
            <p className="title">Baseconnect LIST ランディングページ</p>
            <p className="type">UIデザイン、コーディング</p>
          </Card>
          <Card right>
            <Thumnail src="/static/image/work/baseconnect-bootcamp.png"/>
            <p className="title">Design Bootcamp & Product Design</p>
            <p className="type">イベント企画、プロダクトデザイン</p>
          </Card>
        </CardList>
      ) : null
      }
      {props.page === 'bootcamp' ?  (
        <CardList>
          <Card left>
            <Thumnail src="/static/image/work/baseconnect-lp.png"/>
            <p className="title">Baseconnect LIST ランディングページ</p>
            <p className="type">UIデザイン、コーディング</p>
          </Card>
          <Card right>
            <Thumnail src="/static/image/work/baseconnect-list.png"/>
            <p className="title">Baseconnect LIST</p>
            <p className="type">イベント企画、プロダクトデザイン</p>
          </Card>
        </CardList>
      ) : null
      }
    </SectionBordered>
  )
}

export default Recommend
