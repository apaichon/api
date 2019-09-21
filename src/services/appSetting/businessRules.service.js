const { businessRules } = require('./businessRules.class');
const createModel = require('../../models/businessRules.model');
const hooks = require('./businessRules.hook');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/businessRules', new businessRules(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('businessRules');

  service.hooks(hooks);
};
