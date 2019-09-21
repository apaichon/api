const { addressType } = require('./addressType.class');
const createModel = require('../../models/addressType.model');
const hooks = require('./addressType.hook');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/addressType', new addressType(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('addressType');

  service.hooks(hooks);
};
