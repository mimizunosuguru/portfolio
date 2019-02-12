import React from 'react'
import styled from 'styled-components'

const Component = styled.footer`
  background: #F0F1F5;
  
  p {
    color: #999999;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 20px;
    text-align: center;
  }

  .inner {
    padding: 40px;
    text-align: center;
  }

  .copyRight {
    color: #999999;
    font-size: 14px;
    font-weight: normal;
    margin: 0;
  }

  button {
    border: 2px solid #999999;
    margin: 0px 0px 20px 0px;
    padding: 12px 20px 12px 20px;
    background: none;
    text-align: center;
    color: #999999;
    font-size: 14px;
    font-weight: bold;
    line-height: 1;
  }

  button:hover {
    cursor: pointer;
    background: #999999;
    color: #fff;
  }

  .icon__circle {
    display: inline-block;
    width: 100px;
    height: 100px;
    border-radius: 60px;
    background-image: url("/static/image/footer/iconImage.jpg");
    background-size: cover;
    margin-bottom: 20px;
  }

  .sns__box {
    margin: 30px 0;
  }

  .sns__box a {
    display: inline-block;
    height: 30px;
    width: 30px;
    opacity: 0.5;
    margin: 0 10px;
    background-repeat: no-repeat;
    background-position: center;
  }

  .sns__box a:hover {
    opacity: 1;
    cursor: pointer;
  }

  .sns__box .github {
    background-image: url("/static/image/footer/icon--github.png");
    background-size: 100% auto ;
  }

  .sns__box .twitter {
    background-image: url("/static/image/footer/icon--twitter.png");
    background-size: 100% auto;
  }

  .sns__box .facebook {
    background-image: url("/static/image/footer/icon--facebook.png");
    background-size: 90% auto;
  }

  .sns__box .note {
    background-image: url("/static/image/footer/icon--note.png");
    background-size: 90% auto;
  }
`

const Footer = () => (
  <Component>
    <div className="inner">
      <a href="https://twitter.com/mimizunosuguru" target="_blank">
        <div className="icon__circle"/>
      </a>
      <p>Thank you for reading!</p>
      {/*<button>お問い合わせはこちら</button>*/}
      <p>feel free to contact me or follow me on</p>
      <div className="sns__box">
        <a href="https://github.com/mimizunosuguru" target="_blank" className="github"/>
        <a href="https://twitter.com/mimizunosuguru" ttarget="_blank" className="twitter"/>
        <a href="https://www.facebook.com/sugu.mizuno" target="_blank" className="facebook"/>
        <a href="https://note.mu/mimizunomizuno" target="_blank" className="note"/>
      </div>
      <p className="copyRight">© 2019 Sugu Mizuno</p>
    </div>
  </Component>
)

export default Footer
