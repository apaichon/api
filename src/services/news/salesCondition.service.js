const { salesCondition } = require('./salesCondition.class');
const createModel = require('../../models/salesCondition.model');
const hooks = require('./salesCondition.hook');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/salesCondition', new salesCondition(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('salesCondition');

  service.hooks(hooks);
};
