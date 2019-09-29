const { NewsAssets } = require('./newsAssets.class');
const createModel = require('../../models/newsAssets.model');
const hooks = require('./newsAssets.hook');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/newsAssets', new NewsAssets(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('newsAssets');

  service.hooks(hooks);
};
