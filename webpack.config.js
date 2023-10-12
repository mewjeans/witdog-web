const path = require('path');

module.exports = {
  entry: './src/index.js', // 진입점(entry) 파일 경로를 수정
  output: {
    filename: 'bundle.js', // 출력 파일 이름을 원하는 대로 수정
    path: path.resolve(__dirname, 'dist'), // 출력 디렉토리 경로를 원하는 대로 수정
  },
  module: {
    rules: [
      {
        test: /\.(mp4)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      // 다른 로더 설정...
    ],
  },
};
