// import webpack from 'webpack';
// module.exports = {
  // distDir: 'fm-test-nextjs', // 빌드 파일을 저장할 디렉토리 지정. 기본 값은 .next
  // webpack: (config, { dev }) => { // Webpack 설정값 (webpack.config.js)
  //   config.plugins.push(new webpack.optimize.UglifyJsPlugin({
  //     compress: { warnings: false }
  //   }));
  //   return config;
  // },
  // webpackDevMiddleware: (config) => { // 개발 모드에서 사용되는 Webpack Dev Middleware에 사용되는 설정 값
  //   // BLAHBLAH!
  //   return config;
  // },
  // exportPathMap: () => ({ // Next Export 에서 사용하는 값
    // '/': { page: '/' },
    // '/profile': {page: '/profile', query: {id: }}
  // })
// };