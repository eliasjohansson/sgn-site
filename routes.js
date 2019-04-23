const routes = require('next-routes');

const lang = ':lang';

module.exports = routes()
  .add('not-found', '/404')
  .add('index', `/${lang}`)
  .add('news', `/${lang}/news`)
  .add('membership', `/${lang}/membership`)
  .add('donate', `/${lang}/donate`)
  .add('branches', `/${lang}/branches`)
  .add('collaborations', `/${lang}/collaborations`)
  .add('collaboration', `/${lang}/collaboration/:id`);
