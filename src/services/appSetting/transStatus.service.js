const { transStatus } = require('./transStatus.class');
const createModel = require('../../models/transStatus.model');
const hooks = require('./transStatus.hook');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/transStatus', new transStatus(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('transStatus');

  service.hooks(hooks);
};
