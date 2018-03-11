/**
 * Created by aman on 3/11/2018.
 */
const PROXY_CONFIG = [
  {
    context: [
      '/user',
      '/article'
    ],
    target: 'http://localhost:3000',
    secure: false
  }
];

module.exports = PROXY_CONFIG;
