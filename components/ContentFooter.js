import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import Link from 'next/link'

const styles = css`
  a {
    font-color: black;
    padding: 0 20px;
  }
  
  .card__wrapper {
    display: flex;  
  }
  
  .card {
    height: 300px;
    flex: 1;
    background: #FFFFFF;
    border: 1px solid #F0F1F5;
    border-radius: 8px;
    box-shadow: 0 10px 20px 0 rgba(0,0,0,0.08);
    transition: all 250ms cubic-bezier(.02,.01,.47,1);
  }
  
  .card:hover {
    box-shadow: 0 40px 40px rgba(0,0,0,.16);
    transform: translate(0,-20px);
    transition-delay: 0s!important;
    transition: all 250ms cubic-bezier(.02,.01,.47,1);
  }
  
  .card:first-child {
    margin-right: 20px;
  }
  
  .card:last-child {
    margin-left: 20px;
  }
  
  .card__inner {
    width: 100%;
    height: 100%;
    display: block;
    padding: 20px;
    color: #fff;
  }
  
  .card__cont  {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 30px 35px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
    
  .card--history .card__cont  {
    background-image: url("/static/image/history.png");
   
  }
  
  .card--work .card__cont  {
    background-image: url("/static/image/work.png");
    
  }
  
  .card__inner span {
    font-size: 20px;
    font-weight: bold;
  }
  
  .card__inner p {
    font-size: 50px;
    font-weight: bold;
  }
  
   @media (max-width: 767px) { 
    .card__wrapper {
      flex-direction: column;
    }
    
    .card {
      height: 200px;
    }
    
    .card:hover {
      box-shadow: 0 20px 20px rgba(0,0,0,.08);
      transform: none;
    }
    
    .card:first-child {
      margin: 0 0 20px;
    }
    
    .card:last-child {
      margin: 0;
    }
    
    .card__inner {
      padding: 15px;
    }
  }
`

export default class ContentFooter extends React.Component{
  state = {
    page: "test"
  }

  // work / page / storyで条件分岐
  render () {
    return (
      this.props.pageStatus === 'top' ? (
          <section>
            <div className="section__inner">
              <ul className="card__wrapper">
                <li className="card card--history">
                  <a className="card__inner">
                    <div className="card__cont">
                      <span>Read my</span>
                      <p>History</p>
                    </div>
                  </a>
                </li>
                <li className="card card--work">
                  <Link href="/work">
                    <a className="card__inner">
                      <div className="card__cont">
                        <span>Show my</span>
                        <p>Work</p>
                      </div>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <style jsx>{styles}</style>
          </section>
        ) : null
    )
  }
}
