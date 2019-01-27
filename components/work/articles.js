import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import Link from 'next/link'

const styles = css`
  section {
    background: #F0F1F5;
    padding-bottom: 0;
  }
  
  .section__title {
    margin-top: 20px;
    margin-bottom: 30px;
    text-align: center;
  }
  
  h2 {
    font-size: 32px;
    margin-bottom: 15px;
  }
  
  h3 {
    font-size: 28px;
    font-weight: bold;
    border-left: 4px solid #000;
    padding-left: 20px;
    line-height: 40px;
  }
  
  .content__list {
    margin-top: 30px;
  }
  
  .content__wrapper {
    margin-bottom: 50px;
  }
  
  .content__list .list__item {
    display: inline-block;
    vertical-align: top;
    width: 33%;
    padding-right: 25px;
  }
 
  .content__thumbnail{
    height: 200px;
    margin-bottom: 15px;
    background: grey;
  }
  
  .content__thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .content__title{
    margin-bottom: 5px;
    font-size: 16px;
    font-weight: bold;
  }
  
  .content__type{
    font-size: 16px;
    color: #999999;
  }
  
  .showMore {
    display: flex;
    justify-content: center;
    margin: 30px 0;
  }
  
  .showMore__text {
    font-size: 20px;
    font-weight: bold;
  }
  
  @media (max-width: 767px) {
    .content__list .list__item {
      width: 100%;
      margin-bottom: 20px;
      padding: 0; 
    }
  }
`

export default class Articles extends React.Component {
  state = {
    pageStatus: 'top',
    showMore: false,
    note: [
      {
        title: 'ジョブ理論を理解する:イケアのビジネスモデルから',
        type: 'Blog',
        imageURL: 'article--meditate'
      },
      {
        title: 'デザイナーが10日間100時間の瞑想から学び得たもの',
        type: 'Blog'
      }
    ],
    uxTimes: [
      {
        title: '「JOBS TO BE DONE」価値創造の新しい発見方法',
        type: 'カンファレンスレポート'

      },
      {
        title: '逆ピラミッド',
        type: '用語集'

      },
      {
        title: 'ワイヤーフレームは具体的要素とその配置を確認するもの',
        type: 'UX格言'

      }
    ],
    uxTimesShowMore: [
      {
        title: 'ダンバー数',
        type: '用語集'

      },
      {
        title: 'カスタマージャーニーマッピング：顧客獲得への道のり',
        type: '翻訳'

      },
      {
        title: 'モジュール方式',
        type: '用語集'

      }
    ]
  }

  clickShowMore = () => {
    this.setState({showMore: true})
  }

  render () {
    return (
      <Fragment>
        <section className="articles">
          <div className="section__inner">
            <div className="section__title">
              <h2>Articles</h2>
            </div>
            <div className="content__wrapper content--note">
              <h3>Note</h3>
              <ul className="content__list">
                {this.state.note.map((data) => {
                  return (
                    <li className="list__item link">
                      <div className="content__thumbnail">
                        <img src="" alt=""/>
                      </div>
                      <p className="content__title">{data.title}</p>
                      <span className="content__type">{data.type}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="content__wrapper content--uxTimes">
              <h3>UX TIMES</h3>
              <ul className="content__list">
                {this.state.uxTimes.map((data) => {
                  return (
                    <li className="list__item link">
                      <div className="content__thumbnail">
                        <img src="" alt=""/>
                      </div>
                      <p className="content__title">{data.title}</p>
                      <span className="content__type">{data.type}</span>
                    </li>
                  )
                })}
              </ul>

              { this.state.showMore ? (
                <ul className="content__list">
                  {this.state.uxTimesShowMore.map((data) => {
                    return (
                      <li className="list__item link">
                        <div className="content__thumbnail">
                          <img src={data.imageURL} alt=""/>
                        </div>
                        <p className="content__title">{data.title}</p>
                        <span className="content__type">{data.type}</span>
                      </li>
                    )
                  })}
                </ul>
              ) : (
                <div className="showMore">
                  <a className="showMore__text" onClick={this.clickShowMore}>Show more</a>
                </div>
              )}

            </div>
          </div>
        </section>
        <style jsx>{styles}</style>
      </Fragment>
    )
  }
}
