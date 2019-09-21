const { accountProvider } = require('./accountProvider.class');
const createModel = require('../../models/accountProvider.model');
const hooks = require('./accountProvider.hook');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/accountProvider', new accountProvider(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('accountProvider');

  service.hooks(hooks);
};
