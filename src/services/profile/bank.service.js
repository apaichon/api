const { bank } = require('./bank.class');
const createModel = require('../../models/bank.model');
const hooks = require('./bank.hook');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/bank', new bank(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('bank');

  service.hooks(hooks);
};
