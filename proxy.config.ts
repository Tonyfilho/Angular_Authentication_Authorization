const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'https://api.realworld.io',
    secure: false,
    changeOrigin: true,
    logLevel: 'debug',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*'
    },
  },
];

module.exports = PROXY_CONFIG;
