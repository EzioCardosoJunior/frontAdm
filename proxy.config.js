const PROXY_CONFIG = [
    {
      context:['/'],
      target:'http://127.0.0.1:3333/',
      pathRewrite:{'^/':''}
    }
  ];
  
  module.exports = PROXY_CONFIG;