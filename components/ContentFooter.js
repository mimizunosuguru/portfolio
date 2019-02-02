import React, { Fragment } from 'react';
import styled from "styled-components";

const Card = styled.li`
  height: 300px;
  flex: 1;
  background: #FFFFFF;
  border: 1px solid #F0F1F5;
  border-radius: 8px;
  box-shadow: 0 10px 20px 0 rgba(0,0,0,0.08);
  transition: all 250ms cubic-bezier(.02,.01,.47,1);
  margin-left: ${props => (props.history ? '20' : '')}px;
  margin-right: ${props => (props.work ? '' : '20')}px;

  &:hover {
    box-shadow: 0 40px 40px rgba(0,0,0,.16);
    transform: translate(0,-20px);
    transition-delay: 0s!important;
    transition: all 250ms cubic-bezier(.02,.01,.47,1);
  }

  .inner {
    width: 100%;
    height: 100%;
    display: block;
    padding: 20px;
  }

  .cont  {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 30px 35px;
    background-size: cover;
    background-image: url(${props => (props.history ? "/static/image/history.png" : '/static/image/work.png')});
    background-position: center;
    background-repeat: no-repeat;
  }

  .inner span {
    color: #fff;
    font-size: 20px;
    font-weight: bold;
  }

  .inner p {
    color: #fff;
    font-size: 50px;
    font-weight: bold;
  }

  @media (max-width: 767px) {
     {
      height: 200px;
    }
  
    :hover {
      box-shadow: 0 20px 20px rgba(0,0,0,.08);
      transform: none;
    }
  
    :first-child {
      margin: 0 0 20px;
    }
  
    :last-child {
      margin: 0;
    }
  
    .inner {
      padding: 15px;
    }
`;
import Link from 'next/link'


import Section from '../components/StyledComponents/section'

const CardWrapper = styled.ul`
  display: flex;
  
  a {
    color: black;
    padding: 0 20px;
  }
  
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;


export default class ContentFooter extends React.Component{
  state = {
    page: "test"
  }

  // work / page / storyで条件分岐
  render () {
    return (
      this.props.pageStatus === 'top' ? (
          <Section>
            <CardWrapper>
              <Card history>
                <a className="inner">
                  <div className="cont">
                    <span>Read my</span>
                    <p>History</p>
                  </div>
                </a>
              </Card>
              <Card work>
                <Link href="/work">
                  <a className="inner">
                    <div className="cont">
                      <span>Show my</span>
                      <p>Work</p>
                    </div>
                  </a>
                </Link>
              </Card>
            </CardWrapper>
          </Section>
        ) : null
    )
  }
}
