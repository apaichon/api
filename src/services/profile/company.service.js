const { company } = require('./company.class');
const createModel = require('../../models/company.model');
const hooks = require('./company.hook');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/company', new company(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('company');

  service.hooks(hooks);
};
