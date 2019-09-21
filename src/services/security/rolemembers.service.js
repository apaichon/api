const { rolemembers } = require('./rolemembers.class');
const createModel = require('../../models/rolemembers.model');
const hooks = require('./rolemembers.hook');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/rolemembers', new rolemembers(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('rolemembers');

  service.hooks(hooks);
};
