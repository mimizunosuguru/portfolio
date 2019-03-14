import React, { Fragment } from 'react'
import styled from 'styled-components'

import Section from "../styledComponents/section";

//article.jsと共通化可能
const Heading = styled.div`
  text-align: center;
  
  h2 {
    font-size: 32px;
    margin-bottom: 30px;
  }
  
  @media (max-width: 767px) {
    margin-bottom: 20px;
  }
`

const Content = styled.div`
  margin-bottom: 50px;
  
  h3 {
    font-size: 28px;
    font-weight: bold;
    border-left: 4px solid #000;
    padding-left: 20px;
    line-height: 40px;
  }
`

const CardWrapper = styled.ul`
  margin-top: 30px;
`

const Card = styled.li`
  display: inline-block;
  vertical-align: top;
  width: 33%;
  padding-right: 25px;
  
  &:hover {
    opacity: 0.6;
    cursor: pointer; 
  }
  
  .thumbnail{
    height: 200px;
    margin-bottom: 15px;
    background: grey;
  }

  .thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    margin-bottom: 50px;
    padding: 0;
    
    .title,
    .type {
      font-size: 15px;
    }
  }
`

const ShowMore = styled.div `
  display: flex;
  justify-content: center;
  margin: 30px 0;

  a {
    font-size: 24px;
    font-weight: bold;
  }
`

export default class Articles extends React.Component {
  state = {
    pageStatus: 'top',
    showMore: false,
    note: [
      {
        title: 'ジョブ理論を理解する:イケアのビジネスモデルから',
        type: 'ブログ',
        imageURL: 'article--ikea.png',
        linkURL: 'https://note.mu/mimizunomizuno/n/n4d2f0feff8af'
      },
      {
        title: 'デザイナーが10日間100時間の瞑想から学び得たもの',
        type: 'ブログ',
        imageURL: 'article--meditate.png',
        linkURL: 'https://note.mu/mimizunomizuno/n/n219585e8e4a9'
      }
    ],
    uxTimes: [
      {
        title: '「JOBS TO BE DONE」価値創造の新しい発見方法',
        type: 'カンファレンスレポート',
        imageURL: 'article--jobsToBeDone.png',
        linkURL: 'https://uxdaystokyo.com/articles/uxdt2018_conference_jtbd/'


      },
      {
        title: '逆ピラミッド',
        type: '用語集',
        imageURL: 'article--pylamid.png',
        linkURL: 'https://uxdaystokyo.com/articles/glossary/inverted-pyramid/'

      },
      {
        title: '問題発見できなければ、問題解決なんてnできない',
        type: 'UX格言',
        imageURL: 'article--mondai.png',
        linkURL: 'https://uxdaystokyo.com/articles/wireflame_for_check_item/'
      }
    ],
    uxTimesShowMore: [
      {
        title: 'ダンバー数',
        type: '用語集',
        imageURL: 'article--dumbar.png',
        linkURL: 'https://uxdaystokyo.com/articles/glossary/dunbars-number/'
      },
      {
        title: 'カスタマージャーニーマッピング：顧客獲得への道のり',
        type: '翻訳',
        imageURL: 'article--journeyMapping.png',
        linkURL: 'https://uxdaystokyo.com/articles/googlecustomerjourneymapping/'
      },
      {
        title: 'モジュール方式',
        type: '用語集',
        imageURL: 'article--module.png',
        linkURL: 'https://uxdaystokyo.com/articles/glossary/modularity/'
      }
    ]
  };

  clickShowMore = () => {
    this.setState({showMore: true})
  };

  render () {
    return (
      <Section grey border>
        <Heading>
          <h2>Articles</h2>
        </Heading>
        <Content>
          <h3>Note</h3>
          <CardWrapper>
            {this.state.note.map((data, i) => {
              return (
                //TODO key降る必要あり
                <Card key={i}>
                  <a href={data.linkURL} target="_blank">
                    <div className="thumbnail">
                      <img src={"/static/image/article/" + data.imageURL} alt=""/>
                    </div>
                    <p className="title">{data.title}</p>
                    <span className="type">{data.type}</span>
                  </a>
                </Card>
              )
            })}
          </CardWrapper>
        </Content>

        <Content>
          <h3>UX TIMES</h3>
            <CardWrapper>
              {this.state.uxTimes.map((data, i) => {
                return (
                  <Card key={i}>
                    <a href={data.linkURL} target="_blank">
                      <div className="thumbnail">
                        <img src={"/static/image/article/" + data.imageURL} alt=""/>
                      </div>
                      <p className="title">{data.title}</p>
                    </a>
                    <span className="type">{data.type}</span>
                  </Card>
                )
              })}
            </CardWrapper>
          { this.state.showMore ? (
            <CardWrapper>
              {this.state.uxTimesShowMore.map((data, i) => {
                return (
                  <Card key={i}>
                    <a href={data.linkURL} target="_blank">
                      <div className="thumbnail">
                        <img src={"/static/image/article/" + data.imageURL} alt=""/>
                      </div>
                      <p className="title">{data.title}</p>
                      <span className="type">{data.type}</span>
                    </a>
                  </Card>
                )
              })}
            </CardWrapper>
          ) : (
            <ShowMore>
              <a className="showMore__text" onClick={this.clickShowMore}>Show more</a>
            </ShowMore>
          )}
        </Content>
      </Section>
    )
  }
}
