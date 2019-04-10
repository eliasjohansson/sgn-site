const routes = require('next-routes');

const lang = ':lang(en|sv)';

module.exports = routes()
  .add('index', `/${lang}`)
  .add('news', `/${lang}/news`)
  .add('membership', `/${lang}/membership`)
  .add('collaborations', `/${lang}/collaborations`)
  .add('donations', `/${lang}/donations`)
  .add('branches', `/${lang}/branches`)
  .add('branch', `/${lang}/branch/:id`);
