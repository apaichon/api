const { paymentStatus } = require('./paymentStatus.class');
const createModel = require('../../models/paymentStatus.model');
const hooks = require('./paymentStatus.hook');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/paymentStatus', new paymentStatus(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('paymentStatus');

  service.hooks(hooks);
};
