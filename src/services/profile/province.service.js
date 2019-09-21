const { province } = require('./province.class');
const createModel = require('../../models/province.model');
const hooks = require('./province.hook');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/province', new province(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('province');

  service.hooks(hooks);
};
