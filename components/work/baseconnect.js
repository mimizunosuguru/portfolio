import React, { Fragment } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Thumnail = styled.div `
  background: url(${props => props.src});
`

export default class Baseconnecct extends React.Component {
  state = {
    pageStatus: 'top'
  }

  render () {
    return (
      <Fragment>
        <section>
          <div className="section__inner">
            <div className="section__title">
              <h2>Baseconnect inc.</h2>
              <h4>2017/10 - 2019/現在</h4>
            </div>
            <p className="section__desc">2017年10月より、フルコミットのUI/UXデザイナーインターンとして活動中。法人営業を支援する企業情報データベース「Baseconnect LIST」の開発を主に担当している。
              また、同サービスの根幹となる会社情報の管理システム「Baseconnect」の機能改善、未経験を対象としたDesignBootcampの運営も行っている。</p>
            <ul className="content__list">
              <Link href="/baseconnect/baseconnectLp">
                <li className="list__item link">
                  <div className="content__thumbnail">
                    <Thumnail src="/static/image/work/baseconnect-lp.png"/>

                  </div>
                  <p className="content__title">Baseconnect LIST ランディングページ</p>
                  <span className="content__type">UIデザイン、コーディング</span>
                </li>
              </Link>
              <Link href="/baseconnect/baseconnectList">
                <li className="list__item link">
                  <div className="content__thumbnail">
                    <img src="/static/image/work/baseconnect-list.png" alt=""/>
                  </div>
                  <p className="content__title">Baseconnect LIST</p>
                  <span className="content__type">UI/UXデザイン、コーディング</span>
                </li>
              </Link>
              <Link href="/baseconnect/baseconnectBootcamp">
                <li className="list__item link">
                  <div className="content__thumbnail">
                    <img src="/static/image/work/baseconnect-bootcamp.png" alt=""/>
                  </div>
                  <p className="content__title">Design Bootcamp & Product Design</p>
                  <span className="content__type">イベント企画、プロダクトデザイン</span>
                </li>
              </Link>
            </ul>
          </div>
        </section>
        <style>{`
          section {
            background: #F0F1F5;
            padding-bottom: 0;
          }

          .section__title {
            margin-top: 20px;
            margin-bottom: 40px;
            text-align: center;
          }

          .section__desc {
            margin-bottom: 50px;
          }

          h2 {
            font-size: 32px;
            margin-bottom: 15px;
          }

          h4 {
            color: #999999;
            font-size: 15px;
          }

          .content__list {
            border-bottom: 1px solid #B5B6B7;
          }

          .content__list .list__item {
            display: inline-block;
            width: 50%;
            box-sizing: border-box;
          }


          .content__list .list__item:nth-child(odd) {
            padding-right: 20px;
            margin-bottom: 50px;
          }

          .content__list .list__item:nth-child(even) {
            padding-left: 20px;
            margin-bottom: 50px;
          }

          .content__thumbnail{
            height: 270px;
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

          @media (max-width: 767px) {
            section {
              padding-top: 80px;
            }

            .content__list .list__item {
              width: 100%;
            }

            .content__list .list__item:nth-child(odd) {
              padding: 0;
              margin-bottom: 50px;
            }

            .content__list .list__item:nth-child(even) {
              padding: 0;
              margin-bottom: 50px;
            }

            .content__thumbnail{
              height: 200px;
             }
          }
        `}</style>
      </Fragment>
    )
  }
}
