import css from 'styled-jsx/css'
import Link from 'next/link'
import Layout from "../../components/Layout";
import ContentFooter from "../../components/ContentFooter";

const styles = css`
  section {
    background: #F0F1F5;
  }
  
  .section__title {
    margin-top: 20px;
    margin-bottom: 30px;
    text-align: center;
  }
`

export default class LIST extends React.Component {
  state = {
    pageStatus: 'top'
  }

  render () {
    return (
      <Layout>
        <div>List</div>
        <ContentFooter pageStatus={this.state.pageStatus}/>
        <style jsx>{styles}</style>
      </Layout>
    )
  }
}
