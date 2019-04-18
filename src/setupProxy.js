const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/2api', {
      target: 'http://120.76.208.131:8080/',
      changeOrigin: true,
      pathRewrite: {
        '^/2api/': '/',
      },
    }),
  );
};
