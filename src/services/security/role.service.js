const { role } = require('./role.class');
const createModel = require('../../models/role.model');
const hooks = require('./role.hook');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/role', new role(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('role');

  service.hooks(hooks);
};
