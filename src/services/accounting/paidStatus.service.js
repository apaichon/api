const { paidStatus } = require('./paidStatus.class');
const createModel = require('../../models/paidStatus.model');
const hooks = require('./paidStatus.hook');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/paidStatus', new paidStatus(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('paidStatus');

  service.hooks(hooks);
};
