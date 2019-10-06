// Initializes the `broadcasterPackage` service on path `/broadcasterPackage`
const { broadcasterPackage } = require('./broadcasterPackage.class');
const createModel = require('../../models/broadcasterPackage.model');
const hooks = require('./broadcasterPackage.hook');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/broadcasterPackage', new broadcasterPackage(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('broadcasterPackage');

  service.hooks(hooks);
};
