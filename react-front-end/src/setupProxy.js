const proxy = require('http-proxy-middleware');
console.log(" This is proxy:", proxy);

module.exports = function(app) {
  app.use('/maps', proxy.createProxyMiddleware({
    "target": "https://maps.googleapis.com/maps/api/place/textsearch/json",
    "pathRewrite": {
      "^/maps": ""
    },
    "changeOrigin": true
  }))
};