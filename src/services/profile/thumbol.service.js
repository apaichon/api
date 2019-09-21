const { thumbol } = require('./thumbol.class');
const createModel = require('../../models/thumbol.model');
const hooks = require('./thumbol.hook');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/thumbol', new thumbol(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('thumbol');

  service.hooks(hooks);
};
