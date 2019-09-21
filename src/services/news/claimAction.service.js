const { claimAction } = require('./claimAction.class');
const createModel = require('../../models/claimAction.model');
const hooks = require('./claimAction.hook');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/claimAction', new claimAction(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('claimAction');

  service.hooks(hooks);
};
