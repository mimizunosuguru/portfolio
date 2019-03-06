import React from "react";
import Layout from "../components/Layout";
import styled from 'styled-components'

import Baseconnect from '../components/work/baseconnect';
import Articles from  '../components/work/articles';
import Section from '../components/styledComponents/section'
import Link from 'next/link'

const Top = styled.div`
  padding-top: 50px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  p {
    font-size: 38px;
    font-weight: bold;
    color: #999999;
    text-align: center;
  }
  
  a {
    color: #000000;
    text-decoration: underline;
    padding: 0 3px;
  }
`

export default class Work extends React.Component {
  state = {
    pageStatus: 'top'
  }

  render () {
    return (
      <Layout>
        <Section grey border>
          <Top>
            <p>
              I’m <Link href="/index"><a href="">Sugu Mizuno</a></Link>, UI/UX Designer,<br/>
              currently intern at Baseconnect in Kyoto
            </p>
          </Top>
        </Section>
        {/*Work*/}
        <Baseconnect/>
        <Articles/>
        {/*<Recommend pageStatus={this.state.pageStatus}/>*/}
      </Layout>
    )
  }
}
