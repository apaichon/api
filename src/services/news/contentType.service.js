const { contentType } = require('./contentType.class');
const createModel = require('../../models/contentType.model');
const hooks = require('./contentType.hook');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/contentType', new contentType(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('contentType');

  service.hooks(hooks);
};
