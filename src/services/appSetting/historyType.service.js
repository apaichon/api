const { historyType } = require('./historyType.class');
const createModel = require('../../models/historyType.model');
const hooks = require('./historyType.hook');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/historyType', new historyType(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('historyType');

  service.hooks(hooks);
};
