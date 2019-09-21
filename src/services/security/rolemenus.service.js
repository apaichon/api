const { rolemenus } = require('./rolemenus.class');
const createModel = require('../../models/rolemenus.model');
const hooks = require('./rolemenus.hook');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/rolemenus', new rolemenus(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('rolemenus');

  service.hooks(hooks);
};
