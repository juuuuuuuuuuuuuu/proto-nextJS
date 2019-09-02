import Document, { Head, Main, NextScript } from 'next/document';

/**
 * 서버사이드 랜더링에 사용
 * static file도 관리 가능 (css, img)
 * csr 하는 동안에 부르지 않고 page is automatically prerendered.
 */
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initalProps = await Document.getInitialProps(ctx);
    return { ...initalProps };
  }

  render() {
    return (
      <html>
        {/* global Head에 적용 */}
        <Head>
          <meta name="author" content="juyoung111111" />
          <link href="/static/styles.css" rel="stylesheet" />
        </Head>
        <body>
          {/* 각 라우트에 해당하는 페이지가 렌더링되는 부분 */}
          <Main />
          {/* Next.js 관련한 자바스크립트 파일 */}
          <NextScript />
        </body>
      </html>
    );
  }
}
