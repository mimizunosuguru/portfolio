import React from 'react';
import Lottie from 'lottie-react-web'
import animation from './animation.json'
import Layout from "../components/Layout";
import styled from "styled-components";

const AnimationWrap = styled.div`
  -moz-animation: cssAnimation 0s ease-in 2s forwards;
  /* Firefox */
  -webkit-animation: cssAnimation 0s ease-in 2s forwards;
  /* Safari and Chrome */
  -o-animation: cssAnimation 0s ease-in 2s forwards;
  /* Opera */
  animation: cssAnimation 0s ease-in 2s forwards;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  
  @keyframes cssAnimation {
      to {
          width:0;
          height:0;
          overflow:hidden;
      }
  }
  @-webkit-keyframes cssAnimation {
      to {
          width:0;
          height:0;
          visibility:hidden;
    }
  }
`;

export default class Work extends React.Component {
  state = {
    pageStatus: 'top'
  }

  render() {
    return (
      <Layout>
        <AnimationWrap>
          <Lottie
            options={{
              animationData: animation,
              loop: false
            }}
          />
        </AnimationWrap>
      </Layout>
    )
  }
}
