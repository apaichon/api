const { PostgreSql } = require('./profile.class');
const createModel = require('../../models/profile.model');
const hooks = require('./profile.hook');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/profile', new PostgreSql(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('profile');

  service.hooks(hooks);
};
