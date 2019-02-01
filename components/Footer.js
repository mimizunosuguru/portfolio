import Link from 'next/link'
import css from 'styled-jsx/css'

const Footer = () => (
  <footer>
    <div className="footer__inner">
      <div className="icon__circle"/>
      <p>Thank you for reading!</p>
      <button>お問い合わせはこちら</button>
      <p>feel free to contact me or follow me on</p>
      <div className="sns__box">
        <a className="github"/>
        <a className="twitter"/>
        <a className="facebook"/>
        <a className="note"/>
      </div>
      <p className="copyRight">© 2019 Sugu Mizuno</p>
    </div>
    <style>{`
  section {
    background: #fff;
    padding: 50px;
  }

  footer {
    background: #F0F1F5;
    padding: 40px;
  }

  p {
    color: #999999;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 20px;
    text-align: center;
  }

  .footer__inner {
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
    background-image: url("/static/image/iconImage.jpg");
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
    background-image: url("/static/image/icon--github.png");
    background-size: 100% auto ;
  }

  .sns__box .twitter {
    background-image: url("/static/image/icon--twitter.png");
    background-size: 100% auto;
  }

  .sns__box .facebook {
    background-image: url("/static/image/icon--facebook.png");
    background-size: 90% auto;
  }

  .sns__box .note {
    background-image: url("/static/image/icon--note.png");
    background-size: 90% auto;
  }
`}</style>
  </footer>
)

export default Footer
