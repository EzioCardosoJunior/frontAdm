const PROXY_CONFIG = [
  {
    "/": {
      target:'http://127.0.0.1:3333/',
      "secure": false,
      "changeOrigin": true,
      "logLevel": "debug"
    }
  }
    
  ];
  
  module.exports = PROXY_CONFIG;

/* 
  {
    context:['/'],
    target:'http://127.0.0.1:3333/',
    pathRewrite:{'^/':''}
  } */