import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    return (
      <html>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="mimizunoDesign" />
        <meta property="og:type" content="website"/>
        <meta property="og:description" content="SuguMizuno's Protfolio site" />
        <meta property="og:url" content="mimizunodesign.com" />
        <meta property="og:site_name" content="mimizunoDesign" />
        <meta property="og:image" content="https://cdn-ak.f.st-hatena.com/images/fotolife/m/mimizunomizuno/20190522/20190522124029.png" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
              integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
              crossOrigin="anonymous" />
        {this.props.styleTags}
      </Head>
      <body>
      <Main />
      <NextScript />
      </body>
      </html>
    )
  }
}
