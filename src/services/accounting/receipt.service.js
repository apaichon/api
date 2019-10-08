// Initializes the `receipt` service on path `/receipt`
const { Receipt } = require('./receipt.class');
const createModel = require('../../models/receipt.model');
const hooks = require('./receipt.hook');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/receipt', new Receipt(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('receipt');

  service.hooks(hooks);
};
