const { zipcode } = require('./zipcode.class');
const createModel = require('../../models/zipcode.model');
const hooks = require('./zipcode.hook');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/zipcode', new zipcode(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('zipcode');

  service.hooks(hooks);
};
