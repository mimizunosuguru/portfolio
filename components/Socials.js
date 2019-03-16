import Link from 'next/link'
import styled from 'styled-components'
import Layout from "../pages/about";

const Social = styled.div`
  padding: 80px 80px 0; 
  background: #F0F1F5;
  
  .inner {
    margin: 0 auto;
    max-width: 980px;
  } 
  
  h2 {
    position: relative;
    display: inline-block;
    font-family: 'Avenir',serif;
    ////font-size: 38px;
    font-weight: bold;
    padding-right: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #000000;
    line-height: 1;
  }
  
  a {
    text-decoration: underline;
  }
  
  .social__content {
    display: flex;
    align-items: center;
    margin: 60px 0;
  }
  
  .IconBox__wrapper {
    display: flex;
    margin-left: auto;
  }
  
  .boxIcon {
    //display: inline-block;
    margin-left: 30px;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .boxIcon img {
    width: 100%;
    height: auto;
  }
  
  .boxIcon img.size--adjust {
    width: auto;
    height: 100%;
  }
  
  .social__footer {
    padding: 20px 0;
    border-top: 1px solid #999999;
    text-align: right;
    
    p {
      font-size: 14px;
    }
  }
  
  @media (max-width: 1020px) and (min-width: 768px) {
    padding: 50px 50px 0;  
    
    .boxIcon {
      width: 32px;
      height: 32px;
    }
    
    .social__content {
      margin: 30px 0;
    }
  }
    
  @media (max-width: 767px) {
    padding: 40px 20px 0;
    
    .social__content {
      display: block;
      margin: 30px 0;
    }
    
    .IconBox__wrapper {
      justify-content: space-between;
      margin: 20px 0;
    }
    
    .boxIcon {
      margin: 0;
      width: 30px;
      height: 30px;
    }
  }
`;

const H2 = styled.h2`
  font-size: 38px;
  
  @media (max-width: 767px) {  
    font-size: 30px;
  }
`;

const Socials = () => (
  <Social>
    <div className="inner">
      <H2>Socials</H2>
      <div className="social__content">
        <p>Say hi at <a href="mailto:mimizunosuguru@gmail.com">mimizunosuguru@gmail.com</a> or follow me on...</p>
        <div className="IconBox__wrapper">
          <a href="https://www.linkedin.com/in/sugu-mizuno-b002b1137/" target="_blank" className="boxIcon">
            <img src="/static/image/index/social-linkedin.png" alt=""/>
          </a>

          <a href="https://www.wantedly.com/users/17780119" target="_blank" className="boxIcon">
            <img src="/static/image/index/social-wantedlly.png" alt=""/>
          </a>

          <a href="https://github.com/mimizunosuguru" target="_blank" className="boxIcon">
            <img src="/static/image/index/social-github.png" alt=""/>
          </a>

          <a href="https://note.mu/mimizunomizuno" target="_blank" className="boxIcon">
            <img src="/static/image/index/social-note.png" className="size--adjust" alt=""/>
          </a>

          <a href="https://www.instagram.com/mimizunomizuno/" target="_blank" className="boxIcon">
            <img src="/static/image/index/social-instagram.png" alt=""/>
          </a>

          <a href="https://twitter.com/mimizunosuguru" target="_blank" className="boxIcon">
            <img src="/static/image/index/social-twitter.png" alt=""/>
          </a>

          <a href="https://www.facebook.com/sugu.mizuno" target="_blank" className="boxIcon">
            <img src="/static/image/index/social-facebook.png" alt=""/>
          </a>
        </div>
      </div>
      <div className="social__footer">
        <p>©2019 SUGU MIZUNO</p>
      </div>
    </div>
  </Social>
)

export default Socials
