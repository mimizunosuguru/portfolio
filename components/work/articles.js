import React, { Fragment } from 'react'
import styled from 'styled-components'

import Section from "../StyledComponents/section";

//article.jsと共通化可能
const Heading = styled.div`
  text-align: center;
  
  h2 {
    font-size: 32px;
    margin-bottom: 20px;
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
    margin-bottom: 20px;
    padding: 0;
  }
`

const ShowMore = styled.div `
  display: flex;
  justify-content: center;
  margin: 30px 0;

  a {
    font-size: 20px;
    font-weight: bold;
  }
`

const SectionArticle = styled.div`
`

export default class Articles extends React.Component {
  state = {
    pageStatus: 'top',
    showMore: false,
    note: [
      {
        title: 'ジョブ理論を理解する:イケアのビジネスモデルから',
        type: 'Blog',
        imageURL: 'article--ikea.png'
      },
      {
        title: 'デザイナーが10日間100時間の瞑想から学び得たもの',
        type: 'Blog',
        imageURL: 'article--meditate.png'
      }
    ],
    uxTimes: [
      {
        title: '「JOBS TO BE DONE」価値創造の新しい発見方法',
        type: 'カンファレンスレポート',
        imageURL: 'article--jobsToBeDone.png'

      },
      {
        title: '逆ピラミッド',
        type: '用語集',
        imageURL: 'article--pylamid.png'

      },
      {
        title: 'ワイヤーフレームは具体的要素とその配置を確認するもの',
        type: 'UX格言',
        imageURL: 'article--mondai.png'

      }
    ],
    uxTimesShowMore: [
      {
        title: 'ダンバー数',
        type: '用語集',
        imageURL: 'article--dumbar.png'

      },
      {
        title: 'カスタマージャーニーマッピング：顧客獲得への道のり',
        type: '翻訳',
        imageURL: 'article--journeyMapping.png'

      },
      {
        title: 'モジュール方式',
        type: '用語集',
        imageURL: 'article--module.png'
      }
    ]
  };

  clickShowMore = () => {
    this.setState({showMore: true})
  };

  render () {
    return (
      <Section grey>
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
                  <div className="thumbnail">
                    <img src={"/static/image/article/" + data.imageURL} alt=""/>
                  </div>
                  <p className="title">{data.title}</p>
                  <span className="type">{data.type}</span>
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
                    <div className="thumbnail">
                      <img src={"/static/image/article/" + data.imageURL} alt=""/>
                    </div>
                    <p className="title">{data.title}</p>
                    <span className="type">{data.type}</span>
                  </Card>
                )
              })}
            </CardWrapper>
          { this.state.showMore ? (
            <CardWrapper>
              {this.state.uxTimesShowMore.map((data, i) => {
                return (
                  <Card>
                    <div className="thumbnail">
                      <img src={"/static/image/article/" + data.imageURL} alt=""/>
                    </div>
                    <p className="title">{data.title}</p>
                    <span className="type">{data.type}</span>
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
