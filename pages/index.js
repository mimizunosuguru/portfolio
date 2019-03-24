import React from "react";
import Layout from "../components/Layout";
import styled from 'styled-components'

import Baseconnect from '../components/work/baseconnect';
import Articles from  '../components/work/articles';
import PersonalWork from  '../components/work/personalWork';
import Section from '../components/styledComponents/section'
import Link from 'next/link'

const Top = styled.div`
  padding-top: 50px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  p {
    font-size: 40px;
    font-weight: bold;
    color: #999999;
    text-align: center;
  }
  
  a {
    color: #000000;
    text-decoration: underline;
    padding: 0 3px;
  }
  
  @media (max-width: 767px) {
    padding-top: 70px;
    height: 350px;
    
    p {
      font-size: 30px;
      line-height: 1.7;
    }
  }
`

export default class Work extends React.Component {
  state = {
    pageStatus: 'top'
  }

  render () {
    return (
      <Layout page="index">
        <Section grey border>
          <Top>
            <p>
              I’m <Link href="/about"><a href="">Sugu Mizuno</a></Link>, UI/UX Designer,<br/>
              currently intern at Baseconnect in Kyoto
            </p>
          </Top>
        </Section>
        <Baseconnect/>
        <PersonalWork/>
        <Articles/>
        {/*<Recommend pageStatus={this.state.pageStatus}/>*/}
      </Layout>
    )
  }
}
