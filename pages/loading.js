import React from 'react';
import Lottie from 'lottie-react-web'
import animation from './animation.json'
import Layout from "../components/Layout";

export default class Work extends React.Component {
  state = {
    pageStatus: 'top'
  }

  render() {
    return (
      <Layout>
        <Lottie
          options={{
            animationData: animation,
            loop: false
          }}
        />
      </Layout>
    )
  }
}
