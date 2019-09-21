const { news } = require('./news.class');
const createModel = require('../../models/news.model');
const hooks = require('./news.hook');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/news', new news(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('news');

  service.hooks(hooks);
};
