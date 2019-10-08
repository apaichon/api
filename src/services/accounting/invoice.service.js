// Initializes the `invoice` service on path `/invoice`
const { Invoice } = require('./invoice.class');
const createModel = require('../../models/invoice.model');
const hooks = require('./invoice.hook');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/invoice', new Invoice(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('invoice');

  service.hooks(hooks);
};
