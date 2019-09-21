const { activatePurpose } = require('./activatePurpose.class');
const createModel = require('../../models/activatePurpose.model');
const hooks = require('./activatePurpose.hook');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/activatePurpose', new activatePurpose(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('activatePurpose');

  service.hooks(hooks);
};
