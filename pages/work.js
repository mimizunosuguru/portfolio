import css from 'styled-jsx/css'
import Link from 'next/link'
import Layout from "../components/Layout";
import ContentFooter from "../components/ContentFooter";

import Baseconnect from '../components/work/baseconnect'
import Articles from  '../components/work/articles'

const styles = css`
  section {
    background: #F0F1F5;
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
  
  h4 {
    color: #999999;
    font-size: 15px;
  }
  
  .content__list {
    margin-top: 30px;
  }
  
  .content__list .list__item {
    display: inline-block;
    width: 50%;
    box-sizing: border-box;
  }
  
  
  .content__list .list__item:nth-child(odd) {
    padding-right: 15px;
    margin-bottom: 30px;
  }
  
  .content__list .list__item:nth-child(even) {
    padding-left: 15px;
    margin-bottom: 30px;
  }
  
  .thumbnail{
    height: 270px;
    background: grey;
  }
`

export default class Work extends React.Component {
  state = {
    pageStatus: 'top'
  }

  render () {
    return (
      <Layout>
        {/*Work*/}
        <Baseconnect/>
        <Articles/>

        <ContentFooter pageStatus={this.state.pageStatus}/>
        <style jsx>{styles}</style>
      </Layout>
    )
  }
}
