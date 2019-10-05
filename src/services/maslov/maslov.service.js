// Initializes the `maslov` service on path `/maslov`
const { Maslov } = require('./maslov.class');
const createModel = require('../../models/maslov.model');
const hooks = require('./maslov.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/maslov', new Maslov(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('maslov');

  service.hooks(hooks);
};
