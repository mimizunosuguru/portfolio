import React from "react";
import Layout from "../components/Layout";
import Recommend from "../components/Recommend";

import Baseconnect from '../components/work/baseconnect';
import Articles from  '../components/work/articles';

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
        <Recommend pageStatus={this.state.pageStatus}/>
      </Layout>
    )
  }
}
