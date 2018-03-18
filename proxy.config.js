/**
 * Created by aman on 3/11/2018.
 */
const PROXY_CONFIG = [
  {
    context: [
      '/user',
      '/article'
    ],
    target: 'http://localhost:80',
    secure: false
  }
];

module.exports = PROXY_CONFIG;
