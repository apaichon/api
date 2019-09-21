const { PostgreSql } = require('./account.class');
const createModel = require('../../models/account.model');
const hooks = require('./account.hook');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/account', new PostgreSql(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('account');

  service.hooks(hooks);
};
