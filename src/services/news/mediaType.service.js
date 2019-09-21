const { mediaType } = require('./mediaType.class');
const createModel = require('../../models/mediaType.model');
const hooks = require('./mediaType.hook');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/mediaType', new mediaType(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('mediaType');

  service.hooks(hooks);
};
