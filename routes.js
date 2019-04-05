const routes = require('next-routes');

module.exports = routes()
  .add('index', '/')
  .add('news')
  .add('membership')
  .add('collaborations')
  .add('donations')
  .add('branches')
  .add('branch', '/branch/:id');
