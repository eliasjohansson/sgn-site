const routes = require("next-routes");

const lang = ":lang(en|sv)";

module.exports = routes()
  .add("index", `/${lang}`)
  .add("news", `/${lang}/news`)
  .add("membership", `/${lang}/membership`)
  .add("donate", `/${lang}/donate`)
  .add("branches", `/${lang}/branches`)
  .add("collaborations", `/${lang}/collaborations`)
  .add("collaboration", `/${lang}/collaboration/`);
