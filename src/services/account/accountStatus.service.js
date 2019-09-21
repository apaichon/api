const { accountStatus } = require('./accountStatus.class');
const createModel = require('../../models/accountStatus.model');
const hooks = require('./accountStatus.hook');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/accountStatus', new accountStatus(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('accountStatus');

  service.hooks(hooks);
};
