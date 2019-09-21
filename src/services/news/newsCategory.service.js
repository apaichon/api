const { newsCategory } = require('./newsCategory.class');
const createModel = require('../../models/newsCategory.model');
const hooks = require('./newsCategory.hook');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/newsCategory', new newsCategory(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('newsCategory');

  service.hooks(hooks);
};
